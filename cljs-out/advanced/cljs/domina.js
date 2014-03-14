// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_39467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39468 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39469 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$539,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39468,table_section_wrapper_39468,opt_wrapper_39467,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39469,table_section_wrapper_39468,cell_wrapper_39469,opt_wrapper_39467,table_section_wrapper_39468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39468]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39474 = cljs.core.seq(tbody);var chunk__39475 = null;var count__39476 = 0;var i__39477 = 0;while(true){
if((i__39477 < count__39476))
{var child = chunk__39475.cljs$core$IIndexed$_nth$arity$2(null,i__39477);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39478 = seq__39474;
var G__39479 = chunk__39475;
var G__39480 = count__39476;
var G__39481 = (i__39477 + 1);
seq__39474 = G__39478;
chunk__39475 = G__39479;
count__39476 = G__39480;
i__39477 = G__39481;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39474);if(temp__4092__auto__)
{var seq__39474__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39474__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39474__$1);{
var G__39482 = cljs.core.chunk_rest(seq__39474__$1);
var G__39483 = c__4189__auto__;
var G__39484 = cljs.core.count(c__4189__auto__);
var G__39485 = 0;
seq__39474 = G__39482;
chunk__39475 = G__39483;
count__39476 = G__39484;
i__39477 = G__39485;
continue;
}
} else
{var child = cljs.core.first(seq__39474__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39486 = cljs.core.next(seq__39474__$1);
var G__39487 = null;
var G__39488 = 0;
var G__39489 = 0;
seq__39474 = G__39486;
chunk__39475 = G__39487;
count__39476 = G__39488;
i__39477 = G__39489;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39491 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$539.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39491,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39491,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39491,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39492 = wrapper.lastChild;
var G__39493 = (level - 1);
wrapper = G__39492;
level = G__39493;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj39495 = {};return obj39495;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__39496){
var mesg = cljs.core.seq(arglist__39496);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__39497){
var mesg = cljs.core.seq(arglist__39497);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__39498){
var contents = cljs.core.seq(arglist__39498);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39499_SHARP_){return p1__39499_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39500_SHARP_,p2__39501_SHARP_){return goog.dom.insertChildAt(p1__39500_SHARP_,p2__39501_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39500_SHARP_,p2__39501_SHARP_){return goog.dom.insertChildAt(p1__39500_SHARP_,p2__39501_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39503_SHARP_,p2__39502_SHARP_){return goog.dom.insertSiblingBefore(p2__39502_SHARP_,p1__39503_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39503_SHARP_,p2__39502_SHARP_){return goog.dom.insertSiblingBefore(p2__39502_SHARP_,p1__39503_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39505_SHARP_,p2__39504_SHARP_){return goog.dom.insertSiblingAfter(p2__39504_SHARP_,p1__39505_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39505_SHARP_,p2__39504_SHARP_){return goog.dom.insertSiblingAfter(p2__39504_SHARP_,p1__39505_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39507_SHARP_,p2__39506_SHARP_){return goog.dom.replaceNode(p2__39506_SHARP_,p1__39507_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39507_SHARP_,p2__39506_SHARP_){return goog.dom.replaceNode(p2__39506_SHARP_,p1__39507_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__39512_39516 = cljs.core.seq(domina.nodes(content));var chunk__39513_39517 = null;var count__39514_39518 = 0;var i__39515_39519 = 0;while(true){
if((i__39515_39519 < count__39514_39518))
{var n_39520 = chunk__39513_39517.cljs$core$IIndexed$_nth$arity$2(null,i__39515_39519);goog.style.setStyle(n_39520,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39521 = seq__39512_39516;
var G__39522 = chunk__39513_39517;
var G__39523 = count__39514_39518;
var G__39524 = (i__39515_39519 + 1);
seq__39512_39516 = G__39521;
chunk__39513_39517 = G__39522;
count__39514_39518 = G__39523;
i__39515_39519 = G__39524;
continue;
}
} else
{var temp__4092__auto___39525 = cljs.core.seq(seq__39512_39516);if(temp__4092__auto___39525)
{var seq__39512_39526__$1 = temp__4092__auto___39525;if(cljs.core.chunked_seq_QMARK_(seq__39512_39526__$1))
{var c__4189__auto___39527 = cljs.core.chunk_first(seq__39512_39526__$1);{
var G__39528 = cljs.core.chunk_rest(seq__39512_39526__$1);
var G__39529 = c__4189__auto___39527;
var G__39530 = cljs.core.count(c__4189__auto___39527);
var G__39531 = 0;
seq__39512_39516 = G__39528;
chunk__39513_39517 = G__39529;
count__39514_39518 = G__39530;
i__39515_39519 = G__39531;
continue;
}
} else
{var n_39532 = cljs.core.first(seq__39512_39526__$1);goog.style.setStyle(n_39532,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39533 = cljs.core.next(seq__39512_39526__$1);
var G__39534 = null;
var G__39535 = 0;
var G__39536 = 0;
seq__39512_39516 = G__39533;
chunk__39513_39517 = G__39534;
count__39514_39518 = G__39535;
i__39515_39519 = G__39536;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39537){
var content = cljs.core.first(arglist__39537);
arglist__39537 = cljs.core.next(arglist__39537);
var name = cljs.core.first(arglist__39537);
var value = cljs.core.rest(arglist__39537);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__39542_39546 = cljs.core.seq(domina.nodes(content));var chunk__39543_39547 = null;var count__39544_39548 = 0;var i__39545_39549 = 0;while(true){
if((i__39545_39549 < count__39544_39548))
{var n_39550 = chunk__39543_39547.cljs$core$IIndexed$_nth$arity$2(null,i__39545_39549);n_39550.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39551 = seq__39542_39546;
var G__39552 = chunk__39543_39547;
var G__39553 = count__39544_39548;
var G__39554 = (i__39545_39549 + 1);
seq__39542_39546 = G__39551;
chunk__39543_39547 = G__39552;
count__39544_39548 = G__39553;
i__39545_39549 = G__39554;
continue;
}
} else
{var temp__4092__auto___39555 = cljs.core.seq(seq__39542_39546);if(temp__4092__auto___39555)
{var seq__39542_39556__$1 = temp__4092__auto___39555;if(cljs.core.chunked_seq_QMARK_(seq__39542_39556__$1))
{var c__4189__auto___39557 = cljs.core.chunk_first(seq__39542_39556__$1);{
var G__39558 = cljs.core.chunk_rest(seq__39542_39556__$1);
var G__39559 = c__4189__auto___39557;
var G__39560 = cljs.core.count(c__4189__auto___39557);
var G__39561 = 0;
seq__39542_39546 = G__39558;
chunk__39543_39547 = G__39559;
count__39544_39548 = G__39560;
i__39545_39549 = G__39561;
continue;
}
} else
{var n_39562 = cljs.core.first(seq__39542_39556__$1);n_39562.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39563 = cljs.core.next(seq__39542_39556__$1);
var G__39564 = null;
var G__39565 = 0;
var G__39566 = 0;
seq__39542_39546 = G__39563;
chunk__39543_39547 = G__39564;
count__39544_39548 = G__39565;
i__39545_39549 = G__39566;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39567){
var content = cljs.core.first(arglist__39567);
arglist__39567 = cljs.core.next(arglist__39567);
var name = cljs.core.first(arglist__39567);
var value = cljs.core.rest(arglist__39567);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39572_39576 = cljs.core.seq(domina.nodes(content));var chunk__39573_39577 = null;var count__39574_39578 = 0;var i__39575_39579 = 0;while(true){
if((i__39575_39579 < count__39574_39578))
{var n_39580 = chunk__39573_39577.cljs$core$IIndexed$_nth$arity$2(null,i__39575_39579);n_39580.removeAttribute(cljs.core.name(name));
{
var G__39581 = seq__39572_39576;
var G__39582 = chunk__39573_39577;
var G__39583 = count__39574_39578;
var G__39584 = (i__39575_39579 + 1);
seq__39572_39576 = G__39581;
chunk__39573_39577 = G__39582;
count__39574_39578 = G__39583;
i__39575_39579 = G__39584;
continue;
}
} else
{var temp__4092__auto___39585 = cljs.core.seq(seq__39572_39576);if(temp__4092__auto___39585)
{var seq__39572_39586__$1 = temp__4092__auto___39585;if(cljs.core.chunked_seq_QMARK_(seq__39572_39586__$1))
{var c__4189__auto___39587 = cljs.core.chunk_first(seq__39572_39586__$1);{
var G__39588 = cljs.core.chunk_rest(seq__39572_39586__$1);
var G__39589 = c__4189__auto___39587;
var G__39590 = cljs.core.count(c__4189__auto___39587);
var G__39591 = 0;
seq__39572_39576 = G__39588;
chunk__39573_39577 = G__39589;
count__39574_39578 = G__39590;
i__39575_39579 = G__39591;
continue;
}
} else
{var n_39592 = cljs.core.first(seq__39572_39586__$1);n_39592.removeAttribute(cljs.core.name(name));
{
var G__39593 = cljs.core.next(seq__39572_39586__$1);
var G__39594 = null;
var G__39595 = 0;
var G__39596 = 0;
seq__39572_39576 = G__39593;
chunk__39573_39577 = G__39594;
count__39574_39578 = G__39595;
i__39575_39579 = G__39596;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39598 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$538)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39599_SHARP_){var attr = attrs__$1.item(p1__39599_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39606_39612 = cljs.core.seq(styles);var chunk__39607_39613 = null;var count__39608_39614 = 0;var i__39609_39615 = 0;while(true){
if((i__39609_39615 < count__39608_39614))
{var vec__39610_39616 = chunk__39607_39613.cljs$core$IIndexed$_nth$arity$2(null,i__39609_39615);var name_39617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39610_39616,0,null);var value_39618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39610_39616,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39617,cljs.core.array_seq([value_39618], 0));
{
var G__39619 = seq__39606_39612;
var G__39620 = chunk__39607_39613;
var G__39621 = count__39608_39614;
var G__39622 = (i__39609_39615 + 1);
seq__39606_39612 = G__39619;
chunk__39607_39613 = G__39620;
count__39608_39614 = G__39621;
i__39609_39615 = G__39622;
continue;
}
} else
{var temp__4092__auto___39623 = cljs.core.seq(seq__39606_39612);if(temp__4092__auto___39623)
{var seq__39606_39624__$1 = temp__4092__auto___39623;if(cljs.core.chunked_seq_QMARK_(seq__39606_39624__$1))
{var c__4189__auto___39625 = cljs.core.chunk_first(seq__39606_39624__$1);{
var G__39626 = cljs.core.chunk_rest(seq__39606_39624__$1);
var G__39627 = c__4189__auto___39625;
var G__39628 = cljs.core.count(c__4189__auto___39625);
var G__39629 = 0;
seq__39606_39612 = G__39626;
chunk__39607_39613 = G__39627;
count__39608_39614 = G__39628;
i__39609_39615 = G__39629;
continue;
}
} else
{var vec__39611_39630 = cljs.core.first(seq__39606_39624__$1);var name_39631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39611_39630,0,null);var value_39632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39611_39630,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39631,cljs.core.array_seq([value_39632], 0));
{
var G__39633 = cljs.core.next(seq__39606_39624__$1);
var G__39634 = null;
var G__39635 = 0;
var G__39636 = 0;
seq__39606_39612 = G__39633;
chunk__39607_39613 = G__39634;
count__39608_39614 = G__39635;
i__39609_39615 = G__39636;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39643_39649 = cljs.core.seq(attrs);var chunk__39644_39650 = null;var count__39645_39651 = 0;var i__39646_39652 = 0;while(true){
if((i__39646_39652 < count__39645_39651))
{var vec__39647_39653 = chunk__39644_39650.cljs$core$IIndexed$_nth$arity$2(null,i__39646_39652);var name_39654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39647_39653,0,null);var value_39655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39647_39653,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39654,cljs.core.array_seq([value_39655], 0));
{
var G__39656 = seq__39643_39649;
var G__39657 = chunk__39644_39650;
var G__39658 = count__39645_39651;
var G__39659 = (i__39646_39652 + 1);
seq__39643_39649 = G__39656;
chunk__39644_39650 = G__39657;
count__39645_39651 = G__39658;
i__39646_39652 = G__39659;
continue;
}
} else
{var temp__4092__auto___39660 = cljs.core.seq(seq__39643_39649);if(temp__4092__auto___39660)
{var seq__39643_39661__$1 = temp__4092__auto___39660;if(cljs.core.chunked_seq_QMARK_(seq__39643_39661__$1))
{var c__4189__auto___39662 = cljs.core.chunk_first(seq__39643_39661__$1);{
var G__39663 = cljs.core.chunk_rest(seq__39643_39661__$1);
var G__39664 = c__4189__auto___39662;
var G__39665 = cljs.core.count(c__4189__auto___39662);
var G__39666 = 0;
seq__39643_39649 = G__39663;
chunk__39644_39650 = G__39664;
count__39645_39651 = G__39665;
i__39646_39652 = G__39666;
continue;
}
} else
{var vec__39648_39667 = cljs.core.first(seq__39643_39661__$1);var name_39668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648_39667,0,null);var value_39669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39648_39667,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39668,cljs.core.array_seq([value_39669], 0));
{
var G__39670 = cljs.core.next(seq__39643_39661__$1);
var G__39671 = null;
var G__39672 = 0;
var G__39673 = 0;
seq__39643_39649 = G__39670;
chunk__39644_39650 = G__39671;
count__39645_39651 = G__39672;
i__39646_39652 = G__39673;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39678_39682 = cljs.core.seq(domina.nodes(content));var chunk__39679_39683 = null;var count__39680_39684 = 0;var i__39681_39685 = 0;while(true){
if((i__39681_39685 < count__39680_39684))
{var node_39686 = chunk__39679_39683.cljs$core$IIndexed$_nth$arity$2(null,i__39681_39685);goog.dom.classes.add(node_39686,class$);
{
var G__39687 = seq__39678_39682;
var G__39688 = chunk__39679_39683;
var G__39689 = count__39680_39684;
var G__39690 = (i__39681_39685 + 1);
seq__39678_39682 = G__39687;
chunk__39679_39683 = G__39688;
count__39680_39684 = G__39689;
i__39681_39685 = G__39690;
continue;
}
} else
{var temp__4092__auto___39691 = cljs.core.seq(seq__39678_39682);if(temp__4092__auto___39691)
{var seq__39678_39692__$1 = temp__4092__auto___39691;if(cljs.core.chunked_seq_QMARK_(seq__39678_39692__$1))
{var c__4189__auto___39693 = cljs.core.chunk_first(seq__39678_39692__$1);{
var G__39694 = cljs.core.chunk_rest(seq__39678_39692__$1);
var G__39695 = c__4189__auto___39693;
var G__39696 = cljs.core.count(c__4189__auto___39693);
var G__39697 = 0;
seq__39678_39682 = G__39694;
chunk__39679_39683 = G__39695;
count__39680_39684 = G__39696;
i__39681_39685 = G__39697;
continue;
}
} else
{var node_39698 = cljs.core.first(seq__39678_39692__$1);goog.dom.classes.add(node_39698,class$);
{
var G__39699 = cljs.core.next(seq__39678_39692__$1);
var G__39700 = null;
var G__39701 = 0;
var G__39702 = 0;
seq__39678_39682 = G__39699;
chunk__39679_39683 = G__39700;
count__39680_39684 = G__39701;
i__39681_39685 = G__39702;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39707_39711 = cljs.core.seq(domina.nodes(content));var chunk__39708_39712 = null;var count__39709_39713 = 0;var i__39710_39714 = 0;while(true){
if((i__39710_39714 < count__39709_39713))
{var node_39715 = chunk__39708_39712.cljs$core$IIndexed$_nth$arity$2(null,i__39710_39714);goog.dom.classes.remove(node_39715,class$);
{
var G__39716 = seq__39707_39711;
var G__39717 = chunk__39708_39712;
var G__39718 = count__39709_39713;
var G__39719 = (i__39710_39714 + 1);
seq__39707_39711 = G__39716;
chunk__39708_39712 = G__39717;
count__39709_39713 = G__39718;
i__39710_39714 = G__39719;
continue;
}
} else
{var temp__4092__auto___39720 = cljs.core.seq(seq__39707_39711);if(temp__4092__auto___39720)
{var seq__39707_39721__$1 = temp__4092__auto___39720;if(cljs.core.chunked_seq_QMARK_(seq__39707_39721__$1))
{var c__4189__auto___39722 = cljs.core.chunk_first(seq__39707_39721__$1);{
var G__39723 = cljs.core.chunk_rest(seq__39707_39721__$1);
var G__39724 = c__4189__auto___39722;
var G__39725 = cljs.core.count(c__4189__auto___39722);
var G__39726 = 0;
seq__39707_39711 = G__39723;
chunk__39708_39712 = G__39724;
count__39709_39713 = G__39725;
i__39710_39714 = G__39726;
continue;
}
} else
{var node_39727 = cljs.core.first(seq__39707_39721__$1);goog.dom.classes.remove(node_39727,class$);
{
var G__39728 = cljs.core.next(seq__39707_39721__$1);
var G__39729 = null;
var G__39730 = 0;
var G__39731 = 0;
seq__39707_39711 = G__39728;
chunk__39708_39712 = G__39729;
count__39709_39713 = G__39730;
i__39710_39714 = G__39731;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39736_39740 = cljs.core.seq(domina.nodes(content));var chunk__39737_39741 = null;var count__39738_39742 = 0;var i__39739_39743 = 0;while(true){
if((i__39739_39743 < count__39738_39742))
{var node_39744 = chunk__39737_39741.cljs$core$IIndexed$_nth$arity$2(null,i__39739_39743);goog.dom.classes.toggle(node_39744,class$);
{
var G__39745 = seq__39736_39740;
var G__39746 = chunk__39737_39741;
var G__39747 = count__39738_39742;
var G__39748 = (i__39739_39743 + 1);
seq__39736_39740 = G__39745;
chunk__39737_39741 = G__39746;
count__39738_39742 = G__39747;
i__39739_39743 = G__39748;
continue;
}
} else
{var temp__4092__auto___39749 = cljs.core.seq(seq__39736_39740);if(temp__4092__auto___39749)
{var seq__39736_39750__$1 = temp__4092__auto___39749;if(cljs.core.chunked_seq_QMARK_(seq__39736_39750__$1))
{var c__4189__auto___39751 = cljs.core.chunk_first(seq__39736_39750__$1);{
var G__39752 = cljs.core.chunk_rest(seq__39736_39750__$1);
var G__39753 = c__4189__auto___39751;
var G__39754 = cljs.core.count(c__4189__auto___39751);
var G__39755 = 0;
seq__39736_39740 = G__39752;
chunk__39737_39741 = G__39753;
count__39738_39742 = G__39754;
i__39739_39743 = G__39755;
continue;
}
} else
{var node_39756 = cljs.core.first(seq__39736_39750__$1);goog.dom.classes.toggle(node_39756,class$);
{
var G__39757 = cljs.core.next(seq__39736_39750__$1);
var G__39758 = null;
var G__39759 = 0;
var G__39760 = 0;
seq__39736_39740 = G__39757;
chunk__39737_39741 = G__39758;
count__39738_39742 = G__39759;
i__39739_39743 = G__39760;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39769__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39765_39770 = cljs.core.seq(domina.nodes(content));var chunk__39766_39771 = null;var count__39767_39772 = 0;var i__39768_39773 = 0;while(true){
if((i__39768_39773 < count__39767_39772))
{var node_39774 = chunk__39766_39771.cljs$core$IIndexed$_nth$arity$2(null,i__39768_39773);goog.dom.classes.set(node_39774,classes_39769__$1);
{
var G__39775 = seq__39765_39770;
var G__39776 = chunk__39766_39771;
var G__39777 = count__39767_39772;
var G__39778 = (i__39768_39773 + 1);
seq__39765_39770 = G__39775;
chunk__39766_39771 = G__39776;
count__39767_39772 = G__39777;
i__39768_39773 = G__39778;
continue;
}
} else
{var temp__4092__auto___39779 = cljs.core.seq(seq__39765_39770);if(temp__4092__auto___39779)
{var seq__39765_39780__$1 = temp__4092__auto___39779;if(cljs.core.chunked_seq_QMARK_(seq__39765_39780__$1))
{var c__4189__auto___39781 = cljs.core.chunk_first(seq__39765_39780__$1);{
var G__39782 = cljs.core.chunk_rest(seq__39765_39780__$1);
var G__39783 = c__4189__auto___39781;
var G__39784 = cljs.core.count(c__4189__auto___39781);
var G__39785 = 0;
seq__39765_39770 = G__39782;
chunk__39766_39771 = G__39783;
count__39767_39772 = G__39784;
i__39768_39773 = G__39785;
continue;
}
} else
{var node_39786 = cljs.core.first(seq__39765_39780__$1);goog.dom.classes.set(node_39786,classes_39769__$1);
{
var G__39787 = cljs.core.next(seq__39765_39780__$1);
var G__39788 = null;
var G__39789 = 0;
var G__39790 = 0;
seq__39765_39770 = G__39787;
chunk__39766_39771 = G__39788;
count__39767_39772 = G__39789;
i__39768_39773 = G__39790;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39795_39799 = cljs.core.seq(domina.nodes(content));var chunk__39796_39800 = null;var count__39797_39801 = 0;var i__39798_39802 = 0;while(true){
if((i__39798_39802 < count__39797_39801))
{var node_39803 = chunk__39796_39800.cljs$core$IIndexed$_nth$arity$2(null,i__39798_39802);goog.dom.setTextContent(node_39803,value);
{
var G__39804 = seq__39795_39799;
var G__39805 = chunk__39796_39800;
var G__39806 = count__39797_39801;
var G__39807 = (i__39798_39802 + 1);
seq__39795_39799 = G__39804;
chunk__39796_39800 = G__39805;
count__39797_39801 = G__39806;
i__39798_39802 = G__39807;
continue;
}
} else
{var temp__4092__auto___39808 = cljs.core.seq(seq__39795_39799);if(temp__4092__auto___39808)
{var seq__39795_39809__$1 = temp__4092__auto___39808;if(cljs.core.chunked_seq_QMARK_(seq__39795_39809__$1))
{var c__4189__auto___39810 = cljs.core.chunk_first(seq__39795_39809__$1);{
var G__39811 = cljs.core.chunk_rest(seq__39795_39809__$1);
var G__39812 = c__4189__auto___39810;
var G__39813 = cljs.core.count(c__4189__auto___39810);
var G__39814 = 0;
seq__39795_39799 = G__39811;
chunk__39796_39800 = G__39812;
count__39797_39801 = G__39813;
i__39798_39802 = G__39814;
continue;
}
} else
{var node_39815 = cljs.core.first(seq__39795_39809__$1);goog.dom.setTextContent(node_39815,value);
{
var G__39816 = cljs.core.next(seq__39795_39809__$1);
var G__39817 = null;
var G__39818 = 0;
var G__39819 = 0;
seq__39795_39799 = G__39816;
chunk__39796_39800 = G__39817;
count__39797_39801 = G__39818;
i__39798_39802 = G__39819;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39824_39828 = cljs.core.seq(domina.nodes(content));var chunk__39825_39829 = null;var count__39826_39830 = 0;var i__39827_39831 = 0;while(true){
if((i__39827_39831 < count__39826_39830))
{var node_39832 = chunk__39825_39829.cljs$core$IIndexed$_nth$arity$2(null,i__39827_39831);goog.dom.forms.setValue(node_39832,value);
{
var G__39833 = seq__39824_39828;
var G__39834 = chunk__39825_39829;
var G__39835 = count__39826_39830;
var G__39836 = (i__39827_39831 + 1);
seq__39824_39828 = G__39833;
chunk__39825_39829 = G__39834;
count__39826_39830 = G__39835;
i__39827_39831 = G__39836;
continue;
}
} else
{var temp__4092__auto___39837 = cljs.core.seq(seq__39824_39828);if(temp__4092__auto___39837)
{var seq__39824_39838__$1 = temp__4092__auto___39837;if(cljs.core.chunked_seq_QMARK_(seq__39824_39838__$1))
{var c__4189__auto___39839 = cljs.core.chunk_first(seq__39824_39838__$1);{
var G__39840 = cljs.core.chunk_rest(seq__39824_39838__$1);
var G__39841 = c__4189__auto___39839;
var G__39842 = cljs.core.count(c__4189__auto___39839);
var G__39843 = 0;
seq__39824_39828 = G__39840;
chunk__39825_39829 = G__39841;
count__39826_39830 = G__39842;
i__39827_39831 = G__39843;
continue;
}
} else
{var node_39844 = cljs.core.first(seq__39824_39838__$1);goog.dom.forms.setValue(node_39844,value);
{
var G__39845 = cljs.core.next(seq__39824_39838__$1);
var G__39846 = null;
var G__39847 = 0;
var G__39848 = 0;
seq__39824_39828 = G__39845;
chunk__39825_39829 = G__39846;
count__39826_39830 = G__39847;
i__39827_39831 = G__39848;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_39859 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39855_39860 = cljs.core.seq(domina.nodes(content));var chunk__39856_39861 = null;var count__39857_39862 = 0;var i__39858_39863 = 0;while(true){
if((i__39858_39863 < count__39857_39862))
{var node_39864 = chunk__39856_39861.cljs$core$IIndexed$_nth$arity$2(null,i__39858_39863);node_39864.innerHTML = value_39859;
{
var G__39865 = seq__39855_39860;
var G__39866 = chunk__39856_39861;
var G__39867 = count__39857_39862;
var G__39868 = (i__39858_39863 + 1);
seq__39855_39860 = G__39865;
chunk__39856_39861 = G__39866;
count__39857_39862 = G__39867;
i__39858_39863 = G__39868;
continue;
}
} else
{var temp__4092__auto___39869 = cljs.core.seq(seq__39855_39860);if(temp__4092__auto___39869)
{var seq__39855_39870__$1 = temp__4092__auto___39869;if(cljs.core.chunked_seq_QMARK_(seq__39855_39870__$1))
{var c__4189__auto___39871 = cljs.core.chunk_first(seq__39855_39870__$1);{
var G__39872 = cljs.core.chunk_rest(seq__39855_39870__$1);
var G__39873 = c__4189__auto___39871;
var G__39874 = cljs.core.count(c__4189__auto___39871);
var G__39875 = 0;
seq__39855_39860 = G__39872;
chunk__39856_39861 = G__39873;
count__39857_39862 = G__39874;
i__39858_39863 = G__39875;
continue;
}
} else
{var node_39876 = cljs.core.first(seq__39855_39870__$1);node_39876.innerHTML = value_39859;
{
var G__39877 = cljs.core.next(seq__39855_39870__$1);
var G__39878 = null;
var G__39879 = 0;
var G__39880 = 0;
seq__39855_39860 = G__39877;
chunk__39856_39861 = G__39878;
count__39857_39862 = G__39879;
i__39858_39863 = G__39880;
continue;
}
}
} else
{}
}
break;
}
}catch (e39854){if((e39854 instanceof Error))
{var e_39881 = e39854;domina.replace_children_BANG_(content,value_39859);
} else
{if(cljs.core.constant$keyword$538)
{throw e39854;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39888_39892 = cljs.core.seq(children);var chunk__39889_39893 = null;var count__39890_39894 = 0;var i__39891_39895 = 0;while(true){
if((i__39891_39895 < count__39890_39894))
{var child_39896 = chunk__39889_39893.cljs$core$IIndexed$_nth$arity$2(null,i__39891_39895);frag.appendChild(child_39896);
{
var G__39897 = seq__39888_39892;
var G__39898 = chunk__39889_39893;
var G__39899 = count__39890_39894;
var G__39900 = (i__39891_39895 + 1);
seq__39888_39892 = G__39897;
chunk__39889_39893 = G__39898;
count__39890_39894 = G__39899;
i__39891_39895 = G__39900;
continue;
}
} else
{var temp__4092__auto___39901 = cljs.core.seq(seq__39888_39892);if(temp__4092__auto___39901)
{var seq__39888_39902__$1 = temp__4092__auto___39901;if(cljs.core.chunked_seq_QMARK_(seq__39888_39902__$1))
{var c__4189__auto___39903 = cljs.core.chunk_first(seq__39888_39902__$1);{
var G__39904 = cljs.core.chunk_rest(seq__39888_39902__$1);
var G__39905 = c__4189__auto___39903;
var G__39906 = cljs.core.count(c__4189__auto___39903);
var G__39907 = 0;
seq__39888_39892 = G__39904;
chunk__39889_39893 = G__39905;
count__39890_39894 = G__39906;
i__39891_39895 = G__39907;
continue;
}
} else
{var child_39908 = cljs.core.first(seq__39888_39902__$1);frag.appendChild(child_39908);
{
var G__39909 = cljs.core.next(seq__39888_39902__$1);
var G__39910 = null;
var G__39911 = 0;
var G__39912 = 0;
seq__39888_39892 = G__39909;
chunk__39889_39893 = G__39910;
count__39890_39894 = G__39911;
i__39891_39895 = G__39912;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39882_SHARP_,p2__39883_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39882_SHARP_,p2__39883_SHARP_) : f.call(null,p1__39882_SHARP_,p2__39883_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not(obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__39914 = list_thing;if(G__39914)
{var bit__4091__auto__ = (G__39914.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39914.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39914);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$539)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__39915 = content;if(G__39915)
{var bit__4091__auto__ = (G__39915.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39915.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39915);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39915);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$539)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__39916 = content;if(G__39916)
{var bit__4091__auto__ = (G__39916.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39916.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39916);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$539)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
