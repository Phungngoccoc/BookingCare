import { Application } from "@api/application";

Application.createApplication().then(() => {
    console.log("The API was started success");
})