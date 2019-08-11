import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-games-search',
  templateUrl: './section-games-search.component.html',
  styleUrls: ['./section-games-search.component.scss']
})
export class SectionGamesSearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  /////////
  // Forms
  //-----------------------------------------------
  initForm() {
    
    //Init search form
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }

  validateForm(form: FormGroup): boolean {
    if (!form.valid) {
      return false;
    }

    return true;
  }

  /////////
  // Filtering
  //-----------------------------------------------
  gotoGamesAndFilterByText(submittedForm: FormGroup) {
    if (this.validateForm(submittedForm)) {
      let searchText = submittedForm.value.searchText.trim().toLocaleLowerCase();

      this.router.navigate(['games/search-game/'+searchText]);
    }
  }
}
