// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_53504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_53505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_53506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$927,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_53506,opt_wrapper_53504,table_section_wrapper_53505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_53504,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_53505,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_53505,cell_wrapper_53506,table_section_wrapper_53505,table_section_wrapper_53505]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__53511 = cljs.core.seq(tbody);var chunk__53512 = null;var count__53513 = (0);var i__53514 = (0);while(true){
if((i__53514 < count__53513))
{var child = chunk__53512.cljs$core$IIndexed$_nth$arity$2(null,i__53514);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__53515 = seq__53511;
var G__53516 = chunk__53512;
var G__53517 = count__53513;
var G__53518 = (i__53514 + (1));
seq__53511 = G__53515;
chunk__53512 = G__53516;
count__53513 = G__53517;
i__53514 = G__53518;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__53511);if(temp__4126__auto__)
{var seq__53511__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__53511__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__53511__$1);{
var G__53519 = cljs.core.chunk_rest(seq__53511__$1);
var G__53520 = c__4314__auto__;
var G__53521 = cljs.core.count(c__4314__auto__);
var G__53522 = (0);
seq__53511 = G__53519;
chunk__53512 = G__53520;
count__53513 = G__53521;
i__53514 = G__53522;
continue;
}
} else
{var child = cljs.core.first(seq__53511__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__53523 = cljs.core.next(seq__53511__$1);
var G__53524 = null;
var G__53525 = (0);
var G__53526 = (0);
seq__53511 = G__53523;
chunk__53512 = G__53524;
count__53513 = G__53525;
i__53514 = G__53526;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__53528 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$927.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__53529 = wrapper.lastChild;
var G__53530 = (level - (1));
wrapper = G__53529;
level = G__53530;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj53532 = {};return obj53532;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__53533){
var mesg = cljs.core.seq(arglist__53533);
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
log.cljs$lang$applyTo = (function (arglist__53534){
var mesg = cljs.core.seq(arglist__53534);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__53535){
var contents = cljs.core.seq(arglist__53535);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53536_SHARP_){return p1__53536_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__53537_SHARP_,p2__53538_SHARP_){return goog.dom.insertChildAt(p1__53537_SHARP_,p2__53538_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__53537_SHARP_,p2__53538_SHARP_){return goog.dom.insertChildAt(p1__53537_SHARP_,p2__53538_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__53540_SHARP_,p2__53539_SHARP_){return goog.dom.insertSiblingBefore(p2__53539_SHARP_,p1__53540_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__53540_SHARP_,p2__53539_SHARP_){return goog.dom.insertSiblingBefore(p2__53539_SHARP_,p1__53540_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__53542_SHARP_,p2__53541_SHARP_){return goog.dom.insertSiblingAfter(p2__53541_SHARP_,p1__53542_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__53542_SHARP_,p2__53541_SHARP_){return goog.dom.insertSiblingAfter(p2__53541_SHARP_,p1__53542_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__53544_SHARP_,p2__53543_SHARP_){return goog.dom.replaceNode(p2__53543_SHARP_,p1__53544_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__53544_SHARP_,p2__53543_SHARP_){return goog.dom.replaceNode(p2__53543_SHARP_,p1__53544_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__53549_53553 = cljs.core.seq(domina.nodes(content));var chunk__53550_53554 = null;var count__53551_53555 = (0);var i__53552_53556 = (0);while(true){
if((i__53552_53556 < count__53551_53555))
{var n_53557 = chunk__53550_53554.cljs$core$IIndexed$_nth$arity$2(null,i__53552_53556);goog.style.setStyle(n_53557,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__53558 = seq__53549_53553;
var G__53559 = chunk__53550_53554;
var G__53560 = count__53551_53555;
var G__53561 = (i__53552_53556 + (1));
seq__53549_53553 = G__53558;
chunk__53550_53554 = G__53559;
count__53551_53555 = G__53560;
i__53552_53556 = G__53561;
continue;
}
} else
{var temp__4126__auto___53562 = cljs.core.seq(seq__53549_53553);if(temp__4126__auto___53562)
{var seq__53549_53563__$1 = temp__4126__auto___53562;if(cljs.core.chunked_seq_QMARK_(seq__53549_53563__$1))
{var c__4314__auto___53564 = cljs.core.chunk_first(seq__53549_53563__$1);{
var G__53565 = cljs.core.chunk_rest(seq__53549_53563__$1);
var G__53566 = c__4314__auto___53564;
var G__53567 = cljs.core.count(c__4314__auto___53564);
var G__53568 = (0);
seq__53549_53553 = G__53565;
chunk__53550_53554 = G__53566;
count__53551_53555 = G__53567;
i__53552_53556 = G__53568;
continue;
}
} else
{var n_53569 = cljs.core.first(seq__53549_53563__$1);goog.style.setStyle(n_53569,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__53570 = cljs.core.next(seq__53549_53563__$1);
var G__53571 = null;
var G__53572 = (0);
var G__53573 = (0);
seq__53549_53553 = G__53570;
chunk__53550_53554 = G__53571;
count__53551_53555 = G__53572;
i__53552_53556 = G__53573;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__53574){
var content = cljs.core.first(arglist__53574);
arglist__53574 = cljs.core.next(arglist__53574);
var name = cljs.core.first(arglist__53574);
var value = cljs.core.rest(arglist__53574);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__53579_53583 = cljs.core.seq(domina.nodes(content));var chunk__53580_53584 = null;var count__53581_53585 = (0);var i__53582_53586 = (0);while(true){
if((i__53582_53586 < count__53581_53585))
{var n_53587 = chunk__53580_53584.cljs$core$IIndexed$_nth$arity$2(null,i__53582_53586);n_53587.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__53588 = seq__53579_53583;
var G__53589 = chunk__53580_53584;
var G__53590 = count__53581_53585;
var G__53591 = (i__53582_53586 + (1));
seq__53579_53583 = G__53588;
chunk__53580_53584 = G__53589;
count__53581_53585 = G__53590;
i__53582_53586 = G__53591;
continue;
}
} else
{var temp__4126__auto___53592 = cljs.core.seq(seq__53579_53583);if(temp__4126__auto___53592)
{var seq__53579_53593__$1 = temp__4126__auto___53592;if(cljs.core.chunked_seq_QMARK_(seq__53579_53593__$1))
{var c__4314__auto___53594 = cljs.core.chunk_first(seq__53579_53593__$1);{
var G__53595 = cljs.core.chunk_rest(seq__53579_53593__$1);
var G__53596 = c__4314__auto___53594;
var G__53597 = cljs.core.count(c__4314__auto___53594);
var G__53598 = (0);
seq__53579_53583 = G__53595;
chunk__53580_53584 = G__53596;
count__53581_53585 = G__53597;
i__53582_53586 = G__53598;
continue;
}
} else
{var n_53599 = cljs.core.first(seq__53579_53593__$1);n_53599.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__53600 = cljs.core.next(seq__53579_53593__$1);
var G__53601 = null;
var G__53602 = (0);
var G__53603 = (0);
seq__53579_53583 = G__53600;
chunk__53580_53584 = G__53601;
count__53581_53585 = G__53602;
i__53582_53586 = G__53603;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__53604){
var content = cljs.core.first(arglist__53604);
arglist__53604 = cljs.core.next(arglist__53604);
var name = cljs.core.first(arglist__53604);
var value = cljs.core.rest(arglist__53604);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__53609_53613 = cljs.core.seq(domina.nodes(content));var chunk__53610_53614 = null;var count__53611_53615 = (0);var i__53612_53616 = (0);while(true){
if((i__53612_53616 < count__53611_53615))
{var n_53617 = chunk__53610_53614.cljs$core$IIndexed$_nth$arity$2(null,i__53612_53616);n_53617.removeAttribute(cljs.core.name(name));
{
var G__53618 = seq__53609_53613;
var G__53619 = chunk__53610_53614;
var G__53620 = count__53611_53615;
var G__53621 = (i__53612_53616 + (1));
seq__53609_53613 = G__53618;
chunk__53610_53614 = G__53619;
count__53611_53615 = G__53620;
i__53612_53616 = G__53621;
continue;
}
} else
{var temp__4126__auto___53622 = cljs.core.seq(seq__53609_53613);if(temp__4126__auto___53622)
{var seq__53609_53623__$1 = temp__4126__auto___53622;if(cljs.core.chunked_seq_QMARK_(seq__53609_53623__$1))
{var c__4314__auto___53624 = cljs.core.chunk_first(seq__53609_53623__$1);{
var G__53625 = cljs.core.chunk_rest(seq__53609_53623__$1);
var G__53626 = c__4314__auto___53624;
var G__53627 = cljs.core.count(c__4314__auto___53624);
var G__53628 = (0);
seq__53609_53613 = G__53625;
chunk__53610_53614 = G__53626;
count__53611_53615 = G__53627;
i__53612_53616 = G__53628;
continue;
}
} else
{var n_53629 = cljs.core.first(seq__53609_53623__$1);n_53629.removeAttribute(cljs.core.name(name));
{
var G__53630 = cljs.core.next(seq__53609_53623__$1);
var G__53631 = null;
var G__53632 = (0);
var G__53633 = (0);
seq__53609_53613 = G__53630;
chunk__53610_53614 = G__53631;
count__53611_53615 = G__53632;
i__53612_53616 = G__53633;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__53635 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53635,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53635,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__53636_SHARP_){var attr = attrs__$1.item(p1__53636_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__53643_53649 = cljs.core.seq(styles);var chunk__53644_53650 = null;var count__53645_53651 = (0);var i__53646_53652 = (0);while(true){
if((i__53646_53652 < count__53645_53651))
{var vec__53647_53653 = chunk__53644_53650.cljs$core$IIndexed$_nth$arity$2(null,i__53646_53652);var name_53654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53647_53653,(0),null);var value_53655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53647_53653,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_53654,cljs.core.array_seq([value_53655], 0));
{
var G__53656 = seq__53643_53649;
var G__53657 = chunk__53644_53650;
var G__53658 = count__53645_53651;
var G__53659 = (i__53646_53652 + (1));
seq__53643_53649 = G__53656;
chunk__53644_53650 = G__53657;
count__53645_53651 = G__53658;
i__53646_53652 = G__53659;
continue;
}
} else
{var temp__4126__auto___53660 = cljs.core.seq(seq__53643_53649);if(temp__4126__auto___53660)
{var seq__53643_53661__$1 = temp__4126__auto___53660;if(cljs.core.chunked_seq_QMARK_(seq__53643_53661__$1))
{var c__4314__auto___53662 = cljs.core.chunk_first(seq__53643_53661__$1);{
var G__53663 = cljs.core.chunk_rest(seq__53643_53661__$1);
var G__53664 = c__4314__auto___53662;
var G__53665 = cljs.core.count(c__4314__auto___53662);
var G__53666 = (0);
seq__53643_53649 = G__53663;
chunk__53644_53650 = G__53664;
count__53645_53651 = G__53665;
i__53646_53652 = G__53666;
continue;
}
} else
{var vec__53648_53667 = cljs.core.first(seq__53643_53661__$1);var name_53668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53648_53667,(0),null);var value_53669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53648_53667,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_53668,cljs.core.array_seq([value_53669], 0));
{
var G__53670 = cljs.core.next(seq__53643_53661__$1);
var G__53671 = null;
var G__53672 = (0);
var G__53673 = (0);
seq__53643_53649 = G__53670;
chunk__53644_53650 = G__53671;
count__53645_53651 = G__53672;
i__53646_53652 = G__53673;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__53680_53686 = cljs.core.seq(attrs);var chunk__53681_53687 = null;var count__53682_53688 = (0);var i__53683_53689 = (0);while(true){
if((i__53683_53689 < count__53682_53688))
{var vec__53684_53690 = chunk__53681_53687.cljs$core$IIndexed$_nth$arity$2(null,i__53683_53689);var name_53691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684_53690,(0),null);var value_53692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684_53690,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_53691,cljs.core.array_seq([value_53692], 0));
{
var G__53693 = seq__53680_53686;
var G__53694 = chunk__53681_53687;
var G__53695 = count__53682_53688;
var G__53696 = (i__53683_53689 + (1));
seq__53680_53686 = G__53693;
chunk__53681_53687 = G__53694;
count__53682_53688 = G__53695;
i__53683_53689 = G__53696;
continue;
}
} else
{var temp__4126__auto___53697 = cljs.core.seq(seq__53680_53686);if(temp__4126__auto___53697)
{var seq__53680_53698__$1 = temp__4126__auto___53697;if(cljs.core.chunked_seq_QMARK_(seq__53680_53698__$1))
{var c__4314__auto___53699 = cljs.core.chunk_first(seq__53680_53698__$1);{
var G__53700 = cljs.core.chunk_rest(seq__53680_53698__$1);
var G__53701 = c__4314__auto___53699;
var G__53702 = cljs.core.count(c__4314__auto___53699);
var G__53703 = (0);
seq__53680_53686 = G__53700;
chunk__53681_53687 = G__53701;
count__53682_53688 = G__53702;
i__53683_53689 = G__53703;
continue;
}
} else
{var vec__53685_53704 = cljs.core.first(seq__53680_53698__$1);var name_53705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53685_53704,(0),null);var value_53706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53685_53704,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_53705,cljs.core.array_seq([value_53706], 0));
{
var G__53707 = cljs.core.next(seq__53680_53698__$1);
var G__53708 = null;
var G__53709 = (0);
var G__53710 = (0);
seq__53680_53686 = G__53707;
chunk__53681_53687 = G__53708;
count__53682_53688 = G__53709;
i__53683_53689 = G__53710;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__53715_53719 = cljs.core.seq(domina.nodes(content));var chunk__53716_53720 = null;var count__53717_53721 = (0);var i__53718_53722 = (0);while(true){
if((i__53718_53722 < count__53717_53721))
{var node_53723 = chunk__53716_53720.cljs$core$IIndexed$_nth$arity$2(null,i__53718_53722);goog.dom.classes.add(node_53723,class$);
{
var G__53724 = seq__53715_53719;
var G__53725 = chunk__53716_53720;
var G__53726 = count__53717_53721;
var G__53727 = (i__53718_53722 + (1));
seq__53715_53719 = G__53724;
chunk__53716_53720 = G__53725;
count__53717_53721 = G__53726;
i__53718_53722 = G__53727;
continue;
}
} else
{var temp__4126__auto___53728 = cljs.core.seq(seq__53715_53719);if(temp__4126__auto___53728)
{var seq__53715_53729__$1 = temp__4126__auto___53728;if(cljs.core.chunked_seq_QMARK_(seq__53715_53729__$1))
{var c__4314__auto___53730 = cljs.core.chunk_first(seq__53715_53729__$1);{
var G__53731 = cljs.core.chunk_rest(seq__53715_53729__$1);
var G__53732 = c__4314__auto___53730;
var G__53733 = cljs.core.count(c__4314__auto___53730);
var G__53734 = (0);
seq__53715_53719 = G__53731;
chunk__53716_53720 = G__53732;
count__53717_53721 = G__53733;
i__53718_53722 = G__53734;
continue;
}
} else
{var node_53735 = cljs.core.first(seq__53715_53729__$1);goog.dom.classes.add(node_53735,class$);
{
var G__53736 = cljs.core.next(seq__53715_53729__$1);
var G__53737 = null;
var G__53738 = (0);
var G__53739 = (0);
seq__53715_53719 = G__53736;
chunk__53716_53720 = G__53737;
count__53717_53721 = G__53738;
i__53718_53722 = G__53739;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__53744_53748 = cljs.core.seq(domina.nodes(content));var chunk__53745_53749 = null;var count__53746_53750 = (0);var i__53747_53751 = (0);while(true){
if((i__53747_53751 < count__53746_53750))
{var node_53752 = chunk__53745_53749.cljs$core$IIndexed$_nth$arity$2(null,i__53747_53751);goog.dom.classes.remove(node_53752,class$);
{
var G__53753 = seq__53744_53748;
var G__53754 = chunk__53745_53749;
var G__53755 = count__53746_53750;
var G__53756 = (i__53747_53751 + (1));
seq__53744_53748 = G__53753;
chunk__53745_53749 = G__53754;
count__53746_53750 = G__53755;
i__53747_53751 = G__53756;
continue;
}
} else
{var temp__4126__auto___53757 = cljs.core.seq(seq__53744_53748);if(temp__4126__auto___53757)
{var seq__53744_53758__$1 = temp__4126__auto___53757;if(cljs.core.chunked_seq_QMARK_(seq__53744_53758__$1))
{var c__4314__auto___53759 = cljs.core.chunk_first(seq__53744_53758__$1);{
var G__53760 = cljs.core.chunk_rest(seq__53744_53758__$1);
var G__53761 = c__4314__auto___53759;
var G__53762 = cljs.core.count(c__4314__auto___53759);
var G__53763 = (0);
seq__53744_53748 = G__53760;
chunk__53745_53749 = G__53761;
count__53746_53750 = G__53762;
i__53747_53751 = G__53763;
continue;
}
} else
{var node_53764 = cljs.core.first(seq__53744_53758__$1);goog.dom.classes.remove(node_53764,class$);
{
var G__53765 = cljs.core.next(seq__53744_53758__$1);
var G__53766 = null;
var G__53767 = (0);
var G__53768 = (0);
seq__53744_53748 = G__53765;
chunk__53745_53749 = G__53766;
count__53746_53750 = G__53767;
i__53747_53751 = G__53768;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__53773_53777 = cljs.core.seq(domina.nodes(content));var chunk__53774_53778 = null;var count__53775_53779 = (0);var i__53776_53780 = (0);while(true){
if((i__53776_53780 < count__53775_53779))
{var node_53781 = chunk__53774_53778.cljs$core$IIndexed$_nth$arity$2(null,i__53776_53780);goog.dom.classes.toggle(node_53781,class$);
{
var G__53782 = seq__53773_53777;
var G__53783 = chunk__53774_53778;
var G__53784 = count__53775_53779;
var G__53785 = (i__53776_53780 + (1));
seq__53773_53777 = G__53782;
chunk__53774_53778 = G__53783;
count__53775_53779 = G__53784;
i__53776_53780 = G__53785;
continue;
}
} else
{var temp__4126__auto___53786 = cljs.core.seq(seq__53773_53777);if(temp__4126__auto___53786)
{var seq__53773_53787__$1 = temp__4126__auto___53786;if(cljs.core.chunked_seq_QMARK_(seq__53773_53787__$1))
{var c__4314__auto___53788 = cljs.core.chunk_first(seq__53773_53787__$1);{
var G__53789 = cljs.core.chunk_rest(seq__53773_53787__$1);
var G__53790 = c__4314__auto___53788;
var G__53791 = cljs.core.count(c__4314__auto___53788);
var G__53792 = (0);
seq__53773_53777 = G__53789;
chunk__53774_53778 = G__53790;
count__53775_53779 = G__53791;
i__53776_53780 = G__53792;
continue;
}
} else
{var node_53793 = cljs.core.first(seq__53773_53787__$1);goog.dom.classes.toggle(node_53793,class$);
{
var G__53794 = cljs.core.next(seq__53773_53787__$1);
var G__53795 = null;
var G__53796 = (0);
var G__53797 = (0);
seq__53773_53777 = G__53794;
chunk__53774_53778 = G__53795;
count__53775_53779 = G__53796;
i__53776_53780 = G__53797;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_53806__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__53802_53807 = cljs.core.seq(domina.nodes(content));var chunk__53803_53808 = null;var count__53804_53809 = (0);var i__53805_53810 = (0);while(true){
if((i__53805_53810 < count__53804_53809))
{var node_53811 = chunk__53803_53808.cljs$core$IIndexed$_nth$arity$2(null,i__53805_53810);goog.dom.classes.set(node_53811,classes_53806__$1);
{
var G__53812 = seq__53802_53807;
var G__53813 = chunk__53803_53808;
var G__53814 = count__53804_53809;
var G__53815 = (i__53805_53810 + (1));
seq__53802_53807 = G__53812;
chunk__53803_53808 = G__53813;
count__53804_53809 = G__53814;
i__53805_53810 = G__53815;
continue;
}
} else
{var temp__4126__auto___53816 = cljs.core.seq(seq__53802_53807);if(temp__4126__auto___53816)
{var seq__53802_53817__$1 = temp__4126__auto___53816;if(cljs.core.chunked_seq_QMARK_(seq__53802_53817__$1))
{var c__4314__auto___53818 = cljs.core.chunk_first(seq__53802_53817__$1);{
var G__53819 = cljs.core.chunk_rest(seq__53802_53817__$1);
var G__53820 = c__4314__auto___53818;
var G__53821 = cljs.core.count(c__4314__auto___53818);
var G__53822 = (0);
seq__53802_53807 = G__53819;
chunk__53803_53808 = G__53820;
count__53804_53809 = G__53821;
i__53805_53810 = G__53822;
continue;
}
} else
{var node_53823 = cljs.core.first(seq__53802_53817__$1);goog.dom.classes.set(node_53823,classes_53806__$1);
{
var G__53824 = cljs.core.next(seq__53802_53817__$1);
var G__53825 = null;
var G__53826 = (0);
var G__53827 = (0);
seq__53802_53807 = G__53824;
chunk__53803_53808 = G__53825;
count__53804_53809 = G__53826;
i__53805_53810 = G__53827;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__53832_53836 = cljs.core.seq(domina.nodes(content));var chunk__53833_53837 = null;var count__53834_53838 = (0);var i__53835_53839 = (0);while(true){
if((i__53835_53839 < count__53834_53838))
{var node_53840 = chunk__53833_53837.cljs$core$IIndexed$_nth$arity$2(null,i__53835_53839);goog.dom.setTextContent(node_53840,value);
{
var G__53841 = seq__53832_53836;
var G__53842 = chunk__53833_53837;
var G__53843 = count__53834_53838;
var G__53844 = (i__53835_53839 + (1));
seq__53832_53836 = G__53841;
chunk__53833_53837 = G__53842;
count__53834_53838 = G__53843;
i__53835_53839 = G__53844;
continue;
}
} else
{var temp__4126__auto___53845 = cljs.core.seq(seq__53832_53836);if(temp__4126__auto___53845)
{var seq__53832_53846__$1 = temp__4126__auto___53845;if(cljs.core.chunked_seq_QMARK_(seq__53832_53846__$1))
{var c__4314__auto___53847 = cljs.core.chunk_first(seq__53832_53846__$1);{
var G__53848 = cljs.core.chunk_rest(seq__53832_53846__$1);
var G__53849 = c__4314__auto___53847;
var G__53850 = cljs.core.count(c__4314__auto___53847);
var G__53851 = (0);
seq__53832_53836 = G__53848;
chunk__53833_53837 = G__53849;
count__53834_53838 = G__53850;
i__53835_53839 = G__53851;
continue;
}
} else
{var node_53852 = cljs.core.first(seq__53832_53846__$1);goog.dom.setTextContent(node_53852,value);
{
var G__53853 = cljs.core.next(seq__53832_53846__$1);
var G__53854 = null;
var G__53855 = (0);
var G__53856 = (0);
seq__53832_53836 = G__53853;
chunk__53833_53837 = G__53854;
count__53834_53838 = G__53855;
i__53835_53839 = G__53856;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__53861_53865 = cljs.core.seq(domina.nodes(content));var chunk__53862_53866 = null;var count__53863_53867 = (0);var i__53864_53868 = (0);while(true){
if((i__53864_53868 < count__53863_53867))
{var node_53869 = chunk__53862_53866.cljs$core$IIndexed$_nth$arity$2(null,i__53864_53868);goog.dom.forms.setValue(node_53869,value);
{
var G__53870 = seq__53861_53865;
var G__53871 = chunk__53862_53866;
var G__53872 = count__53863_53867;
var G__53873 = (i__53864_53868 + (1));
seq__53861_53865 = G__53870;
chunk__53862_53866 = G__53871;
count__53863_53867 = G__53872;
i__53864_53868 = G__53873;
continue;
}
} else
{var temp__4126__auto___53874 = cljs.core.seq(seq__53861_53865);if(temp__4126__auto___53874)
{var seq__53861_53875__$1 = temp__4126__auto___53874;if(cljs.core.chunked_seq_QMARK_(seq__53861_53875__$1))
{var c__4314__auto___53876 = cljs.core.chunk_first(seq__53861_53875__$1);{
var G__53877 = cljs.core.chunk_rest(seq__53861_53875__$1);
var G__53878 = c__4314__auto___53876;
var G__53879 = cljs.core.count(c__4314__auto___53876);
var G__53880 = (0);
seq__53861_53865 = G__53877;
chunk__53862_53866 = G__53878;
count__53863_53867 = G__53879;
i__53864_53868 = G__53880;
continue;
}
} else
{var node_53881 = cljs.core.first(seq__53861_53875__$1);goog.dom.forms.setValue(node_53881,value);
{
var G__53882 = cljs.core.next(seq__53861_53875__$1);
var G__53883 = null;
var G__53884 = (0);
var G__53885 = (0);
seq__53861_53865 = G__53882;
chunk__53862_53866 = G__53883;
count__53863_53867 = G__53884;
i__53864_53868 = G__53885;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_53896 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__53892_53897 = cljs.core.seq(domina.nodes(content));var chunk__53893_53898 = null;var count__53894_53899 = (0);var i__53895_53900 = (0);while(true){
if((i__53895_53900 < count__53894_53899))
{var node_53901 = chunk__53893_53898.cljs$core$IIndexed$_nth$arity$2(null,i__53895_53900);node_53901.innerHTML = value_53896;
{
var G__53902 = seq__53892_53897;
var G__53903 = chunk__53893_53898;
var G__53904 = count__53894_53899;
var G__53905 = (i__53895_53900 + (1));
seq__53892_53897 = G__53902;
chunk__53893_53898 = G__53903;
count__53894_53899 = G__53904;
i__53895_53900 = G__53905;
continue;
}
} else
{var temp__4126__auto___53906 = cljs.core.seq(seq__53892_53897);if(temp__4126__auto___53906)
{var seq__53892_53907__$1 = temp__4126__auto___53906;if(cljs.core.chunked_seq_QMARK_(seq__53892_53907__$1))
{var c__4314__auto___53908 = cljs.core.chunk_first(seq__53892_53907__$1);{
var G__53909 = cljs.core.chunk_rest(seq__53892_53907__$1);
var G__53910 = c__4314__auto___53908;
var G__53911 = cljs.core.count(c__4314__auto___53908);
var G__53912 = (0);
seq__53892_53897 = G__53909;
chunk__53893_53898 = G__53910;
count__53894_53899 = G__53911;
i__53895_53900 = G__53912;
continue;
}
} else
{var node_53913 = cljs.core.first(seq__53892_53907__$1);node_53913.innerHTML = value_53896;
{
var G__53914 = cljs.core.next(seq__53892_53907__$1);
var G__53915 = null;
var G__53916 = (0);
var G__53917 = (0);
seq__53892_53897 = G__53914;
chunk__53893_53898 = G__53915;
count__53894_53899 = G__53916;
i__53895_53900 = G__53917;
continue;
}
}
} else
{}
}
break;
}
}catch (e53891){if((e53891 instanceof Error))
{var e_53918 = e53891;domina.replace_children_BANG_(content,value_53896);
} else
{throw e53891;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__53925_53929 = cljs.core.seq(children);var chunk__53926_53930 = null;var count__53927_53931 = (0);var i__53928_53932 = (0);while(true){
if((i__53928_53932 < count__53927_53931))
{var child_53933 = chunk__53926_53930.cljs$core$IIndexed$_nth$arity$2(null,i__53928_53932);frag.appendChild(child_53933);
{
var G__53934 = seq__53925_53929;
var G__53935 = chunk__53926_53930;
var G__53936 = count__53927_53931;
var G__53937 = (i__53928_53932 + (1));
seq__53925_53929 = G__53934;
chunk__53926_53930 = G__53935;
count__53927_53931 = G__53936;
i__53928_53932 = G__53937;
continue;
}
} else
{var temp__4126__auto___53938 = cljs.core.seq(seq__53925_53929);if(temp__4126__auto___53938)
{var seq__53925_53939__$1 = temp__4126__auto___53938;if(cljs.core.chunked_seq_QMARK_(seq__53925_53939__$1))
{var c__4314__auto___53940 = cljs.core.chunk_first(seq__53925_53939__$1);{
var G__53941 = cljs.core.chunk_rest(seq__53925_53939__$1);
var G__53942 = c__4314__auto___53940;
var G__53943 = cljs.core.count(c__4314__auto___53940);
var G__53944 = (0);
seq__53925_53929 = G__53941;
chunk__53926_53930 = G__53942;
count__53927_53931 = G__53943;
i__53928_53932 = G__53944;
continue;
}
} else
{var child_53945 = cljs.core.first(seq__53925_53939__$1);frag.appendChild(child_53945);
{
var G__53946 = cljs.core.next(seq__53925_53939__$1);
var G__53947 = null;
var G__53948 = (0);
var G__53949 = (0);
seq__53925_53929 = G__53946;
chunk__53926_53930 = G__53947;
count__53927_53931 = G__53948;
i__53928_53932 = G__53949;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__53919_SHARP_,p2__53920_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__53919_SHARP_,p2__53920_SHARP_) : f.call(null,p1__53919_SHARP_,p2__53920_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__53951 = list_thing;if(G__53951)
{var bit__4208__auto__ = (G__53951.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__53951.cljs$core$ISeqable$))
{return true;
} else
{if((!G__53951.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53951);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53951);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__53952 = content;if(G__53952)
{var bit__4208__auto__ = (G__53952.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__53952.cljs$core$ISeqable$))
{return true;
} else
{if((!G__53952.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53952);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53952);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__53953 = content;if(G__53953)
{var bit__4208__auto__ = (G__53953.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__53953.cljs$core$ISeqable$))
{return true;
} else
{if((!G__53953.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__53953);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{return content;

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
