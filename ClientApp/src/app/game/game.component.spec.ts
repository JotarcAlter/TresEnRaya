import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableroComponent } from './game.component';



describe('GameComponent', () => {
    let component:TableroComponent;
    let fixture: ComponentFixture<TableroComponent>;
    
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TableroComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(TableroComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  