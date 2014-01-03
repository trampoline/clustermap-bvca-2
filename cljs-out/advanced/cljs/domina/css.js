// Compiled by ClojureScript 0.0-2080
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
var sel__2 = (function (base,expr){if(typeof domina.css.t35105 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t35105 = (function (expr,base,sel,meta35106){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta35106 = meta35106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t35105.cljs$lang$type = true;
domina.css.t35105.cljs$lang$ctorStr = "domina.css/t35105";
domina.css.t35105.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.css/t35105");
});
domina.css.t35105.prototype.domina$DomContent$ = true;
domina.css.t35105.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__35100_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__35100_SHARP_));
}),domina.nodes(self__.base));
});
domina.css.t35105.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__35101_SHARP_){return domina.normalize_seq(goog.dom.query(self__.expr,p1__35101_SHARP_));
}),domina.nodes(self__.base))));
});
domina.css.t35105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35107){var self__ = this;
var _35107__$1 = this;return self__.meta35106;
});
domina.css.t35105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35107,meta35106__$1){var self__ = this;
var _35107__$1 = this;return (new domina.css.t35105(self__.expr,self__.base,self__.sel,meta35106__$1));
});
domina.css.__GT_t35105 = (function __GT_t35105(expr__$1,base__$1,sel__$1,meta35106){return (new domina.css.t35105(expr__$1,base__$1,sel__$1,meta35106));
});
}
return (new domina.css.t35105(expr,base,sel,null));
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
