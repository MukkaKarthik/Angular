import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive(
    {
        selector : "[directiveComponent-selector]",
        

    }
)
export class directiveComponent implements OnInit
{

    constructor(public elementRef : ElementRef)
    {

    }
    ngOnInit(): void {

        this.elementRef.nativeElement.style.backgroundColor = "Green";

    }

    printConsoleMessages()
    {
        console.log("print conscience results");
    }

}   



/* It is better to use renderer as basic directive may not work in few cases such as ServiceWorkers , 
It is always a good practice to use rendered method */


@Directive(
    {
        selector : "[renderDirective-selector]" // this will work as an attribute ,
    }
)
export class renderDirective implements OnInit
{
    constructor(public renderElement : Renderer2 , public ElementRef : ElementRef)
    {
        
    }
    ngOnInit(): void {
       
        this.renderElement.setStyle(this.ElementRef.nativeElement , "backgroundColor","yellow");

    }

    //if type instances not declared in the constructor then that instance will be local to this class and can't be shared 

  /*   @HostListener("mouseover") mouseover(data? : Event )
    {
        this.renderElement.setStyle(this.ElementRef.nativeElement , "backgroundColor","pink");
    }

    @HostListener("mouseleave") mouseleave()
    {
        this.renderElement.setStyle(this.ElementRef.nativeElement , "backgroundColor","brown");
    } */


  //Host Listener can also be implemented in a different way without using render method
    
 // @HostBinding("style.backgroundColor") backgroundColorStringValue : string = "";

  /* @HostListener("mouseover") mouseover(data? : Event )
  {
      this.renderElement.setStyle(this.ElementRef.nativeElement , "backgroundColor","red");
  }

  @HostListener("mouseleave") mouseleave()
  {
      this.renderElement.setStyle(this.ElementRef.nativeElement , "backgroundColor","green");
  }
    */


  //Rather than using hard code in ts file , we can do the same from HTML elements , binding directives to HTML elements 

  @Input() defaultColor : string = "";
  @Input() mouseOverColor : string = "";

  @HostBinding("style.backgroundColor") backgroundColorStringValue : string = "";


  @HostListener("mouseover") mouseover(data? : Event )
  {
     this.backgroundColorStringValue = this.defaultColor;
  }

  @HostListener("mouseleave") mouseleave()
  {
     this.backgroundColorStringValue = this.mouseOverColor;
  }


}

