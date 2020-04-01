/* See license.txt for terms of usage */

define("core/dragdrop",["core/lib"],function(e){function t(t,n){this.element=t,this.handle=t,this.callbacks=n,this.cursorStartPos=null,this.cursorLastPos=null,this.dragging=!1,this.onDragStart=e.bind(this.onDragStart,this),this.onDragOver=e.bind(this.onDragOver,this),this.onDrop=e.bind(this.onDrop,this),e.addEventListener(this.element,"mousedown",this.onDragStart,!1),this.active=!0}function n(e,t){this.x=e,this.y=t,this.Add=function(e){var t=new n(this.x,this.y);return e!=null&&(isNaN(e.x)||(t.x+=e.x),isNaN(e.y)||(t.y+=e.y)),t},this.Subtract=function(e){var t=new n(this.x,this.y);return e!=null&&(isNaN(e.x)||(t.x-=e.x),isNaN(e.y)||(t.y-=e.y)),t},this.Bound=function(e,t){var n=this.Max(e);return n.Min(t)},this.Check=function(){var e=new n(this.x,this.y);return isNaN(e.x)&&(e.x=0),isNaN(e.y)&&(e.y=0),e},this.Apply=function(e){typeof e=="string"&&(e=document.getElementById(e));if(!e)return;isNaN(this.x)||(e.style.left=this.x+"px"),isNaN(this.y)||(e.style.top=this.y+"px")}}function r(e){return isNaN(window.scrollX)?new n(e.clientX+document.documentElement.scrollLeft+document.body.scrollLeft,e.clientY+document.documentElement.scrollTop+document.body.scrollTop):new n(e.clientX+window.scrollX,e.clientY+window.scrollY)}t.prototype={onDragStart:function(t){var n=e.fixEvent(t);if(this.dragging)return;this.callbacks.onDragStart&&this.callbacks.onDragStart(this),this.dragging=!0,this.cursorStartPos=r(n),this.cursorLastPos=this.cursorStartPos,e.addEventListener(this.element.ownerDocument,"mousemove",this.onDragOver,!1),e.addEventListener(this.element.ownerDocument,"mouseup",this.onDrop,!1),e.cancelEvent(n)},onDragOver:function(t){if(!this.dragging)return;var n=e.fixEvent(t);e.cancelEvent(n);var i=r(n),i=i.Subtract(this.cursorStartPos);if(this.cursorLastPos.x==i.x&&this.cursorLastPos.y==i.y)return;if(this.callbacks.onDragOver!=null){var s=this.callbacks.onDragOver(i,this);this.cursorLastPos=i}},onDrop:function(t){if(!this.dragging)return;var n=e.fixEvent(t);e.cancelEvent(n),this.dragStop()},dragStop:function(){if(!this.dragging)return;e.removeEventListener(this.element.ownerDocument,"mousemove",this.onDragOver,!1),e.removeEventListener(this.element.ownerDocument,"mouseup",this.onDrop,!1),this.cursorStartPos=null,this.cursorLastPos=null,this.callbacks.onDrop!=null&&this.callbacks.onDrop(this),this.dragging=!1},destroy:function(){e.removeEventListener(this.element,"mousedown",this.onDragStart,!1),this.active=!1,this.dragging&&this.dragStop()}};var i={};return i.Tracker=t,i});