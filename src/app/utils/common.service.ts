import { ViewportScroller } from "@angular/common";

export function scrollToSection(viewportScroller: ViewportScroller, anchor: string): void {
    if (anchor) {
        viewportScroller.scrollToAnchor(anchor);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}