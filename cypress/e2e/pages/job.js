class jobprocess {
  elements = {
  //Create Job
    clicknewjob:()=> cy.contains('New Job'),
    managejobassertion:()=> cy.contains('Manage your interview jobs and track candidate responses'),
    clickoncreatejob:()=>cy.contains('Create Job'),
    Selectcreationmethod:()=> cy.contains('Select Creation Method'),
    Useatemplate:()=>cy.contains('Use a Template'),
    choosetemplate:()=>cy.contains('Choose a Template'),
    parttime:()=>cy.contains('Part-Time'),
    clickontemplate:()=>cy.get('.grid > :nth-child(1) > .absolute'),
    jobclick:()=>cy.contains('Publish Job'),
    jobcreation:()=>cy.contains("Job created successfully!"),

    //Delete Job
    clickoncross:()=>cy.get('.gap-2 > .p-2'),
    clickonjobs:()=>cy.contains('Jobs'),
    clickonthreedot:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'),
    clickondeleteJob:()=>cy.contains('Delete Job'),
    confirmDeletion:()=>cy.contains('Confirm Deletion'),
    clickdelete:()=>cy.contains('Delete'),
    jobsdelete:()=>cy.contains('Job deleted successfully'),
    //edit job
    clickoncross:()=>cy.get('.gap-2 > .p-2'),
    clickonjobs:()=>cy.contains('Jobs'),
    clickonthreedot:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)'),
    Clickoneditdetails:()=>cy.contains('Edit Job'),
    clickonjobtitles:()=>cy.get('[name="title"]'),
    jobsdes:()=>cy.get('[name="description"]'),
    Clickonsavechanges:()=>cy.contains('Save Changes'),

  };

  jobclick() {
    this.elements.clicknewjob().click( {force: true});
      }
  
  manageassertion(){
    this.elements.managejobassertion().should("be.visible");
  }
  Createjobclick(){
    this.elements.clickoncreatejob().click({force: true});
  }
  creationmethod(){
    this.elements.Selectcreationmethod().should("be.visible");
  }
  useatemplateclick(){
    this.elements.Useatemplate().click({force: true});
  }
  choosetemplatevisible(){
    this.elements.choosetemplate().should("be.visible");
  }
  parttimeclick(){
    this.elements.parttime().click({force: true});
  }
  templateclick(){
    this.elements.clickontemplate().click({force: true});
  }
  clickpublishjob(){
    this.elements.jobclick().click({force: true});
  }
  verifyjobcreation(){
 
    this.elements.jobcreation().should("be.visible");
  }


//Job Delete
jobclicksidebar(){
  this.elements.clickoncross().click({force: true});
  this.elements.clickonjobs().click({force: true})
  this.elements.clickonthreedot().click({force: true})
  this.elements.clickondeleteJob().click()
  this.elements.confirmDeletion().should("be.visible");
  this.elements.clickdelete().click({force: true})
  this.elements.jobsdelete().should("be.visible");
}


//edit job
  editjobs(){
  this.elements.clickoncross().click({force: true});
  this.elements.clickonjobs().click({force: true})
  this.elements.clickonthreedot().click({force: true})
  this.elements.Clickoneditdetails().click()
  this.elements.clickonjobtitles().clear()
  }
  jobTitle(enterjob){
    this.elements.clickonjobtitles().type(enterjob)
    return cy.get('input[name="title"]')  // return is required

  }
  jobdescription(jobdescriptions){
    this.elements.jobsdes().clear()
    this.elements.jobsdes().type(jobdescriptions)
    return cy.get('[name="description"]')  // return is required


    
  }

  savechanges(){
    this.elements.Clickonsavechanges().click()
  }
  
}
export default jobprocess;
