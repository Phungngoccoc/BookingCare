import { Application } from '@worker/application';

Application.createApplication().then(() => {
    console.log('The API was started success');
});
