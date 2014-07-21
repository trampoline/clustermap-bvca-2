// Compiled by ClojureScript 0.0-2268
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t44599 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t44599 = (function (expr,base,sel,meta44600){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta44600 = meta44600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t44599.cljs$lang$type = true;
domina.css.t44599.cljs$lang$ctorStr = "domina.css/t44599";
domina.css.t44599.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"domina.css/t44599");
});
domina.css.t44599.prototype.domina$DomContent$ = true;
domina.css.t44599.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__44594_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__44594_SHARP_));
});})(___$1))
,domina.nodes(self__.base));
});
domina.css.t44599.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__44595_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__44595_SHARP_));
});})(___$1))
,domina.nodes(self__.base))));
});
domina.css.t44599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44601){var self__ = this;
var _44601__$1 = this;return self__.meta44600;
});
domina.css.t44599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44601,meta44600__$1){var self__ = this;
var _44601__$1 = this;return (new domina.css.t44599(self__.expr,self__.base,self__.sel,meta44600__$1));
});
domina.css.__GT_t44599 = (function __GT_t44599(expr__$1,base__$1,sel__$1,meta44600){return (new domina.css.t44599(expr__$1,base__$1,sel__$1,meta44600));
});
}
return (new domina.css.t44599(expr,base,sel,null));
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
