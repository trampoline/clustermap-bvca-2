// Compiled by ClojureScript 0.0-2356
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return ((function (){var G__74743 = "html";return goog.dom.getElementsByTagNameAndClass(G__74743);
})()[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.cljs$core$IFn$_invoke$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t74755 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t74755 = (function (expr,base,sel,meta74756){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta74756 = meta74756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t74755.cljs$lang$type = true;
domina.css.t74755.cljs$lang$ctorStr = "domina.css/t74755";
domina.css.t74755.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"domina.css/t74755");
});
domina.css.t74755.prototype.domina$DomContent$ = true;
domina.css.t74755.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__74744_SHARP_){return domina.normalize_seq((function (){var G__74758 = self__.expr;var G__74759 = p1__74744_SHARP_;return goog.dom.query(G__74758,G__74759);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0));
});
domina.css.t74755.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (___$1){
return (function (p1__74745_SHARP_){return domina.normalize_seq((function (){var G__74760 = self__.expr;var G__74761 = p1__74745_SHARP_;return goog.dom.query(G__74760,G__74761);
})());
});})(___$1))
,cljs.core.array_seq([domina.nodes(self__.base)], 0))));
});
domina.css.t74755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74757){var self__ = this;
var _74757__$1 = this;return self__.meta74756;
});
domina.css.t74755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74757,meta74756__$1){var self__ = this;
var _74757__$1 = this;return (new domina.css.t74755(self__.expr,self__.base,self__.sel,meta74756__$1));
});
domina.css.__GT_t74755 = (function __GT_t74755(expr__$1,base__$1,sel__$1,meta74756){return (new domina.css.t74755(expr__$1,base__$1,sel__$1,meta74756));
});
}
return (new domina.css.t74755(expr,base,sel,null));
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
