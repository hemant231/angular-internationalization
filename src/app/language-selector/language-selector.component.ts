import { Component, OnInit } from '@angular/core';
import {I18nConfigService} from '../service/i18n-config.service';

@Component({
  selector: 'app-language-selector',
  template: '<select class="form-input col-md-2" style="display: block" ' +
  ' #langSelect (change)="i18nConf.setSelectedLanguage(langSelect.value)">\n' +
  '      <option *ngFor="let lang of i18nConf.getLanguages()" [value]="lang" ' +
  ' [selected]="lang === this.i18nConf.currentLang">{{ lang }}</option>\n' +
  '    </select>\n',
  styles: []
})
export class LanguageSelectorComponent implements OnInit {
  i18nConf: I18nConfigService;
  constructor( i18nConf: I18nConfigService) {
    this.i18nConf = i18nConf;
    this.i18nConf.setUpConf();
  }

  ngOnInit() {
  }

}
