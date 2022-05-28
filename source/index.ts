// Setup
import '@app/yup-locale';

// App
import { bootstrap } from './bootstrap';

// Dependencies
import { templateSettings } from 'lodash';


{
    templateSettings.interpolate = /{{([\s\S]+?)}}/g;

    bootstrap(
        document.getElementById('root') as HTMLElement
    );
}
