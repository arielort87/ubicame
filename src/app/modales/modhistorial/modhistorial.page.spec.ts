import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModhistorialPage } from './modhistorial.page';

describe('ModhistorialPage', () => {
  let component: ModhistorialPage;
  let fixture: ComponentFixture<ModhistorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModhistorialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModhistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
