// Form action handler

export const actions = {
    default: async ({ request }) => {
        console.log("Handling form action on server:");
        const formData = await request.formData();
        console.log(formData);

        // TODO: save formData to database (create a new order)

        // if success, return 201 "created"
        //  TODO: populate order number from DB
    }
};