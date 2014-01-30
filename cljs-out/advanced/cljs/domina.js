// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_26515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$190,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26516,table_section_wrapper_26516,opt_wrapper_26515,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26517,table_section_wrapper_26516,cell_wrapper_26517,opt_wrapper_26515,table_section_wrapper_26516,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26516]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26522 = cljs.core.seq(tbody);var chunk__26523 = null;var count__26524 = 0;var i__26525 = 0;while(true){
if((i__26525 < count__26524))
{var child = chunk__26523.cljs$core$IIndexed$_nth$arity$2(null,i__26525);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26526 = seq__26522;
var G__26527 = chunk__26523;
var G__26528 = count__26524;
var G__26529 = (i__26525 + 1);
seq__26522 = G__26526;
chunk__26523 = G__26527;
count__26524 = G__26528;
i__26525 = G__26529;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26522);if(temp__4092__auto__)
{var seq__26522__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26522__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26522__$1);{
var G__26530 = cljs.core.chunk_rest(seq__26522__$1);
var G__26531 = c__4148__auto__;
var G__26532 = cljs.core.count(c__4148__auto__);
var G__26533 = 0;
seq__26522 = G__26530;
chunk__26523 = G__26531;
count__26524 = G__26532;
i__26525 = G__26533;
continue;
}
} else
{var child = cljs.core.first(seq__26522__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26534 = cljs.core.next(seq__26522__$1);
var G__26535 = null;
var G__26536 = 0;
var G__26537 = 0;
seq__26522 = G__26534;
chunk__26523 = G__26535;
count__26524 = G__26536;
i__26525 = G__26537;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26539 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26540 = wrapper.lastChild;
var G__26541 = (level - 1);
wrapper = G__26540;
level = G__26541;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj26543 = {};return obj26543;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__26544){
var mesg = cljs.core.seq(arglist__26544);
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
log.cljs$lang$applyTo = (function (arglist__26545){
var mesg = cljs.core.seq(arglist__26545);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26546){
var contents = cljs.core.seq(arglist__26546);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26547_SHARP_){return p1__26547_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26548_SHARP_,p2__26549_SHARP_){return goog.dom.insertChildAt(p1__26548_SHARP_,p2__26549_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26548_SHARP_,p2__26549_SHARP_){return goog.dom.insertChildAt(p1__26548_SHARP_,p2__26549_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26551_SHARP_,p2__26550_SHARP_){return goog.dom.insertSiblingBefore(p2__26550_SHARP_,p1__26551_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26551_SHARP_,p2__26550_SHARP_){return goog.dom.insertSiblingBefore(p2__26550_SHARP_,p1__26551_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26553_SHARP_,p2__26552_SHARP_){return goog.dom.insertSiblingAfter(p2__26552_SHARP_,p1__26553_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26553_SHARP_,p2__26552_SHARP_){return goog.dom.insertSiblingAfter(p2__26552_SHARP_,p1__26553_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26555_SHARP_,p2__26554_SHARP_){return goog.dom.replaceNode(p2__26554_SHARP_,p1__26555_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26555_SHARP_,p2__26554_SHARP_){return goog.dom.replaceNode(p2__26554_SHARP_,p1__26555_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26560_26564 = cljs.core.seq(domina.nodes(content));var chunk__26561_26565 = null;var count__26562_26566 = 0;var i__26563_26567 = 0;while(true){
if((i__26563_26567 < count__26562_26566))
{var n_26568 = chunk__26561_26565.cljs$core$IIndexed$_nth$arity$2(null,i__26563_26567);goog.style.setStyle(n_26568,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26569 = seq__26560_26564;
var G__26570 = chunk__26561_26565;
var G__26571 = count__26562_26566;
var G__26572 = (i__26563_26567 + 1);
seq__26560_26564 = G__26569;
chunk__26561_26565 = G__26570;
count__26562_26566 = G__26571;
i__26563_26567 = G__26572;
continue;
}
} else
{var temp__4092__auto___26573 = cljs.core.seq(seq__26560_26564);if(temp__4092__auto___26573)
{var seq__26560_26574__$1 = temp__4092__auto___26573;if(cljs.core.chunked_seq_QMARK_(seq__26560_26574__$1))
{var c__4148__auto___26575 = cljs.core.chunk_first(seq__26560_26574__$1);{
var G__26576 = cljs.core.chunk_rest(seq__26560_26574__$1);
var G__26577 = c__4148__auto___26575;
var G__26578 = cljs.core.count(c__4148__auto___26575);
var G__26579 = 0;
seq__26560_26564 = G__26576;
chunk__26561_26565 = G__26577;
count__26562_26566 = G__26578;
i__26563_26567 = G__26579;
continue;
}
} else
{var n_26580 = cljs.core.first(seq__26560_26574__$1);goog.style.setStyle(n_26580,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26581 = cljs.core.next(seq__26560_26574__$1);
var G__26582 = null;
var G__26583 = 0;
var G__26584 = 0;
seq__26560_26564 = G__26581;
chunk__26561_26565 = G__26582;
count__26562_26566 = G__26583;
i__26563_26567 = G__26584;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26585){
var content = cljs.core.first(arglist__26585);
arglist__26585 = cljs.core.next(arglist__26585);
var name = cljs.core.first(arglist__26585);
var value = cljs.core.rest(arglist__26585);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26590_26594 = cljs.core.seq(domina.nodes(content));var chunk__26591_26595 = null;var count__26592_26596 = 0;var i__26593_26597 = 0;while(true){
if((i__26593_26597 < count__26592_26596))
{var n_26598 = chunk__26591_26595.cljs$core$IIndexed$_nth$arity$2(null,i__26593_26597);n_26598.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26599 = seq__26590_26594;
var G__26600 = chunk__26591_26595;
var G__26601 = count__26592_26596;
var G__26602 = (i__26593_26597 + 1);
seq__26590_26594 = G__26599;
chunk__26591_26595 = G__26600;
count__26592_26596 = G__26601;
i__26593_26597 = G__26602;
continue;
}
} else
{var temp__4092__auto___26603 = cljs.core.seq(seq__26590_26594);if(temp__4092__auto___26603)
{var seq__26590_26604__$1 = temp__4092__auto___26603;if(cljs.core.chunked_seq_QMARK_(seq__26590_26604__$1))
{var c__4148__auto___26605 = cljs.core.chunk_first(seq__26590_26604__$1);{
var G__26606 = cljs.core.chunk_rest(seq__26590_26604__$1);
var G__26607 = c__4148__auto___26605;
var G__26608 = cljs.core.count(c__4148__auto___26605);
var G__26609 = 0;
seq__26590_26594 = G__26606;
chunk__26591_26595 = G__26607;
count__26592_26596 = G__26608;
i__26593_26597 = G__26609;
continue;
}
} else
{var n_26610 = cljs.core.first(seq__26590_26604__$1);n_26610.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26611 = cljs.core.next(seq__26590_26604__$1);
var G__26612 = null;
var G__26613 = 0;
var G__26614 = 0;
seq__26590_26594 = G__26611;
chunk__26591_26595 = G__26612;
count__26592_26596 = G__26613;
i__26593_26597 = G__26614;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26615){
var content = cljs.core.first(arglist__26615);
arglist__26615 = cljs.core.next(arglist__26615);
var name = cljs.core.first(arglist__26615);
var value = cljs.core.rest(arglist__26615);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26620_26624 = cljs.core.seq(domina.nodes(content));var chunk__26621_26625 = null;var count__26622_26626 = 0;var i__26623_26627 = 0;while(true){
if((i__26623_26627 < count__26622_26626))
{var n_26628 = chunk__26621_26625.cljs$core$IIndexed$_nth$arity$2(null,i__26623_26627);n_26628.removeAttribute(cljs.core.name(name));
{
var G__26629 = seq__26620_26624;
var G__26630 = chunk__26621_26625;
var G__26631 = count__26622_26626;
var G__26632 = (i__26623_26627 + 1);
seq__26620_26624 = G__26629;
chunk__26621_26625 = G__26630;
count__26622_26626 = G__26631;
i__26623_26627 = G__26632;
continue;
}
} else
{var temp__4092__auto___26633 = cljs.core.seq(seq__26620_26624);if(temp__4092__auto___26633)
{var seq__26620_26634__$1 = temp__4092__auto___26633;if(cljs.core.chunked_seq_QMARK_(seq__26620_26634__$1))
{var c__4148__auto___26635 = cljs.core.chunk_first(seq__26620_26634__$1);{
var G__26636 = cljs.core.chunk_rest(seq__26620_26634__$1);
var G__26637 = c__4148__auto___26635;
var G__26638 = cljs.core.count(c__4148__auto___26635);
var G__26639 = 0;
seq__26620_26624 = G__26636;
chunk__26621_26625 = G__26637;
count__26622_26626 = G__26638;
i__26623_26627 = G__26639;
continue;
}
} else
{var n_26640 = cljs.core.first(seq__26620_26634__$1);n_26640.removeAttribute(cljs.core.name(name));
{
var G__26641 = cljs.core.next(seq__26620_26634__$1);
var G__26642 = null;
var G__26643 = 0;
var G__26644 = 0;
seq__26620_26624 = G__26641;
chunk__26621_26625 = G__26642;
count__26622_26626 = G__26643;
i__26623_26627 = G__26644;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26646 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$189)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26647_SHARP_){var attr = attrs__$1.item(p1__26647_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26654_26660 = cljs.core.seq(styles);var chunk__26655_26661 = null;var count__26656_26662 = 0;var i__26657_26663 = 0;while(true){
if((i__26657_26663 < count__26656_26662))
{var vec__26658_26664 = chunk__26655_26661.cljs$core$IIndexed$_nth$arity$2(null,i__26657_26663);var name_26665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26658_26664,0,null);var value_26666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26658_26664,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26665,cljs.core.array_seq([value_26666], 0));
{
var G__26667 = seq__26654_26660;
var G__26668 = chunk__26655_26661;
var G__26669 = count__26656_26662;
var G__26670 = (i__26657_26663 + 1);
seq__26654_26660 = G__26667;
chunk__26655_26661 = G__26668;
count__26656_26662 = G__26669;
i__26657_26663 = G__26670;
continue;
}
} else
{var temp__4092__auto___26671 = cljs.core.seq(seq__26654_26660);if(temp__4092__auto___26671)
{var seq__26654_26672__$1 = temp__4092__auto___26671;if(cljs.core.chunked_seq_QMARK_(seq__26654_26672__$1))
{var c__4148__auto___26673 = cljs.core.chunk_first(seq__26654_26672__$1);{
var G__26674 = cljs.core.chunk_rest(seq__26654_26672__$1);
var G__26675 = c__4148__auto___26673;
var G__26676 = cljs.core.count(c__4148__auto___26673);
var G__26677 = 0;
seq__26654_26660 = G__26674;
chunk__26655_26661 = G__26675;
count__26656_26662 = G__26676;
i__26657_26663 = G__26677;
continue;
}
} else
{var vec__26659_26678 = cljs.core.first(seq__26654_26672__$1);var name_26679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26659_26678,0,null);var value_26680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26659_26678,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26679,cljs.core.array_seq([value_26680], 0));
{
var G__26681 = cljs.core.next(seq__26654_26672__$1);
var G__26682 = null;
var G__26683 = 0;
var G__26684 = 0;
seq__26654_26660 = G__26681;
chunk__26655_26661 = G__26682;
count__26656_26662 = G__26683;
i__26657_26663 = G__26684;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26691_26697 = cljs.core.seq(attrs);var chunk__26692_26698 = null;var count__26693_26699 = 0;var i__26694_26700 = 0;while(true){
if((i__26694_26700 < count__26693_26699))
{var vec__26695_26701 = chunk__26692_26698.cljs$core$IIndexed$_nth$arity$2(null,i__26694_26700);var name_26702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695_26701,0,null);var value_26703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26695_26701,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26702,cljs.core.array_seq([value_26703], 0));
{
var G__26704 = seq__26691_26697;
var G__26705 = chunk__26692_26698;
var G__26706 = count__26693_26699;
var G__26707 = (i__26694_26700 + 1);
seq__26691_26697 = G__26704;
chunk__26692_26698 = G__26705;
count__26693_26699 = G__26706;
i__26694_26700 = G__26707;
continue;
}
} else
{var temp__4092__auto___26708 = cljs.core.seq(seq__26691_26697);if(temp__4092__auto___26708)
{var seq__26691_26709__$1 = temp__4092__auto___26708;if(cljs.core.chunked_seq_QMARK_(seq__26691_26709__$1))
{var c__4148__auto___26710 = cljs.core.chunk_first(seq__26691_26709__$1);{
var G__26711 = cljs.core.chunk_rest(seq__26691_26709__$1);
var G__26712 = c__4148__auto___26710;
var G__26713 = cljs.core.count(c__4148__auto___26710);
var G__26714 = 0;
seq__26691_26697 = G__26711;
chunk__26692_26698 = G__26712;
count__26693_26699 = G__26713;
i__26694_26700 = G__26714;
continue;
}
} else
{var vec__26696_26715 = cljs.core.first(seq__26691_26709__$1);var name_26716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_26715,0,null);var value_26717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_26715,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26716,cljs.core.array_seq([value_26717], 0));
{
var G__26718 = cljs.core.next(seq__26691_26709__$1);
var G__26719 = null;
var G__26720 = 0;
var G__26721 = 0;
seq__26691_26697 = G__26718;
chunk__26692_26698 = G__26719;
count__26693_26699 = G__26720;
i__26694_26700 = G__26721;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26726_26730 = cljs.core.seq(domina.nodes(content));var chunk__26727_26731 = null;var count__26728_26732 = 0;var i__26729_26733 = 0;while(true){
if((i__26729_26733 < count__26728_26732))
{var node_26734 = chunk__26727_26731.cljs$core$IIndexed$_nth$arity$2(null,i__26729_26733);goog.dom.classes.add(node_26734,class$);
{
var G__26735 = seq__26726_26730;
var G__26736 = chunk__26727_26731;
var G__26737 = count__26728_26732;
var G__26738 = (i__26729_26733 + 1);
seq__26726_26730 = G__26735;
chunk__26727_26731 = G__26736;
count__26728_26732 = G__26737;
i__26729_26733 = G__26738;
continue;
}
} else
{var temp__4092__auto___26739 = cljs.core.seq(seq__26726_26730);if(temp__4092__auto___26739)
{var seq__26726_26740__$1 = temp__4092__auto___26739;if(cljs.core.chunked_seq_QMARK_(seq__26726_26740__$1))
{var c__4148__auto___26741 = cljs.core.chunk_first(seq__26726_26740__$1);{
var G__26742 = cljs.core.chunk_rest(seq__26726_26740__$1);
var G__26743 = c__4148__auto___26741;
var G__26744 = cljs.core.count(c__4148__auto___26741);
var G__26745 = 0;
seq__26726_26730 = G__26742;
chunk__26727_26731 = G__26743;
count__26728_26732 = G__26744;
i__26729_26733 = G__26745;
continue;
}
} else
{var node_26746 = cljs.core.first(seq__26726_26740__$1);goog.dom.classes.add(node_26746,class$);
{
var G__26747 = cljs.core.next(seq__26726_26740__$1);
var G__26748 = null;
var G__26749 = 0;
var G__26750 = 0;
seq__26726_26730 = G__26747;
chunk__26727_26731 = G__26748;
count__26728_26732 = G__26749;
i__26729_26733 = G__26750;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26755_26759 = cljs.core.seq(domina.nodes(content));var chunk__26756_26760 = null;var count__26757_26761 = 0;var i__26758_26762 = 0;while(true){
if((i__26758_26762 < count__26757_26761))
{var node_26763 = chunk__26756_26760.cljs$core$IIndexed$_nth$arity$2(null,i__26758_26762);goog.dom.classes.remove(node_26763,class$);
{
var G__26764 = seq__26755_26759;
var G__26765 = chunk__26756_26760;
var G__26766 = count__26757_26761;
var G__26767 = (i__26758_26762 + 1);
seq__26755_26759 = G__26764;
chunk__26756_26760 = G__26765;
count__26757_26761 = G__26766;
i__26758_26762 = G__26767;
continue;
}
} else
{var temp__4092__auto___26768 = cljs.core.seq(seq__26755_26759);if(temp__4092__auto___26768)
{var seq__26755_26769__$1 = temp__4092__auto___26768;if(cljs.core.chunked_seq_QMARK_(seq__26755_26769__$1))
{var c__4148__auto___26770 = cljs.core.chunk_first(seq__26755_26769__$1);{
var G__26771 = cljs.core.chunk_rest(seq__26755_26769__$1);
var G__26772 = c__4148__auto___26770;
var G__26773 = cljs.core.count(c__4148__auto___26770);
var G__26774 = 0;
seq__26755_26759 = G__26771;
chunk__26756_26760 = G__26772;
count__26757_26761 = G__26773;
i__26758_26762 = G__26774;
continue;
}
} else
{var node_26775 = cljs.core.first(seq__26755_26769__$1);goog.dom.classes.remove(node_26775,class$);
{
var G__26776 = cljs.core.next(seq__26755_26769__$1);
var G__26777 = null;
var G__26778 = 0;
var G__26779 = 0;
seq__26755_26759 = G__26776;
chunk__26756_26760 = G__26777;
count__26757_26761 = G__26778;
i__26758_26762 = G__26779;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26784_26788 = cljs.core.seq(domina.nodes(content));var chunk__26785_26789 = null;var count__26786_26790 = 0;var i__26787_26791 = 0;while(true){
if((i__26787_26791 < count__26786_26790))
{var node_26792 = chunk__26785_26789.cljs$core$IIndexed$_nth$arity$2(null,i__26787_26791);goog.dom.classes.toggle(node_26792,class$);
{
var G__26793 = seq__26784_26788;
var G__26794 = chunk__26785_26789;
var G__26795 = count__26786_26790;
var G__26796 = (i__26787_26791 + 1);
seq__26784_26788 = G__26793;
chunk__26785_26789 = G__26794;
count__26786_26790 = G__26795;
i__26787_26791 = G__26796;
continue;
}
} else
{var temp__4092__auto___26797 = cljs.core.seq(seq__26784_26788);if(temp__4092__auto___26797)
{var seq__26784_26798__$1 = temp__4092__auto___26797;if(cljs.core.chunked_seq_QMARK_(seq__26784_26798__$1))
{var c__4148__auto___26799 = cljs.core.chunk_first(seq__26784_26798__$1);{
var G__26800 = cljs.core.chunk_rest(seq__26784_26798__$1);
var G__26801 = c__4148__auto___26799;
var G__26802 = cljs.core.count(c__4148__auto___26799);
var G__26803 = 0;
seq__26784_26788 = G__26800;
chunk__26785_26789 = G__26801;
count__26786_26790 = G__26802;
i__26787_26791 = G__26803;
continue;
}
} else
{var node_26804 = cljs.core.first(seq__26784_26798__$1);goog.dom.classes.toggle(node_26804,class$);
{
var G__26805 = cljs.core.next(seq__26784_26798__$1);
var G__26806 = null;
var G__26807 = 0;
var G__26808 = 0;
seq__26784_26788 = G__26805;
chunk__26785_26789 = G__26806;
count__26786_26790 = G__26807;
i__26787_26791 = G__26808;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26817__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26813_26818 = cljs.core.seq(domina.nodes(content));var chunk__26814_26819 = null;var count__26815_26820 = 0;var i__26816_26821 = 0;while(true){
if((i__26816_26821 < count__26815_26820))
{var node_26822 = chunk__26814_26819.cljs$core$IIndexed$_nth$arity$2(null,i__26816_26821);goog.dom.classes.set(node_26822,classes_26817__$1);
{
var G__26823 = seq__26813_26818;
var G__26824 = chunk__26814_26819;
var G__26825 = count__26815_26820;
var G__26826 = (i__26816_26821 + 1);
seq__26813_26818 = G__26823;
chunk__26814_26819 = G__26824;
count__26815_26820 = G__26825;
i__26816_26821 = G__26826;
continue;
}
} else
{var temp__4092__auto___26827 = cljs.core.seq(seq__26813_26818);if(temp__4092__auto___26827)
{var seq__26813_26828__$1 = temp__4092__auto___26827;if(cljs.core.chunked_seq_QMARK_(seq__26813_26828__$1))
{var c__4148__auto___26829 = cljs.core.chunk_first(seq__26813_26828__$1);{
var G__26830 = cljs.core.chunk_rest(seq__26813_26828__$1);
var G__26831 = c__4148__auto___26829;
var G__26832 = cljs.core.count(c__4148__auto___26829);
var G__26833 = 0;
seq__26813_26818 = G__26830;
chunk__26814_26819 = G__26831;
count__26815_26820 = G__26832;
i__26816_26821 = G__26833;
continue;
}
} else
{var node_26834 = cljs.core.first(seq__26813_26828__$1);goog.dom.classes.set(node_26834,classes_26817__$1);
{
var G__26835 = cljs.core.next(seq__26813_26828__$1);
var G__26836 = null;
var G__26837 = 0;
var G__26838 = 0;
seq__26813_26818 = G__26835;
chunk__26814_26819 = G__26836;
count__26815_26820 = G__26837;
i__26816_26821 = G__26838;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26843_26847 = cljs.core.seq(domina.nodes(content));var chunk__26844_26848 = null;var count__26845_26849 = 0;var i__26846_26850 = 0;while(true){
if((i__26846_26850 < count__26845_26849))
{var node_26851 = chunk__26844_26848.cljs$core$IIndexed$_nth$arity$2(null,i__26846_26850);goog.dom.setTextContent(node_26851,value);
{
var G__26852 = seq__26843_26847;
var G__26853 = chunk__26844_26848;
var G__26854 = count__26845_26849;
var G__26855 = (i__26846_26850 + 1);
seq__26843_26847 = G__26852;
chunk__26844_26848 = G__26853;
count__26845_26849 = G__26854;
i__26846_26850 = G__26855;
continue;
}
} else
{var temp__4092__auto___26856 = cljs.core.seq(seq__26843_26847);if(temp__4092__auto___26856)
{var seq__26843_26857__$1 = temp__4092__auto___26856;if(cljs.core.chunked_seq_QMARK_(seq__26843_26857__$1))
{var c__4148__auto___26858 = cljs.core.chunk_first(seq__26843_26857__$1);{
var G__26859 = cljs.core.chunk_rest(seq__26843_26857__$1);
var G__26860 = c__4148__auto___26858;
var G__26861 = cljs.core.count(c__4148__auto___26858);
var G__26862 = 0;
seq__26843_26847 = G__26859;
chunk__26844_26848 = G__26860;
count__26845_26849 = G__26861;
i__26846_26850 = G__26862;
continue;
}
} else
{var node_26863 = cljs.core.first(seq__26843_26857__$1);goog.dom.setTextContent(node_26863,value);
{
var G__26864 = cljs.core.next(seq__26843_26857__$1);
var G__26865 = null;
var G__26866 = 0;
var G__26867 = 0;
seq__26843_26847 = G__26864;
chunk__26844_26848 = G__26865;
count__26845_26849 = G__26866;
i__26846_26850 = G__26867;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26872_26876 = cljs.core.seq(domina.nodes(content));var chunk__26873_26877 = null;var count__26874_26878 = 0;var i__26875_26879 = 0;while(true){
if((i__26875_26879 < count__26874_26878))
{var node_26880 = chunk__26873_26877.cljs$core$IIndexed$_nth$arity$2(null,i__26875_26879);goog.dom.forms.setValue(node_26880,value);
{
var G__26881 = seq__26872_26876;
var G__26882 = chunk__26873_26877;
var G__26883 = count__26874_26878;
var G__26884 = (i__26875_26879 + 1);
seq__26872_26876 = G__26881;
chunk__26873_26877 = G__26882;
count__26874_26878 = G__26883;
i__26875_26879 = G__26884;
continue;
}
} else
{var temp__4092__auto___26885 = cljs.core.seq(seq__26872_26876);if(temp__4092__auto___26885)
{var seq__26872_26886__$1 = temp__4092__auto___26885;if(cljs.core.chunked_seq_QMARK_(seq__26872_26886__$1))
{var c__4148__auto___26887 = cljs.core.chunk_first(seq__26872_26886__$1);{
var G__26888 = cljs.core.chunk_rest(seq__26872_26886__$1);
var G__26889 = c__4148__auto___26887;
var G__26890 = cljs.core.count(c__4148__auto___26887);
var G__26891 = 0;
seq__26872_26876 = G__26888;
chunk__26873_26877 = G__26889;
count__26874_26878 = G__26890;
i__26875_26879 = G__26891;
continue;
}
} else
{var node_26892 = cljs.core.first(seq__26872_26886__$1);goog.dom.forms.setValue(node_26892,value);
{
var G__26893 = cljs.core.next(seq__26872_26886__$1);
var G__26894 = null;
var G__26895 = 0;
var G__26896 = 0;
seq__26872_26876 = G__26893;
chunk__26873_26877 = G__26894;
count__26874_26878 = G__26895;
i__26875_26879 = G__26896;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_26907 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26903_26908 = cljs.core.seq(domina.nodes(content));var chunk__26904_26909 = null;var count__26905_26910 = 0;var i__26906_26911 = 0;while(true){
if((i__26906_26911 < count__26905_26910))
{var node_26912 = chunk__26904_26909.cljs$core$IIndexed$_nth$arity$2(null,i__26906_26911);node_26912.innerHTML = value_26907;
{
var G__26913 = seq__26903_26908;
var G__26914 = chunk__26904_26909;
var G__26915 = count__26905_26910;
var G__26916 = (i__26906_26911 + 1);
seq__26903_26908 = G__26913;
chunk__26904_26909 = G__26914;
count__26905_26910 = G__26915;
i__26906_26911 = G__26916;
continue;
}
} else
{var temp__4092__auto___26917 = cljs.core.seq(seq__26903_26908);if(temp__4092__auto___26917)
{var seq__26903_26918__$1 = temp__4092__auto___26917;if(cljs.core.chunked_seq_QMARK_(seq__26903_26918__$1))
{var c__4148__auto___26919 = cljs.core.chunk_first(seq__26903_26918__$1);{
var G__26920 = cljs.core.chunk_rest(seq__26903_26918__$1);
var G__26921 = c__4148__auto___26919;
var G__26922 = cljs.core.count(c__4148__auto___26919);
var G__26923 = 0;
seq__26903_26908 = G__26920;
chunk__26904_26909 = G__26921;
count__26905_26910 = G__26922;
i__26906_26911 = G__26923;
continue;
}
} else
{var node_26924 = cljs.core.first(seq__26903_26918__$1);node_26924.innerHTML = value_26907;
{
var G__26925 = cljs.core.next(seq__26903_26918__$1);
var G__26926 = null;
var G__26927 = 0;
var G__26928 = 0;
seq__26903_26908 = G__26925;
chunk__26904_26909 = G__26926;
count__26905_26910 = G__26927;
i__26906_26911 = G__26928;
continue;
}
}
} else
{}
}
break;
}
}catch (e26902){if((e26902 instanceof Error))
{var e_26929 = e26902;domina.replace_children_BANG_(content,value_26907);
} else
{if(cljs.core.constant$keyword$189)
{throw e26902;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26936_26940 = cljs.core.seq(children);var chunk__26937_26941 = null;var count__26938_26942 = 0;var i__26939_26943 = 0;while(true){
if((i__26939_26943 < count__26938_26942))
{var child_26944 = chunk__26937_26941.cljs$core$IIndexed$_nth$arity$2(null,i__26939_26943);frag.appendChild(child_26944);
{
var G__26945 = seq__26936_26940;
var G__26946 = chunk__26937_26941;
var G__26947 = count__26938_26942;
var G__26948 = (i__26939_26943 + 1);
seq__26936_26940 = G__26945;
chunk__26937_26941 = G__26946;
count__26938_26942 = G__26947;
i__26939_26943 = G__26948;
continue;
}
} else
{var temp__4092__auto___26949 = cljs.core.seq(seq__26936_26940);if(temp__4092__auto___26949)
{var seq__26936_26950__$1 = temp__4092__auto___26949;if(cljs.core.chunked_seq_QMARK_(seq__26936_26950__$1))
{var c__4148__auto___26951 = cljs.core.chunk_first(seq__26936_26950__$1);{
var G__26952 = cljs.core.chunk_rest(seq__26936_26950__$1);
var G__26953 = c__4148__auto___26951;
var G__26954 = cljs.core.count(c__4148__auto___26951);
var G__26955 = 0;
seq__26936_26940 = G__26952;
chunk__26937_26941 = G__26953;
count__26938_26942 = G__26954;
i__26939_26943 = G__26955;
continue;
}
} else
{var child_26956 = cljs.core.first(seq__26936_26950__$1);frag.appendChild(child_26956);
{
var G__26957 = cljs.core.next(seq__26936_26950__$1);
var G__26958 = null;
var G__26959 = 0;
var G__26960 = 0;
seq__26936_26940 = G__26957;
chunk__26937_26941 = G__26958;
count__26938_26942 = G__26959;
i__26939_26943 = G__26960;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26930_SHARP_,p2__26931_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26930_SHARP_,p2__26931_SHARP_) : f.call(null,p1__26930_SHARP_,p2__26931_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__26962 = list_thing;if(G__26962)
{var bit__4050__auto__ = (G__26962.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26962.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26962);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$190)
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
{if((function (){var G__26963 = content;if(G__26963)
{var bit__4050__auto__ = (G__26963.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26963.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26963);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26963);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$190)
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
{if((function (){var G__26964 = content;if(G__26964)
{var bit__4050__auto__ = (G__26964.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26964.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26964);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$190)
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
