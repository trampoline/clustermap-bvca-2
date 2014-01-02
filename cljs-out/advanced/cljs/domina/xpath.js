// Compiled by ClojureScript 0.0-2080
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){var doc = goog.dom.getOwnerDocument(node);if(cljs.core.truth_((function (){var and__3279__auto__ = node.selectSingleNode;if(cljs.core.truth_(and__3279__auto__))
{return doc.setProperty;
} else
{return and__3279__auto__;
}
})()))
{doc.setProperty("SelectionLanguage","XPath");
return (technique_1.cljs$core$IFn$_invoke$arity$2 ? technique_1.cljs$core$IFn$_invoke$arity$2(node,path) : technique_1.call(null,node,path));
} else
{if(cljs.core.truth_(doc.evaluate))
{return (technique_2.cljs$core$IFn$_invoke$arity$4 ? technique_2.cljs$core$IFn$_invoke$arity$4(null,doc,node,path) : technique_2.call(null,null,doc,node,path));
} else
{if(cljs.core.constant$keyword$62)
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
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
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var num_results = result.snapshotLength;var i = 0;var acc = null;while(true){
if((i < num_results))
{{
var G__32562 = (i + 1);
var G__32563 = cljs.core.cons(result.snapshotItem(i),acc);
i = G__32562;
acc = G__32563;
continue;
}
} else
{return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__1 = (function (expr){return xpath.cljs$core$IFn$_invoke$arity$2(domina.xpath.root_element(),expr);
});
var xpath__2 = (function (base,expr){if(typeof domina.xpath.t32567 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.xpath.t32567 = (function (expr,base,xpath,meta32568){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.meta32568 = meta32568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.xpath.t32567.cljs$lang$type = true;
domina.xpath.t32567.cljs$lang$ctorStr = "domina.xpath/t32567";
domina.xpath.t32567.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"domina.xpath/t32567");
});
domina.xpath.t32567.prototype.domina$DomContent$ = true;
domina.xpath.t32567.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_nodes,self__.expr),domina.nodes(self__.base));
});
domina.xpath.t32567.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(domina.xpath.select_node,self__.expr),domina.nodes(self__.base))));
});
domina.xpath.t32567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32569){var self__ = this;
var _32569__$1 = this;return self__.meta32568;
});
domina.xpath.t32567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32569,meta32568__$1){var self__ = this;
var _32569__$1 = this;return (new domina.xpath.t32567(self__.expr,self__.base,self__.xpath,meta32568__$1));
});
domina.xpath.__GT_t32567 = (function __GT_t32567(expr__$1,base__$1,xpath__$1,meta32568){return (new domina.xpath.t32567(expr__$1,base__$1,xpath__$1,meta32568));
});
}
return (new domina.xpath.t32567(expr,base,xpath,null));
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
