class MyInfoPage {
    selectorsList() {
        const selectors = {
        firstNameField: "[name='firstName']",
        middleNameField: "[name='middleName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dataField: "[placeholder='yyyy-dd-mm']",
        dataCloseButton: ".--close",
        subimitButton: "[type='submit']",
        genericCombobox: ".oxd-select-text--arrow",
        genericItemCombobox: ".oxd-select-dropdown",
        }
        return selectors;
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
    }

    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, licenseExpirationDate, dateOfBirth, testField) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber);
        cy.get(this.selectorsList().dataField).eq(0).clear().type(licenseExpirationDate);
        cy.get(this.selectorsList().dataCloseButton).click();
        cy.get(this.selectorsList().dataField).eq(1).clear().type(dateOfBirth);
        cy.get(this.selectorsList().dataCloseButton).click();
        cy.get(this.selectorsList().genericField).eq(8).clear().type(testField);

    }

    fillStatus( ) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click();
        cy.get(this.selectorsList().genericItemCombobox).contains('Brazilian').click();
        cy.get(this.selectorsList().genericCombobox).eq(1).click();
        cy.get(this.selectorsList().genericItemCombobox).contains('Single').click();

    }

    saveForm() {
        cy.get(this.selectorsList().subimitButton).eq(0).click();
        cy.get('body').should('contain', 'Successfully Updated');
        cy.get('.oxd-toast-close').click();
    }

}

export default MyInfoPage;
