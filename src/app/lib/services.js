/*
*
*
* Services layer
*
*
*/

export default new class services {
    submitInquiry = async (values) => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        return "inquiry saved successfully" 
    }
}