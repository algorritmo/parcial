import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarformulariosPage } from './mostrarformularios.page';

describe('MostrarformulariosPage', () => {
  let component: MostrarformulariosPage;
  let fixture: ComponentFixture<MostrarformulariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarformulariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarformulariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
