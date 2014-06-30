// Compiled by ClojureScript 0.0-2227
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t51259 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t51259 = (function (expr,base,sel,meta51260){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta51260 = meta51260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t51259.cljs$lang$type = true;
domina.css.t51259.cljs$lang$ctorStr = "domina.css/t51259";
domina.css.t51259.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.css/t51259");
});
domina.css.t51259.prototype.domina$DomContent$ = true;
domina.css.t51259.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__51254_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__51254_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});
domina.css.t51259.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__51255_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__51255_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});
domina.css.t51259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51261){var self__ = this;
var _51261__$1 = this;return self__.meta51260;
});
domina.css.t51259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51261,meta51260__$1){var self__ = this;
var _51261__$1 = this;return (new domina.css.t51259(self__.expr,self__.base,self__.sel,meta51260__$1));
});
domina.css.__GT_t51259 = (function __GT_t51259(expr__$1,base__$1,sel__$1,meta51260){return (new domina.css.t51259(expr__$1,base__$1,sel__$1,meta51260));
});
}
return (new domina.css.t51259(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;

//# sourceMappingURL=css.js.map