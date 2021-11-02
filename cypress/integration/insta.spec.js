describe('Insta-App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const post = () => cy.get('div[class=post-border]');
    const postImage = () => cy.get('div[class=post-image-wrapper]');
    const postHeader = () => cy.get('div[class=post-header] h2');
    const searchBar = () => cy.get('input[type=text]');

    it('the proper elements are showing', () => {
        post().should('exist');
        postImage().should('exist');
        postHeader().should('exist');
        searchBar().should('exist');
    })
})
