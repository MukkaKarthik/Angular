import { Directive, ViewContainerRef } from "@angular/core";

@Directive(
    {
        selector : "[dynamicDirection]"
    }
)
export class dynamicDirective
{

    constructor(public containerRef : ViewContainerRef)
    {

    }
}