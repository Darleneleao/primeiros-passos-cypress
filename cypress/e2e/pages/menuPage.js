class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            myPerformanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",

        }
        return selectors;
    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().myInfoButton).click();
    }

    accessMyPerformancePage() {
        cy.get(this.selectorsList().myPerformanceButton).click();
    }
}

export default MenuPage;