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
var opt_wrapper_39539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$541,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39540,table_section_wrapper_39540,opt_wrapper_39539,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39541,table_section_wrapper_39540,cell_wrapper_39541,opt_wrapper_39539,table_section_wrapper_39540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39540]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39546 = cljs.core.seq(tbody);var chunk__39547 = null;var count__39548 = 0;var i__39549 = 0;while(true){
if((i__39549 < count__39548))
{var child = chunk__39547.cljs$core$IIndexed$_nth$arity$2(null,i__39549);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39550 = seq__39546;
var G__39551 = chunk__39547;
var G__39552 = count__39548;
var G__39553 = (i__39549 + 1);
seq__39546 = G__39550;
chunk__39547 = G__39551;
count__39548 = G__39552;
i__39549 = G__39553;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39546);if(temp__4092__auto__)
{var seq__39546__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39546__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39546__$1);{
var G__39554 = cljs.core.chunk_rest(seq__39546__$1);
var G__39555 = c__4189__auto__;
var G__39556 = cljs.core.count(c__4189__auto__);
var G__39557 = 0;
seq__39546 = G__39554;
chunk__39547 = G__39555;
count__39548 = G__39556;
i__39549 = G__39557;
continue;
}
} else
{var child = cljs.core.first(seq__39546__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39558 = cljs.core.next(seq__39546__$1);
var G__39559 = null;
var G__39560 = 0;
var G__39561 = 0;
seq__39546 = G__39558;
chunk__39547 = G__39559;
count__39548 = G__39560;
i__39549 = G__39561;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39563 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39564 = wrapper.lastChild;
var G__39565 = (level - 1);
wrapper = G__39564;
level = G__39565;
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
domina.DomContent = (function (){var obj39567 = {};return obj39567;
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
log_debug.cljs$lang$applyTo = (function (arglist__39568){
var mesg = cljs.core.seq(arglist__39568);
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
log.cljs$lang$applyTo = (function (arglist__39569){
var mesg = cljs.core.seq(arglist__39569);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39570){
var contents = cljs.core.seq(arglist__39570);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39571_SHARP_){return p1__39571_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39572_SHARP_,p2__39573_SHARP_){return goog.dom.insertChildAt(p1__39572_SHARP_,p2__39573_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39572_SHARP_,p2__39573_SHARP_){return goog.dom.insertChildAt(p1__39572_SHARP_,p2__39573_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39575_SHARP_,p2__39574_SHARP_){return goog.dom.insertSiblingBefore(p2__39574_SHARP_,p1__39575_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39575_SHARP_,p2__39574_SHARP_){return goog.dom.insertSiblingBefore(p2__39574_SHARP_,p1__39575_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39577_SHARP_,p2__39576_SHARP_){return goog.dom.insertSiblingAfter(p2__39576_SHARP_,p1__39577_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39577_SHARP_,p2__39576_SHARP_){return goog.dom.insertSiblingAfter(p2__39576_SHARP_,p1__39577_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39579_SHARP_,p2__39578_SHARP_){return goog.dom.replaceNode(p2__39578_SHARP_,p1__39579_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39579_SHARP_,p2__39578_SHARP_){return goog.dom.replaceNode(p2__39578_SHARP_,p1__39579_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39584_39588 = cljs.core.seq(domina.nodes(content));var chunk__39585_39589 = null;var count__39586_39590 = 0;var i__39587_39591 = 0;while(true){
if((i__39587_39591 < count__39586_39590))
{var n_39592 = chunk__39585_39589.cljs$core$IIndexed$_nth$arity$2(null,i__39587_39591);goog.style.setStyle(n_39592,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39593 = seq__39584_39588;
var G__39594 = chunk__39585_39589;
var G__39595 = count__39586_39590;
var G__39596 = (i__39587_39591 + 1);
seq__39584_39588 = G__39593;
chunk__39585_39589 = G__39594;
count__39586_39590 = G__39595;
i__39587_39591 = G__39596;
continue;
}
} else
{var temp__4092__auto___39597 = cljs.core.seq(seq__39584_39588);if(temp__4092__auto___39597)
{var seq__39584_39598__$1 = temp__4092__auto___39597;if(cljs.core.chunked_seq_QMARK_(seq__39584_39598__$1))
{var c__4189__auto___39599 = cljs.core.chunk_first(seq__39584_39598__$1);{
var G__39600 = cljs.core.chunk_rest(seq__39584_39598__$1);
var G__39601 = c__4189__auto___39599;
var G__39602 = cljs.core.count(c__4189__auto___39599);
var G__39603 = 0;
seq__39584_39588 = G__39600;
chunk__39585_39589 = G__39601;
count__39586_39590 = G__39602;
i__39587_39591 = G__39603;
continue;
}
} else
{var n_39604 = cljs.core.first(seq__39584_39598__$1);goog.style.setStyle(n_39604,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39605 = cljs.core.next(seq__39584_39598__$1);
var G__39606 = null;
var G__39607 = 0;
var G__39608 = 0;
seq__39584_39588 = G__39605;
chunk__39585_39589 = G__39606;
count__39586_39590 = G__39607;
i__39587_39591 = G__39608;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39609){
var content = cljs.core.first(arglist__39609);
arglist__39609 = cljs.core.next(arglist__39609);
var name = cljs.core.first(arglist__39609);
var value = cljs.core.rest(arglist__39609);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39614_39618 = cljs.core.seq(domina.nodes(content));var chunk__39615_39619 = null;var count__39616_39620 = 0;var i__39617_39621 = 0;while(true){
if((i__39617_39621 < count__39616_39620))
{var n_39622 = chunk__39615_39619.cljs$core$IIndexed$_nth$arity$2(null,i__39617_39621);n_39622.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39623 = seq__39614_39618;
var G__39624 = chunk__39615_39619;
var G__39625 = count__39616_39620;
var G__39626 = (i__39617_39621 + 1);
seq__39614_39618 = G__39623;
chunk__39615_39619 = G__39624;
count__39616_39620 = G__39625;
i__39617_39621 = G__39626;
continue;
}
} else
{var temp__4092__auto___39627 = cljs.core.seq(seq__39614_39618);if(temp__4092__auto___39627)
{var seq__39614_39628__$1 = temp__4092__auto___39627;if(cljs.core.chunked_seq_QMARK_(seq__39614_39628__$1))
{var c__4189__auto___39629 = cljs.core.chunk_first(seq__39614_39628__$1);{
var G__39630 = cljs.core.chunk_rest(seq__39614_39628__$1);
var G__39631 = c__4189__auto___39629;
var G__39632 = cljs.core.count(c__4189__auto___39629);
var G__39633 = 0;
seq__39614_39618 = G__39630;
chunk__39615_39619 = G__39631;
count__39616_39620 = G__39632;
i__39617_39621 = G__39633;
continue;
}
} else
{var n_39634 = cljs.core.first(seq__39614_39628__$1);n_39634.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39635 = cljs.core.next(seq__39614_39628__$1);
var G__39636 = null;
var G__39637 = 0;
var G__39638 = 0;
seq__39614_39618 = G__39635;
chunk__39615_39619 = G__39636;
count__39616_39620 = G__39637;
i__39617_39621 = G__39638;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39639){
var content = cljs.core.first(arglist__39639);
arglist__39639 = cljs.core.next(arglist__39639);
var name = cljs.core.first(arglist__39639);
var value = cljs.core.rest(arglist__39639);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39644_39648 = cljs.core.seq(domina.nodes(content));var chunk__39645_39649 = null;var count__39646_39650 = 0;var i__39647_39651 = 0;while(true){
if((i__39647_39651 < count__39646_39650))
{var n_39652 = chunk__39645_39649.cljs$core$IIndexed$_nth$arity$2(null,i__39647_39651);n_39652.removeAttribute(cljs.core.name(name));
{
var G__39653 = seq__39644_39648;
var G__39654 = chunk__39645_39649;
var G__39655 = count__39646_39650;
var G__39656 = (i__39647_39651 + 1);
seq__39644_39648 = G__39653;
chunk__39645_39649 = G__39654;
count__39646_39650 = G__39655;
i__39647_39651 = G__39656;
continue;
}
} else
{var temp__4092__auto___39657 = cljs.core.seq(seq__39644_39648);if(temp__4092__auto___39657)
{var seq__39644_39658__$1 = temp__4092__auto___39657;if(cljs.core.chunked_seq_QMARK_(seq__39644_39658__$1))
{var c__4189__auto___39659 = cljs.core.chunk_first(seq__39644_39658__$1);{
var G__39660 = cljs.core.chunk_rest(seq__39644_39658__$1);
var G__39661 = c__4189__auto___39659;
var G__39662 = cljs.core.count(c__4189__auto___39659);
var G__39663 = 0;
seq__39644_39648 = G__39660;
chunk__39645_39649 = G__39661;
count__39646_39650 = G__39662;
i__39647_39651 = G__39663;
continue;
}
} else
{var n_39664 = cljs.core.first(seq__39644_39658__$1);n_39664.removeAttribute(cljs.core.name(name));
{
var G__39665 = cljs.core.next(seq__39644_39658__$1);
var G__39666 = null;
var G__39667 = 0;
var G__39668 = 0;
seq__39644_39648 = G__39665;
chunk__39645_39649 = G__39666;
count__39646_39650 = G__39667;
i__39647_39651 = G__39668;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39670 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39670,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
{if(cljs.core.constant$keyword$540)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39671_SHARP_){var attr = attrs__$1.item(p1__39671_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39678_39684 = cljs.core.seq(styles);var chunk__39679_39685 = null;var count__39680_39686 = 0;var i__39681_39687 = 0;while(true){
if((i__39681_39687 < count__39680_39686))
{var vec__39682_39688 = chunk__39679_39685.cljs$core$IIndexed$_nth$arity$2(null,i__39681_39687);var name_39689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682_39688,0,null);var value_39690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39682_39688,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39689,cljs.core.array_seq([value_39690], 0));
{
var G__39691 = seq__39678_39684;
var G__39692 = chunk__39679_39685;
var G__39693 = count__39680_39686;
var G__39694 = (i__39681_39687 + 1);
seq__39678_39684 = G__39691;
chunk__39679_39685 = G__39692;
count__39680_39686 = G__39693;
i__39681_39687 = G__39694;
continue;
}
} else
{var temp__4092__auto___39695 = cljs.core.seq(seq__39678_39684);if(temp__4092__auto___39695)
{var seq__39678_39696__$1 = temp__4092__auto___39695;if(cljs.core.chunked_seq_QMARK_(seq__39678_39696__$1))
{var c__4189__auto___39697 = cljs.core.chunk_first(seq__39678_39696__$1);{
var G__39698 = cljs.core.chunk_rest(seq__39678_39696__$1);
var G__39699 = c__4189__auto___39697;
var G__39700 = cljs.core.count(c__4189__auto___39697);
var G__39701 = 0;
seq__39678_39684 = G__39698;
chunk__39679_39685 = G__39699;
count__39680_39686 = G__39700;
i__39681_39687 = G__39701;
continue;
}
} else
{var vec__39683_39702 = cljs.core.first(seq__39678_39696__$1);var name_39703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39683_39702,0,null);var value_39704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39683_39702,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39703,cljs.core.array_seq([value_39704], 0));
{
var G__39705 = cljs.core.next(seq__39678_39696__$1);
var G__39706 = null;
var G__39707 = 0;
var G__39708 = 0;
seq__39678_39684 = G__39705;
chunk__39679_39685 = G__39706;
count__39680_39686 = G__39707;
i__39681_39687 = G__39708;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39715_39721 = cljs.core.seq(attrs);var chunk__39716_39722 = null;var count__39717_39723 = 0;var i__39718_39724 = 0;while(true){
if((i__39718_39724 < count__39717_39723))
{var vec__39719_39725 = chunk__39716_39722.cljs$core$IIndexed$_nth$arity$2(null,i__39718_39724);var name_39726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39719_39725,0,null);var value_39727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39719_39725,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39726,cljs.core.array_seq([value_39727], 0));
{
var G__39728 = seq__39715_39721;
var G__39729 = chunk__39716_39722;
var G__39730 = count__39717_39723;
var G__39731 = (i__39718_39724 + 1);
seq__39715_39721 = G__39728;
chunk__39716_39722 = G__39729;
count__39717_39723 = G__39730;
i__39718_39724 = G__39731;
continue;
}
} else
{var temp__4092__auto___39732 = cljs.core.seq(seq__39715_39721);if(temp__4092__auto___39732)
{var seq__39715_39733__$1 = temp__4092__auto___39732;if(cljs.core.chunked_seq_QMARK_(seq__39715_39733__$1))
{var c__4189__auto___39734 = cljs.core.chunk_first(seq__39715_39733__$1);{
var G__39735 = cljs.core.chunk_rest(seq__39715_39733__$1);
var G__39736 = c__4189__auto___39734;
var G__39737 = cljs.core.count(c__4189__auto___39734);
var G__39738 = 0;
seq__39715_39721 = G__39735;
chunk__39716_39722 = G__39736;
count__39717_39723 = G__39737;
i__39718_39724 = G__39738;
continue;
}
} else
{var vec__39720_39739 = cljs.core.first(seq__39715_39733__$1);var name_39740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720_39739,0,null);var value_39741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720_39739,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39740,cljs.core.array_seq([value_39741], 0));
{
var G__39742 = cljs.core.next(seq__39715_39733__$1);
var G__39743 = null;
var G__39744 = 0;
var G__39745 = 0;
seq__39715_39721 = G__39742;
chunk__39716_39722 = G__39743;
count__39717_39723 = G__39744;
i__39718_39724 = G__39745;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39750_39754 = cljs.core.seq(domina.nodes(content));var chunk__39751_39755 = null;var count__39752_39756 = 0;var i__39753_39757 = 0;while(true){
if((i__39753_39757 < count__39752_39756))
{var node_39758 = chunk__39751_39755.cljs$core$IIndexed$_nth$arity$2(null,i__39753_39757);goog.dom.classes.add(node_39758,class$);
{
var G__39759 = seq__39750_39754;
var G__39760 = chunk__39751_39755;
var G__39761 = count__39752_39756;
var G__39762 = (i__39753_39757 + 1);
seq__39750_39754 = G__39759;
chunk__39751_39755 = G__39760;
count__39752_39756 = G__39761;
i__39753_39757 = G__39762;
continue;
}
} else
{var temp__4092__auto___39763 = cljs.core.seq(seq__39750_39754);if(temp__4092__auto___39763)
{var seq__39750_39764__$1 = temp__4092__auto___39763;if(cljs.core.chunked_seq_QMARK_(seq__39750_39764__$1))
{var c__4189__auto___39765 = cljs.core.chunk_first(seq__39750_39764__$1);{
var G__39766 = cljs.core.chunk_rest(seq__39750_39764__$1);
var G__39767 = c__4189__auto___39765;
var G__39768 = cljs.core.count(c__4189__auto___39765);
var G__39769 = 0;
seq__39750_39754 = G__39766;
chunk__39751_39755 = G__39767;
count__39752_39756 = G__39768;
i__39753_39757 = G__39769;
continue;
}
} else
{var node_39770 = cljs.core.first(seq__39750_39764__$1);goog.dom.classes.add(node_39770,class$);
{
var G__39771 = cljs.core.next(seq__39750_39764__$1);
var G__39772 = null;
var G__39773 = 0;
var G__39774 = 0;
seq__39750_39754 = G__39771;
chunk__39751_39755 = G__39772;
count__39752_39756 = G__39773;
i__39753_39757 = G__39774;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39779_39783 = cljs.core.seq(domina.nodes(content));var chunk__39780_39784 = null;var count__39781_39785 = 0;var i__39782_39786 = 0;while(true){
if((i__39782_39786 < count__39781_39785))
{var node_39787 = chunk__39780_39784.cljs$core$IIndexed$_nth$arity$2(null,i__39782_39786);goog.dom.classes.remove(node_39787,class$);
{
var G__39788 = seq__39779_39783;
var G__39789 = chunk__39780_39784;
var G__39790 = count__39781_39785;
var G__39791 = (i__39782_39786 + 1);
seq__39779_39783 = G__39788;
chunk__39780_39784 = G__39789;
count__39781_39785 = G__39790;
i__39782_39786 = G__39791;
continue;
}
} else
{var temp__4092__auto___39792 = cljs.core.seq(seq__39779_39783);if(temp__4092__auto___39792)
{var seq__39779_39793__$1 = temp__4092__auto___39792;if(cljs.core.chunked_seq_QMARK_(seq__39779_39793__$1))
{var c__4189__auto___39794 = cljs.core.chunk_first(seq__39779_39793__$1);{
var G__39795 = cljs.core.chunk_rest(seq__39779_39793__$1);
var G__39796 = c__4189__auto___39794;
var G__39797 = cljs.core.count(c__4189__auto___39794);
var G__39798 = 0;
seq__39779_39783 = G__39795;
chunk__39780_39784 = G__39796;
count__39781_39785 = G__39797;
i__39782_39786 = G__39798;
continue;
}
} else
{var node_39799 = cljs.core.first(seq__39779_39793__$1);goog.dom.classes.remove(node_39799,class$);
{
var G__39800 = cljs.core.next(seq__39779_39793__$1);
var G__39801 = null;
var G__39802 = 0;
var G__39803 = 0;
seq__39779_39783 = G__39800;
chunk__39780_39784 = G__39801;
count__39781_39785 = G__39802;
i__39782_39786 = G__39803;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39808_39812 = cljs.core.seq(domina.nodes(content));var chunk__39809_39813 = null;var count__39810_39814 = 0;var i__39811_39815 = 0;while(true){
if((i__39811_39815 < count__39810_39814))
{var node_39816 = chunk__39809_39813.cljs$core$IIndexed$_nth$arity$2(null,i__39811_39815);goog.dom.classes.toggle(node_39816,class$);
{
var G__39817 = seq__39808_39812;
var G__39818 = chunk__39809_39813;
var G__39819 = count__39810_39814;
var G__39820 = (i__39811_39815 + 1);
seq__39808_39812 = G__39817;
chunk__39809_39813 = G__39818;
count__39810_39814 = G__39819;
i__39811_39815 = G__39820;
continue;
}
} else
{var temp__4092__auto___39821 = cljs.core.seq(seq__39808_39812);if(temp__4092__auto___39821)
{var seq__39808_39822__$1 = temp__4092__auto___39821;if(cljs.core.chunked_seq_QMARK_(seq__39808_39822__$1))
{var c__4189__auto___39823 = cljs.core.chunk_first(seq__39808_39822__$1);{
var G__39824 = cljs.core.chunk_rest(seq__39808_39822__$1);
var G__39825 = c__4189__auto___39823;
var G__39826 = cljs.core.count(c__4189__auto___39823);
var G__39827 = 0;
seq__39808_39812 = G__39824;
chunk__39809_39813 = G__39825;
count__39810_39814 = G__39826;
i__39811_39815 = G__39827;
continue;
}
} else
{var node_39828 = cljs.core.first(seq__39808_39822__$1);goog.dom.classes.toggle(node_39828,class$);
{
var G__39829 = cljs.core.next(seq__39808_39822__$1);
var G__39830 = null;
var G__39831 = 0;
var G__39832 = 0;
seq__39808_39812 = G__39829;
chunk__39809_39813 = G__39830;
count__39810_39814 = G__39831;
i__39811_39815 = G__39832;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39841__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39837_39842 = cljs.core.seq(domina.nodes(content));var chunk__39838_39843 = null;var count__39839_39844 = 0;var i__39840_39845 = 0;while(true){
if((i__39840_39845 < count__39839_39844))
{var node_39846 = chunk__39838_39843.cljs$core$IIndexed$_nth$arity$2(null,i__39840_39845);goog.dom.classes.set(node_39846,classes_39841__$1);
{
var G__39847 = seq__39837_39842;
var G__39848 = chunk__39838_39843;
var G__39849 = count__39839_39844;
var G__39850 = (i__39840_39845 + 1);
seq__39837_39842 = G__39847;
chunk__39838_39843 = G__39848;
count__39839_39844 = G__39849;
i__39840_39845 = G__39850;
continue;
}
} else
{var temp__4092__auto___39851 = cljs.core.seq(seq__39837_39842);if(temp__4092__auto___39851)
{var seq__39837_39852__$1 = temp__4092__auto___39851;if(cljs.core.chunked_seq_QMARK_(seq__39837_39852__$1))
{var c__4189__auto___39853 = cljs.core.chunk_first(seq__39837_39852__$1);{
var G__39854 = cljs.core.chunk_rest(seq__39837_39852__$1);
var G__39855 = c__4189__auto___39853;
var G__39856 = cljs.core.count(c__4189__auto___39853);
var G__39857 = 0;
seq__39837_39842 = G__39854;
chunk__39838_39843 = G__39855;
count__39839_39844 = G__39856;
i__39840_39845 = G__39857;
continue;
}
} else
{var node_39858 = cljs.core.first(seq__39837_39852__$1);goog.dom.classes.set(node_39858,classes_39841__$1);
{
var G__39859 = cljs.core.next(seq__39837_39852__$1);
var G__39860 = null;
var G__39861 = 0;
var G__39862 = 0;
seq__39837_39842 = G__39859;
chunk__39838_39843 = G__39860;
count__39839_39844 = G__39861;
i__39840_39845 = G__39862;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39867_39871 = cljs.core.seq(domina.nodes(content));var chunk__39868_39872 = null;var count__39869_39873 = 0;var i__39870_39874 = 0;while(true){
if((i__39870_39874 < count__39869_39873))
{var node_39875 = chunk__39868_39872.cljs$core$IIndexed$_nth$arity$2(null,i__39870_39874);goog.dom.setTextContent(node_39875,value);
{
var G__39876 = seq__39867_39871;
var G__39877 = chunk__39868_39872;
var G__39878 = count__39869_39873;
var G__39879 = (i__39870_39874 + 1);
seq__39867_39871 = G__39876;
chunk__39868_39872 = G__39877;
count__39869_39873 = G__39878;
i__39870_39874 = G__39879;
continue;
}
} else
{var temp__4092__auto___39880 = cljs.core.seq(seq__39867_39871);if(temp__4092__auto___39880)
{var seq__39867_39881__$1 = temp__4092__auto___39880;if(cljs.core.chunked_seq_QMARK_(seq__39867_39881__$1))
{var c__4189__auto___39882 = cljs.core.chunk_first(seq__39867_39881__$1);{
var G__39883 = cljs.core.chunk_rest(seq__39867_39881__$1);
var G__39884 = c__4189__auto___39882;
var G__39885 = cljs.core.count(c__4189__auto___39882);
var G__39886 = 0;
seq__39867_39871 = G__39883;
chunk__39868_39872 = G__39884;
count__39869_39873 = G__39885;
i__39870_39874 = G__39886;
continue;
}
} else
{var node_39887 = cljs.core.first(seq__39867_39881__$1);goog.dom.setTextContent(node_39887,value);
{
var G__39888 = cljs.core.next(seq__39867_39881__$1);
var G__39889 = null;
var G__39890 = 0;
var G__39891 = 0;
seq__39867_39871 = G__39888;
chunk__39868_39872 = G__39889;
count__39869_39873 = G__39890;
i__39870_39874 = G__39891;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39896_39900 = cljs.core.seq(domina.nodes(content));var chunk__39897_39901 = null;var count__39898_39902 = 0;var i__39899_39903 = 0;while(true){
if((i__39899_39903 < count__39898_39902))
{var node_39904 = chunk__39897_39901.cljs$core$IIndexed$_nth$arity$2(null,i__39899_39903);goog.dom.forms.setValue(node_39904,value);
{
var G__39905 = seq__39896_39900;
var G__39906 = chunk__39897_39901;
var G__39907 = count__39898_39902;
var G__39908 = (i__39899_39903 + 1);
seq__39896_39900 = G__39905;
chunk__39897_39901 = G__39906;
count__39898_39902 = G__39907;
i__39899_39903 = G__39908;
continue;
}
} else
{var temp__4092__auto___39909 = cljs.core.seq(seq__39896_39900);if(temp__4092__auto___39909)
{var seq__39896_39910__$1 = temp__4092__auto___39909;if(cljs.core.chunked_seq_QMARK_(seq__39896_39910__$1))
{var c__4189__auto___39911 = cljs.core.chunk_first(seq__39896_39910__$1);{
var G__39912 = cljs.core.chunk_rest(seq__39896_39910__$1);
var G__39913 = c__4189__auto___39911;
var G__39914 = cljs.core.count(c__4189__auto___39911);
var G__39915 = 0;
seq__39896_39900 = G__39912;
chunk__39897_39901 = G__39913;
count__39898_39902 = G__39914;
i__39899_39903 = G__39915;
continue;
}
} else
{var node_39916 = cljs.core.first(seq__39896_39910__$1);goog.dom.forms.setValue(node_39916,value);
{
var G__39917 = cljs.core.next(seq__39896_39910__$1);
var G__39918 = null;
var G__39919 = 0;
var G__39920 = 0;
seq__39896_39900 = G__39917;
chunk__39897_39901 = G__39918;
count__39898_39902 = G__39919;
i__39899_39903 = G__39920;
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
{var value_39931 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39927_39932 = cljs.core.seq(domina.nodes(content));var chunk__39928_39933 = null;var count__39929_39934 = 0;var i__39930_39935 = 0;while(true){
if((i__39930_39935 < count__39929_39934))
{var node_39936 = chunk__39928_39933.cljs$core$IIndexed$_nth$arity$2(null,i__39930_39935);node_39936.innerHTML = value_39931;
{
var G__39937 = seq__39927_39932;
var G__39938 = chunk__39928_39933;
var G__39939 = count__39929_39934;
var G__39940 = (i__39930_39935 + 1);
seq__39927_39932 = G__39937;
chunk__39928_39933 = G__39938;
count__39929_39934 = G__39939;
i__39930_39935 = G__39940;
continue;
}
} else
{var temp__4092__auto___39941 = cljs.core.seq(seq__39927_39932);if(temp__4092__auto___39941)
{var seq__39927_39942__$1 = temp__4092__auto___39941;if(cljs.core.chunked_seq_QMARK_(seq__39927_39942__$1))
{var c__4189__auto___39943 = cljs.core.chunk_first(seq__39927_39942__$1);{
var G__39944 = cljs.core.chunk_rest(seq__39927_39942__$1);
var G__39945 = c__4189__auto___39943;
var G__39946 = cljs.core.count(c__4189__auto___39943);
var G__39947 = 0;
seq__39927_39932 = G__39944;
chunk__39928_39933 = G__39945;
count__39929_39934 = G__39946;
i__39930_39935 = G__39947;
continue;
}
} else
{var node_39948 = cljs.core.first(seq__39927_39942__$1);node_39948.innerHTML = value_39931;
{
var G__39949 = cljs.core.next(seq__39927_39942__$1);
var G__39950 = null;
var G__39951 = 0;
var G__39952 = 0;
seq__39927_39932 = G__39949;
chunk__39928_39933 = G__39950;
count__39929_39934 = G__39951;
i__39930_39935 = G__39952;
continue;
}
}
} else
{}
}
break;
}
}catch (e39926){if((e39926 instanceof Error))
{var e_39953 = e39926;domina.replace_children_BANG_(content,value_39931);
} else
{if(cljs.core.constant$keyword$540)
{throw e39926;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39960_39964 = cljs.core.seq(children);var chunk__39961_39965 = null;var count__39962_39966 = 0;var i__39963_39967 = 0;while(true){
if((i__39963_39967 < count__39962_39966))
{var child_39968 = chunk__39961_39965.cljs$core$IIndexed$_nth$arity$2(null,i__39963_39967);frag.appendChild(child_39968);
{
var G__39969 = seq__39960_39964;
var G__39970 = chunk__39961_39965;
var G__39971 = count__39962_39966;
var G__39972 = (i__39963_39967 + 1);
seq__39960_39964 = G__39969;
chunk__39961_39965 = G__39970;
count__39962_39966 = G__39971;
i__39963_39967 = G__39972;
continue;
}
} else
{var temp__4092__auto___39973 = cljs.core.seq(seq__39960_39964);if(temp__4092__auto___39973)
{var seq__39960_39974__$1 = temp__4092__auto___39973;if(cljs.core.chunked_seq_QMARK_(seq__39960_39974__$1))
{var c__4189__auto___39975 = cljs.core.chunk_first(seq__39960_39974__$1);{
var G__39976 = cljs.core.chunk_rest(seq__39960_39974__$1);
var G__39977 = c__4189__auto___39975;
var G__39978 = cljs.core.count(c__4189__auto___39975);
var G__39979 = 0;
seq__39960_39964 = G__39976;
chunk__39961_39965 = G__39977;
count__39962_39966 = G__39978;
i__39963_39967 = G__39979;
continue;
}
} else
{var child_39980 = cljs.core.first(seq__39960_39974__$1);frag.appendChild(child_39980);
{
var G__39981 = cljs.core.next(seq__39960_39974__$1);
var G__39982 = null;
var G__39983 = 0;
var G__39984 = 0;
seq__39960_39964 = G__39981;
chunk__39961_39965 = G__39982;
count__39962_39966 = G__39983;
i__39963_39967 = G__39984;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39954_SHARP_,p2__39955_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39954_SHARP_,p2__39955_SHARP_) : f.call(null,p1__39954_SHARP_,p2__39955_SHARP_));
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
{if((function (){var G__39986 = list_thing;if(G__39986)
{var bit__4091__auto__ = (G__39986.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39986.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39986);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39986);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$541)
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
{if((function (){var G__39987 = content;if(G__39987)
{var bit__4091__auto__ = (G__39987.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39987.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39987.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39987);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39987);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$541)
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
{if((function (){var G__39988 = content;if(G__39988)
{var bit__4091__auto__ = (G__39988.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39988.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39988.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39988);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39988);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$541)
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
