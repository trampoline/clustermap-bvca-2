// Compiled by ClojureScript 0.0-2356
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){var doc = (function (){var G__72124 = node;return goog.dom.getOwnerDocument(G__72124);
})();if(cljs.core.truth_((function (){var and__3625__auto__ = node.selectSingleNode;if(cljs.core.truth_(and__3625__auto__))
{return doc.setProperty;
} else
{return and__3625__auto__;
}
})()))
{doc.setProperty("SelectionLanguage","XPath");
var G__72125 = node;var G__72126 = path;return (technique_1.cljs$core$IFn$_invoke$arity$2 ? technique_1.cljs$core$IFn$_invoke$arity$2(G__72125,G__72126) : technique_1.call(null,G__72125,G__72126));
} else
{if(cljs.core.truth_(doc.evaluate))
{var G__72127 = null;var G__72128 = doc;var G__72129 = node;var G__72130 = path;return (technique_2.cljs$core$IFn$_invoke$arity$4 ? technique_2.cljs$core$IFn$_invoke$arity$4(G__72127,G__72128,G__72129,G__72130) : technique_2.call(null,G__72127,G__72128,G__72129,G__72130));
} else
{throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return result.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){return domina.xpath.select_node_STAR_(expr,node,(function (node__$1,expr__$1){return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var num_results = result.snapshotLength;var i = (0);var acc = null;while(true){
if((i < num_results))
{{
var G__72131 = (i + (1));
var G__72132 = cljs.core.cons(result.snapshotItem(i),acc);
i = G__72131;
acc = G__72132;
continue;
}
} else
{return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){return ((function (){var G__72134 = "html";return goog.dom.getElementsByTagNameAndClass(G__72134);
})()[(0)]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__1 = (function (expr){return xpath.cljs$core$IFn$_invoke$arity$2(domina.xpath.root_element(),expr);
});
var xpath__2 = (function (base,expr){if(typeof domina.xpath.t72140 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.xpath.t72140 = (function (expr,base,xpath,meta72141){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.meta72141 = meta72141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.xpath.t72140.cljs$lang$type = true;
domina.xpath.t72140.cljs$lang$ctorStr = "domina.xpath/t72140";
domina.xpath.t72140.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"domina.xpath/t72140");
});
domina.xpath.t72140.prototype.domina$DomContent$ = true;
domina.xpath.t72140.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_nodes,self__.expr),cljs.core.array_seq([domina.nodes(self__.base)], 0));
});
domina.xpath.t72140.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_node,self__.expr),domina.nodes(self__.base))));
});
domina.xpath.t72140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72142){var self__ = this;
var _72142__$1 = this;return self__.meta72141;
});
domina.xpath.t72140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72142,meta72141__$1){var self__ = this;
var _72142__$1 = this;return (new domina.xpath.t72140(self__.expr,self__.base,self__.xpath,meta72141__$1));
});
domina.xpath.__GT_t72140 = (function __GT_t72140(expr__$1,base__$1,xpath__$1,meta72141){return (new domina.xpath.t72140(expr__$1,base__$1,xpath__$1,meta72141));
});
}
return (new domina.xpath.t72140(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case 1:
return xpath__1.call(this,base);
case 2:
return xpath__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xpath.cljs$core$IFn$_invoke$arity$1 = xpath__1;
xpath.cljs$core$IFn$_invoke$arity$2 = xpath__2;
return xpath;
})()
;
