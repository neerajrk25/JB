import { Injectable } from "@angular/core";
import * as alertify from 'alertifyjs';

export class NotifyDefaultOptions {
    autoReset?= true;
    basic?= false;
    closable?= true;
    closableByDimmer?= true;
    frameless?= false;
    maintainFocus?= true; // <== global default not per instance, applies to all dialogs
    maximizable?= true;
    modal?= true;
    movable?= true;
    moveBounded?= false;
    overflow?= true;
    padding?= true;
    pinnable?= true;
    pinned?= true;
    preventBodyShift?= false; // <== global default not per instance, applies to all dialogs
    resizable?= true;
    startMaximized?= false;
    transition?= 'pulse';
    // notifier defaults
    notifier?= new Notifier();
    // language resources 
    glossary?= new Glossary();
    // theme settings
    theme?= new Theme();
}

class Theme {
    // class name attached to prompt dialog input textbox.
    input?= 'ajs-input';
    // class name attached to ok button
    ok?= 'ajs-ok';
    // class name attached to cancel button 
    cancel?= 'ajs-cancel';
}

class Glossary {
    // dialogs default title
    title?= 'AlertifyJS';
    // ok button text
    ok?= 'Ok';
    // cancel button text
    cancel?= 'Cancel';
}

class Notifier {
    // auto-dismiss wait time (in seconds)  
    delay?= 5;
    // default position
    position?= 'top-right'; //  || 'bottom-right' || 'top-center' || 'top-left' || 'bottom-right' || 'bottom-center'|| 'bottom-left'
    // adds a close button to notifier messages
    closeButton?= false;
};

@Injectable({ providedIn: 'root' })
export class JbNotifyService {
    successMessage(message: string, onClose?: Function, options?: NotifyDefaultOptions) {
        let overridenOptions = this.setOptions(options);
        alertify.set('notifier', 'position', overridenOptions.notifier.position);
        alertify.notify(message,
            'success',
            overridenOptions.notifier.delay,
            () => {
                if (onClose) {
                    onClose();
                }
            }
        );
    }

    alertMessage(message: string, onSuccess?: Function, options?: Glossary) {
        let overridenOptions = this.setOptions(options);
        alertify.alert().setting({
            'label': overridenOptions.ok,
            'message': message,
            'onok': () => {
                if (onSuccess) {
                    onSuccess();
                }
            }
        }).show();
    }

    setOptions(options?: any, overridingProperty?: any) {
        let overridenOptions = JSON.parse(JSON.stringify(new NotifyDefaultOptions()));
        if (overridingProperty) {
            overridenOptions = JSON.parse(JSON.stringify(overridingProperty));
        }
        if (options && Object.keys(options).length > 0) {
            for (let key in options) {
                if (typeof (options[key]) !== 'object') {
                    overridenOptions[key] = options[key];
                } else {
                    overridenOptions[key] = this.setOptions(options[key], overridenOptions[key]);
                }
            }
        }
        return overridenOptions;
    }
}