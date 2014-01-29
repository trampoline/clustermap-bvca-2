// Compiled by ClojureScript 0.0-2138
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
var sel__1 = (function (expr){return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t26782 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t26782 = (function (expr,base,sel,meta26783){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta26783 = meta26783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t26782.cljs$lang$type = true;
domina.css.t26782.cljs$lang$ctorStr = "domina.css/t26782";
domina.css.t26782.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.css/t26782");
});
domina.css.t26782.prototype.domina$DomContent$ = true;
domina.css.t26782.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26777_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__26777_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t26782.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26778_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__26778_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t26782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26784){var self__ = this;
var _26784__$1 = this;return self__.meta26783;
});
domina.css.t26782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26784,meta26783__$1){var self__ = this;
var _26784__$1 = this;return (new domina.css.t26782(self__.expr,self__.base,self__.sel,meta26783__$1));
});
domina.css.__GT_t26782 = (function __GT_t26782(expr__$1,base__$1,sel__$1,meta26783){return (new domina.css.t26782(expr__$1,base__$1,sel__$1,meta26783));
});
}
return (new domina.css.t26782(expr,base,sel,null));
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
