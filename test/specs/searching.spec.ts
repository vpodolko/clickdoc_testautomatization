import landingPage from "../pageobjects/landing.page";
import searchDoctorPage from "../pageobjects/searchDoctor.page";

describe('navigate to doctor search',() => {

    it('should navigate correctly', async () =>  {
        await landingPage.open();
    });

    it('should accept cookies',async () => {
        await (await landingPage.buttonConsent).click();
    });

    it('should click on doctor search button', async () => {
        await (await landingPage.doctorSearch).click();
    });
});


describe('search for doctor', () => {
  
    it('should insert searchterm', async() => {
        await (await searchDoctorPage.inputDoctorName).setValue("Peter Test");
        await (await searchDoctorPage.submitSearch).click();
    });

    it('should show two results', async() =>{
        await expect(searchDoctorPage.searchResult).toHaveChildren(2);
        await expect(searchDoctorPage.searchResult).toHaveTextContaining('Dr. Peter Test');
        await expect(searchDoctorPage.searchResult).toHaveTextContaining('Dr. Peter Test ABD');
    });
});
  
