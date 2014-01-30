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
var opt_wrapper_26507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26508 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$190,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26508,table_section_wrapper_26508,opt_wrapper_26507,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26509,table_section_wrapper_26508,cell_wrapper_26509,opt_wrapper_26507,table_section_wrapper_26508,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26508]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26514 = cljs.core.seq(tbody);var chunk__26515 = null;var count__26516 = 0;var i__26517 = 0;while(true){
if((i__26517 < count__26516))
{var child = chunk__26515.cljs$core$IIndexed$_nth$arity$2(null,i__26517);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26518 = seq__26514;
var G__26519 = chunk__26515;
var G__26520 = count__26516;
var G__26521 = (i__26517 + 1);
seq__26514 = G__26518;
chunk__26515 = G__26519;
count__26516 = G__26520;
i__26517 = G__26521;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26514);if(temp__4092__auto__)
{var seq__26514__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26514__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26514__$1);{
var G__26522 = cljs.core.chunk_rest(seq__26514__$1);
var G__26523 = c__4148__auto__;
var G__26524 = cljs.core.count(c__4148__auto__);
var G__26525 = 0;
seq__26514 = G__26522;
chunk__26515 = G__26523;
count__26516 = G__26524;
i__26517 = G__26525;
continue;
}
} else
{var child = cljs.core.first(seq__26514__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26526 = cljs.core.next(seq__26514__$1);
var G__26527 = null;
var G__26528 = 0;
var G__26529 = 0;
seq__26514 = G__26526;
chunk__26515 = G__26527;
count__26516 = G__26528;
i__26517 = G__26529;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26531 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26532 = wrapper.lastChild;
var G__26533 = (level - 1);
wrapper = G__26532;
level = G__26533;
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
domina.DomContent = (function (){var obj26535 = {};return obj26535;
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
log_debug.cljs$lang$applyTo = (function (arglist__26536){
var mesg = cljs.core.seq(arglist__26536);
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
log.cljs$lang$applyTo = (function (arglist__26537){
var mesg = cljs.core.seq(arglist__26537);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26538){
var contents = cljs.core.seq(arglist__26538);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26539_SHARP_){return p1__26539_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26540_SHARP_,p2__26541_SHARP_){return goog.dom.insertChildAt(p1__26540_SHARP_,p2__26541_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26540_SHARP_,p2__26541_SHARP_){return goog.dom.insertChildAt(p1__26540_SHARP_,p2__26541_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26543_SHARP_,p2__26542_SHARP_){return goog.dom.insertSiblingBefore(p2__26542_SHARP_,p1__26543_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26543_SHARP_,p2__26542_SHARP_){return goog.dom.insertSiblingBefore(p2__26542_SHARP_,p1__26543_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26545_SHARP_,p2__26544_SHARP_){return goog.dom.insertSiblingAfter(p2__26544_SHARP_,p1__26545_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26545_SHARP_,p2__26544_SHARP_){return goog.dom.insertSiblingAfter(p2__26544_SHARP_,p1__26545_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26547_SHARP_,p2__26546_SHARP_){return goog.dom.replaceNode(p2__26546_SHARP_,p1__26547_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26547_SHARP_,p2__26546_SHARP_){return goog.dom.replaceNode(p2__26546_SHARP_,p1__26547_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26552_26556 = cljs.core.seq(domina.nodes(content));var chunk__26553_26557 = null;var count__26554_26558 = 0;var i__26555_26559 = 0;while(true){
if((i__26555_26559 < count__26554_26558))
{var n_26560 = chunk__26553_26557.cljs$core$IIndexed$_nth$arity$2(null,i__26555_26559);goog.style.setStyle(n_26560,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26561 = seq__26552_26556;
var G__26562 = chunk__26553_26557;
var G__26563 = count__26554_26558;
var G__26564 = (i__26555_26559 + 1);
seq__26552_26556 = G__26561;
chunk__26553_26557 = G__26562;
count__26554_26558 = G__26563;
i__26555_26559 = G__26564;
continue;
}
} else
{var temp__4092__auto___26565 = cljs.core.seq(seq__26552_26556);if(temp__4092__auto___26565)
{var seq__26552_26566__$1 = temp__4092__auto___26565;if(cljs.core.chunked_seq_QMARK_(seq__26552_26566__$1))
{var c__4148__auto___26567 = cljs.core.chunk_first(seq__26552_26566__$1);{
var G__26568 = cljs.core.chunk_rest(seq__26552_26566__$1);
var G__26569 = c__4148__auto___26567;
var G__26570 = cljs.core.count(c__4148__auto___26567);
var G__26571 = 0;
seq__26552_26556 = G__26568;
chunk__26553_26557 = G__26569;
count__26554_26558 = G__26570;
i__26555_26559 = G__26571;
continue;
}
} else
{var n_26572 = cljs.core.first(seq__26552_26566__$1);goog.style.setStyle(n_26572,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26573 = cljs.core.next(seq__26552_26566__$1);
var G__26574 = null;
var G__26575 = 0;
var G__26576 = 0;
seq__26552_26556 = G__26573;
chunk__26553_26557 = G__26574;
count__26554_26558 = G__26575;
i__26555_26559 = G__26576;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26577){
var content = cljs.core.first(arglist__26577);
arglist__26577 = cljs.core.next(arglist__26577);
var name = cljs.core.first(arglist__26577);
var value = cljs.core.rest(arglist__26577);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26582_26586 = cljs.core.seq(domina.nodes(content));var chunk__26583_26587 = null;var count__26584_26588 = 0;var i__26585_26589 = 0;while(true){
if((i__26585_26589 < count__26584_26588))
{var n_26590 = chunk__26583_26587.cljs$core$IIndexed$_nth$arity$2(null,i__26585_26589);n_26590.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26591 = seq__26582_26586;
var G__26592 = chunk__26583_26587;
var G__26593 = count__26584_26588;
var G__26594 = (i__26585_26589 + 1);
seq__26582_26586 = G__26591;
chunk__26583_26587 = G__26592;
count__26584_26588 = G__26593;
i__26585_26589 = G__26594;
continue;
}
} else
{var temp__4092__auto___26595 = cljs.core.seq(seq__26582_26586);if(temp__4092__auto___26595)
{var seq__26582_26596__$1 = temp__4092__auto___26595;if(cljs.core.chunked_seq_QMARK_(seq__26582_26596__$1))
{var c__4148__auto___26597 = cljs.core.chunk_first(seq__26582_26596__$1);{
var G__26598 = cljs.core.chunk_rest(seq__26582_26596__$1);
var G__26599 = c__4148__auto___26597;
var G__26600 = cljs.core.count(c__4148__auto___26597);
var G__26601 = 0;
seq__26582_26586 = G__26598;
chunk__26583_26587 = G__26599;
count__26584_26588 = G__26600;
i__26585_26589 = G__26601;
continue;
}
} else
{var n_26602 = cljs.core.first(seq__26582_26596__$1);n_26602.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26603 = cljs.core.next(seq__26582_26596__$1);
var G__26604 = null;
var G__26605 = 0;
var G__26606 = 0;
seq__26582_26586 = G__26603;
chunk__26583_26587 = G__26604;
count__26584_26588 = G__26605;
i__26585_26589 = G__26606;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26607){
var content = cljs.core.first(arglist__26607);
arglist__26607 = cljs.core.next(arglist__26607);
var name = cljs.core.first(arglist__26607);
var value = cljs.core.rest(arglist__26607);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26612_26616 = cljs.core.seq(domina.nodes(content));var chunk__26613_26617 = null;var count__26614_26618 = 0;var i__26615_26619 = 0;while(true){
if((i__26615_26619 < count__26614_26618))
{var n_26620 = chunk__26613_26617.cljs$core$IIndexed$_nth$arity$2(null,i__26615_26619);n_26620.removeAttribute(cljs.core.name(name));
{
var G__26621 = seq__26612_26616;
var G__26622 = chunk__26613_26617;
var G__26623 = count__26614_26618;
var G__26624 = (i__26615_26619 + 1);
seq__26612_26616 = G__26621;
chunk__26613_26617 = G__26622;
count__26614_26618 = G__26623;
i__26615_26619 = G__26624;
continue;
}
} else
{var temp__4092__auto___26625 = cljs.core.seq(seq__26612_26616);if(temp__4092__auto___26625)
{var seq__26612_26626__$1 = temp__4092__auto___26625;if(cljs.core.chunked_seq_QMARK_(seq__26612_26626__$1))
{var c__4148__auto___26627 = cljs.core.chunk_first(seq__26612_26626__$1);{
var G__26628 = cljs.core.chunk_rest(seq__26612_26626__$1);
var G__26629 = c__4148__auto___26627;
var G__26630 = cljs.core.count(c__4148__auto___26627);
var G__26631 = 0;
seq__26612_26616 = G__26628;
chunk__26613_26617 = G__26629;
count__26614_26618 = G__26630;
i__26615_26619 = G__26631;
continue;
}
} else
{var n_26632 = cljs.core.first(seq__26612_26626__$1);n_26632.removeAttribute(cljs.core.name(name));
{
var G__26633 = cljs.core.next(seq__26612_26626__$1);
var G__26634 = null;
var G__26635 = 0;
var G__26636 = 0;
seq__26612_26616 = G__26633;
chunk__26613_26617 = G__26634;
count__26614_26618 = G__26635;
i__26615_26619 = G__26636;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26638 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26639_SHARP_){var attr = attrs__$1.item(p1__26639_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26646_26652 = cljs.core.seq(styles);var chunk__26647_26653 = null;var count__26648_26654 = 0;var i__26649_26655 = 0;while(true){
if((i__26649_26655 < count__26648_26654))
{var vec__26650_26656 = chunk__26647_26653.cljs$core$IIndexed$_nth$arity$2(null,i__26649_26655);var name_26657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26650_26656,0,null);var value_26658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26650_26656,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26657,cljs.core.array_seq([value_26658], 0));
{
var G__26659 = seq__26646_26652;
var G__26660 = chunk__26647_26653;
var G__26661 = count__26648_26654;
var G__26662 = (i__26649_26655 + 1);
seq__26646_26652 = G__26659;
chunk__26647_26653 = G__26660;
count__26648_26654 = G__26661;
i__26649_26655 = G__26662;
continue;
}
} else
{var temp__4092__auto___26663 = cljs.core.seq(seq__26646_26652);if(temp__4092__auto___26663)
{var seq__26646_26664__$1 = temp__4092__auto___26663;if(cljs.core.chunked_seq_QMARK_(seq__26646_26664__$1))
{var c__4148__auto___26665 = cljs.core.chunk_first(seq__26646_26664__$1);{
var G__26666 = cljs.core.chunk_rest(seq__26646_26664__$1);
var G__26667 = c__4148__auto___26665;
var G__26668 = cljs.core.count(c__4148__auto___26665);
var G__26669 = 0;
seq__26646_26652 = G__26666;
chunk__26647_26653 = G__26667;
count__26648_26654 = G__26668;
i__26649_26655 = G__26669;
continue;
}
} else
{var vec__26651_26670 = cljs.core.first(seq__26646_26664__$1);var name_26671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651_26670,0,null);var value_26672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651_26670,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26671,cljs.core.array_seq([value_26672], 0));
{
var G__26673 = cljs.core.next(seq__26646_26664__$1);
var G__26674 = null;
var G__26675 = 0;
var G__26676 = 0;
seq__26646_26652 = G__26673;
chunk__26647_26653 = G__26674;
count__26648_26654 = G__26675;
i__26649_26655 = G__26676;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26683_26689 = cljs.core.seq(attrs);var chunk__26684_26690 = null;var count__26685_26691 = 0;var i__26686_26692 = 0;while(true){
if((i__26686_26692 < count__26685_26691))
{var vec__26687_26693 = chunk__26684_26690.cljs$core$IIndexed$_nth$arity$2(null,i__26686_26692);var name_26694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26687_26693,0,null);var value_26695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26687_26693,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26694,cljs.core.array_seq([value_26695], 0));
{
var G__26696 = seq__26683_26689;
var G__26697 = chunk__26684_26690;
var G__26698 = count__26685_26691;
var G__26699 = (i__26686_26692 + 1);
seq__26683_26689 = G__26696;
chunk__26684_26690 = G__26697;
count__26685_26691 = G__26698;
i__26686_26692 = G__26699;
continue;
}
} else
{var temp__4092__auto___26700 = cljs.core.seq(seq__26683_26689);if(temp__4092__auto___26700)
{var seq__26683_26701__$1 = temp__4092__auto___26700;if(cljs.core.chunked_seq_QMARK_(seq__26683_26701__$1))
{var c__4148__auto___26702 = cljs.core.chunk_first(seq__26683_26701__$1);{
var G__26703 = cljs.core.chunk_rest(seq__26683_26701__$1);
var G__26704 = c__4148__auto___26702;
var G__26705 = cljs.core.count(c__4148__auto___26702);
var G__26706 = 0;
seq__26683_26689 = G__26703;
chunk__26684_26690 = G__26704;
count__26685_26691 = G__26705;
i__26686_26692 = G__26706;
continue;
}
} else
{var vec__26688_26707 = cljs.core.first(seq__26683_26701__$1);var name_26708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688_26707,0,null);var value_26709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26688_26707,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26708,cljs.core.array_seq([value_26709], 0));
{
var G__26710 = cljs.core.next(seq__26683_26701__$1);
var G__26711 = null;
var G__26712 = 0;
var G__26713 = 0;
seq__26683_26689 = G__26710;
chunk__26684_26690 = G__26711;
count__26685_26691 = G__26712;
i__26686_26692 = G__26713;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26718_26722 = cljs.core.seq(domina.nodes(content));var chunk__26719_26723 = null;var count__26720_26724 = 0;var i__26721_26725 = 0;while(true){
if((i__26721_26725 < count__26720_26724))
{var node_26726 = chunk__26719_26723.cljs$core$IIndexed$_nth$arity$2(null,i__26721_26725);goog.dom.classes.add(node_26726,class$);
{
var G__26727 = seq__26718_26722;
var G__26728 = chunk__26719_26723;
var G__26729 = count__26720_26724;
var G__26730 = (i__26721_26725 + 1);
seq__26718_26722 = G__26727;
chunk__26719_26723 = G__26728;
count__26720_26724 = G__26729;
i__26721_26725 = G__26730;
continue;
}
} else
{var temp__4092__auto___26731 = cljs.core.seq(seq__26718_26722);if(temp__4092__auto___26731)
{var seq__26718_26732__$1 = temp__4092__auto___26731;if(cljs.core.chunked_seq_QMARK_(seq__26718_26732__$1))
{var c__4148__auto___26733 = cljs.core.chunk_first(seq__26718_26732__$1);{
var G__26734 = cljs.core.chunk_rest(seq__26718_26732__$1);
var G__26735 = c__4148__auto___26733;
var G__26736 = cljs.core.count(c__4148__auto___26733);
var G__26737 = 0;
seq__26718_26722 = G__26734;
chunk__26719_26723 = G__26735;
count__26720_26724 = G__26736;
i__26721_26725 = G__26737;
continue;
}
} else
{var node_26738 = cljs.core.first(seq__26718_26732__$1);goog.dom.classes.add(node_26738,class$);
{
var G__26739 = cljs.core.next(seq__26718_26732__$1);
var G__26740 = null;
var G__26741 = 0;
var G__26742 = 0;
seq__26718_26722 = G__26739;
chunk__26719_26723 = G__26740;
count__26720_26724 = G__26741;
i__26721_26725 = G__26742;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26747_26751 = cljs.core.seq(domina.nodes(content));var chunk__26748_26752 = null;var count__26749_26753 = 0;var i__26750_26754 = 0;while(true){
if((i__26750_26754 < count__26749_26753))
{var node_26755 = chunk__26748_26752.cljs$core$IIndexed$_nth$arity$2(null,i__26750_26754);goog.dom.classes.remove(node_26755,class$);
{
var G__26756 = seq__26747_26751;
var G__26757 = chunk__26748_26752;
var G__26758 = count__26749_26753;
var G__26759 = (i__26750_26754 + 1);
seq__26747_26751 = G__26756;
chunk__26748_26752 = G__26757;
count__26749_26753 = G__26758;
i__26750_26754 = G__26759;
continue;
}
} else
{var temp__4092__auto___26760 = cljs.core.seq(seq__26747_26751);if(temp__4092__auto___26760)
{var seq__26747_26761__$1 = temp__4092__auto___26760;if(cljs.core.chunked_seq_QMARK_(seq__26747_26761__$1))
{var c__4148__auto___26762 = cljs.core.chunk_first(seq__26747_26761__$1);{
var G__26763 = cljs.core.chunk_rest(seq__26747_26761__$1);
var G__26764 = c__4148__auto___26762;
var G__26765 = cljs.core.count(c__4148__auto___26762);
var G__26766 = 0;
seq__26747_26751 = G__26763;
chunk__26748_26752 = G__26764;
count__26749_26753 = G__26765;
i__26750_26754 = G__26766;
continue;
}
} else
{var node_26767 = cljs.core.first(seq__26747_26761__$1);goog.dom.classes.remove(node_26767,class$);
{
var G__26768 = cljs.core.next(seq__26747_26761__$1);
var G__26769 = null;
var G__26770 = 0;
var G__26771 = 0;
seq__26747_26751 = G__26768;
chunk__26748_26752 = G__26769;
count__26749_26753 = G__26770;
i__26750_26754 = G__26771;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26776_26780 = cljs.core.seq(domina.nodes(content));var chunk__26777_26781 = null;var count__26778_26782 = 0;var i__26779_26783 = 0;while(true){
if((i__26779_26783 < count__26778_26782))
{var node_26784 = chunk__26777_26781.cljs$core$IIndexed$_nth$arity$2(null,i__26779_26783);goog.dom.classes.toggle(node_26784,class$);
{
var G__26785 = seq__26776_26780;
var G__26786 = chunk__26777_26781;
var G__26787 = count__26778_26782;
var G__26788 = (i__26779_26783 + 1);
seq__26776_26780 = G__26785;
chunk__26777_26781 = G__26786;
count__26778_26782 = G__26787;
i__26779_26783 = G__26788;
continue;
}
} else
{var temp__4092__auto___26789 = cljs.core.seq(seq__26776_26780);if(temp__4092__auto___26789)
{var seq__26776_26790__$1 = temp__4092__auto___26789;if(cljs.core.chunked_seq_QMARK_(seq__26776_26790__$1))
{var c__4148__auto___26791 = cljs.core.chunk_first(seq__26776_26790__$1);{
var G__26792 = cljs.core.chunk_rest(seq__26776_26790__$1);
var G__26793 = c__4148__auto___26791;
var G__26794 = cljs.core.count(c__4148__auto___26791);
var G__26795 = 0;
seq__26776_26780 = G__26792;
chunk__26777_26781 = G__26793;
count__26778_26782 = G__26794;
i__26779_26783 = G__26795;
continue;
}
} else
{var node_26796 = cljs.core.first(seq__26776_26790__$1);goog.dom.classes.toggle(node_26796,class$);
{
var G__26797 = cljs.core.next(seq__26776_26790__$1);
var G__26798 = null;
var G__26799 = 0;
var G__26800 = 0;
seq__26776_26780 = G__26797;
chunk__26777_26781 = G__26798;
count__26778_26782 = G__26799;
i__26779_26783 = G__26800;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26809__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26805_26810 = cljs.core.seq(domina.nodes(content));var chunk__26806_26811 = null;var count__26807_26812 = 0;var i__26808_26813 = 0;while(true){
if((i__26808_26813 < count__26807_26812))
{var node_26814 = chunk__26806_26811.cljs$core$IIndexed$_nth$arity$2(null,i__26808_26813);goog.dom.classes.set(node_26814,classes_26809__$1);
{
var G__26815 = seq__26805_26810;
var G__26816 = chunk__26806_26811;
var G__26817 = count__26807_26812;
var G__26818 = (i__26808_26813 + 1);
seq__26805_26810 = G__26815;
chunk__26806_26811 = G__26816;
count__26807_26812 = G__26817;
i__26808_26813 = G__26818;
continue;
}
} else
{var temp__4092__auto___26819 = cljs.core.seq(seq__26805_26810);if(temp__4092__auto___26819)
{var seq__26805_26820__$1 = temp__4092__auto___26819;if(cljs.core.chunked_seq_QMARK_(seq__26805_26820__$1))
{var c__4148__auto___26821 = cljs.core.chunk_first(seq__26805_26820__$1);{
var G__26822 = cljs.core.chunk_rest(seq__26805_26820__$1);
var G__26823 = c__4148__auto___26821;
var G__26824 = cljs.core.count(c__4148__auto___26821);
var G__26825 = 0;
seq__26805_26810 = G__26822;
chunk__26806_26811 = G__26823;
count__26807_26812 = G__26824;
i__26808_26813 = G__26825;
continue;
}
} else
{var node_26826 = cljs.core.first(seq__26805_26820__$1);goog.dom.classes.set(node_26826,classes_26809__$1);
{
var G__26827 = cljs.core.next(seq__26805_26820__$1);
var G__26828 = null;
var G__26829 = 0;
var G__26830 = 0;
seq__26805_26810 = G__26827;
chunk__26806_26811 = G__26828;
count__26807_26812 = G__26829;
i__26808_26813 = G__26830;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26835_26839 = cljs.core.seq(domina.nodes(content));var chunk__26836_26840 = null;var count__26837_26841 = 0;var i__26838_26842 = 0;while(true){
if((i__26838_26842 < count__26837_26841))
{var node_26843 = chunk__26836_26840.cljs$core$IIndexed$_nth$arity$2(null,i__26838_26842);goog.dom.setTextContent(node_26843,value);
{
var G__26844 = seq__26835_26839;
var G__26845 = chunk__26836_26840;
var G__26846 = count__26837_26841;
var G__26847 = (i__26838_26842 + 1);
seq__26835_26839 = G__26844;
chunk__26836_26840 = G__26845;
count__26837_26841 = G__26846;
i__26838_26842 = G__26847;
continue;
}
} else
{var temp__4092__auto___26848 = cljs.core.seq(seq__26835_26839);if(temp__4092__auto___26848)
{var seq__26835_26849__$1 = temp__4092__auto___26848;if(cljs.core.chunked_seq_QMARK_(seq__26835_26849__$1))
{var c__4148__auto___26850 = cljs.core.chunk_first(seq__26835_26849__$1);{
var G__26851 = cljs.core.chunk_rest(seq__26835_26849__$1);
var G__26852 = c__4148__auto___26850;
var G__26853 = cljs.core.count(c__4148__auto___26850);
var G__26854 = 0;
seq__26835_26839 = G__26851;
chunk__26836_26840 = G__26852;
count__26837_26841 = G__26853;
i__26838_26842 = G__26854;
continue;
}
} else
{var node_26855 = cljs.core.first(seq__26835_26849__$1);goog.dom.setTextContent(node_26855,value);
{
var G__26856 = cljs.core.next(seq__26835_26849__$1);
var G__26857 = null;
var G__26858 = 0;
var G__26859 = 0;
seq__26835_26839 = G__26856;
chunk__26836_26840 = G__26857;
count__26837_26841 = G__26858;
i__26838_26842 = G__26859;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26864_26868 = cljs.core.seq(domina.nodes(content));var chunk__26865_26869 = null;var count__26866_26870 = 0;var i__26867_26871 = 0;while(true){
if((i__26867_26871 < count__26866_26870))
{var node_26872 = chunk__26865_26869.cljs$core$IIndexed$_nth$arity$2(null,i__26867_26871);goog.dom.forms.setValue(node_26872,value);
{
var G__26873 = seq__26864_26868;
var G__26874 = chunk__26865_26869;
var G__26875 = count__26866_26870;
var G__26876 = (i__26867_26871 + 1);
seq__26864_26868 = G__26873;
chunk__26865_26869 = G__26874;
count__26866_26870 = G__26875;
i__26867_26871 = G__26876;
continue;
}
} else
{var temp__4092__auto___26877 = cljs.core.seq(seq__26864_26868);if(temp__4092__auto___26877)
{var seq__26864_26878__$1 = temp__4092__auto___26877;if(cljs.core.chunked_seq_QMARK_(seq__26864_26878__$1))
{var c__4148__auto___26879 = cljs.core.chunk_first(seq__26864_26878__$1);{
var G__26880 = cljs.core.chunk_rest(seq__26864_26878__$1);
var G__26881 = c__4148__auto___26879;
var G__26882 = cljs.core.count(c__4148__auto___26879);
var G__26883 = 0;
seq__26864_26868 = G__26880;
chunk__26865_26869 = G__26881;
count__26866_26870 = G__26882;
i__26867_26871 = G__26883;
continue;
}
} else
{var node_26884 = cljs.core.first(seq__26864_26878__$1);goog.dom.forms.setValue(node_26884,value);
{
var G__26885 = cljs.core.next(seq__26864_26878__$1);
var G__26886 = null;
var G__26887 = 0;
var G__26888 = 0;
seq__26864_26868 = G__26885;
chunk__26865_26869 = G__26886;
count__26866_26870 = G__26887;
i__26867_26871 = G__26888;
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
{var value_26899 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26895_26900 = cljs.core.seq(domina.nodes(content));var chunk__26896_26901 = null;var count__26897_26902 = 0;var i__26898_26903 = 0;while(true){
if((i__26898_26903 < count__26897_26902))
{var node_26904 = chunk__26896_26901.cljs$core$IIndexed$_nth$arity$2(null,i__26898_26903);node_26904.innerHTML = value_26899;
{
var G__26905 = seq__26895_26900;
var G__26906 = chunk__26896_26901;
var G__26907 = count__26897_26902;
var G__26908 = (i__26898_26903 + 1);
seq__26895_26900 = G__26905;
chunk__26896_26901 = G__26906;
count__26897_26902 = G__26907;
i__26898_26903 = G__26908;
continue;
}
} else
{var temp__4092__auto___26909 = cljs.core.seq(seq__26895_26900);if(temp__4092__auto___26909)
{var seq__26895_26910__$1 = temp__4092__auto___26909;if(cljs.core.chunked_seq_QMARK_(seq__26895_26910__$1))
{var c__4148__auto___26911 = cljs.core.chunk_first(seq__26895_26910__$1);{
var G__26912 = cljs.core.chunk_rest(seq__26895_26910__$1);
var G__26913 = c__4148__auto___26911;
var G__26914 = cljs.core.count(c__4148__auto___26911);
var G__26915 = 0;
seq__26895_26900 = G__26912;
chunk__26896_26901 = G__26913;
count__26897_26902 = G__26914;
i__26898_26903 = G__26915;
continue;
}
} else
{var node_26916 = cljs.core.first(seq__26895_26910__$1);node_26916.innerHTML = value_26899;
{
var G__26917 = cljs.core.next(seq__26895_26910__$1);
var G__26918 = null;
var G__26919 = 0;
var G__26920 = 0;
seq__26895_26900 = G__26917;
chunk__26896_26901 = G__26918;
count__26897_26902 = G__26919;
i__26898_26903 = G__26920;
continue;
}
}
} else
{}
}
break;
}
}catch (e26894){if((e26894 instanceof Error))
{var e_26921 = e26894;domina.replace_children_BANG_(content,value_26899);
} else
{if(cljs.core.constant$keyword$189)
{throw e26894;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26928_26932 = cljs.core.seq(children);var chunk__26929_26933 = null;var count__26930_26934 = 0;var i__26931_26935 = 0;while(true){
if((i__26931_26935 < count__26930_26934))
{var child_26936 = chunk__26929_26933.cljs$core$IIndexed$_nth$arity$2(null,i__26931_26935);frag.appendChild(child_26936);
{
var G__26937 = seq__26928_26932;
var G__26938 = chunk__26929_26933;
var G__26939 = count__26930_26934;
var G__26940 = (i__26931_26935 + 1);
seq__26928_26932 = G__26937;
chunk__26929_26933 = G__26938;
count__26930_26934 = G__26939;
i__26931_26935 = G__26940;
continue;
}
} else
{var temp__4092__auto___26941 = cljs.core.seq(seq__26928_26932);if(temp__4092__auto___26941)
{var seq__26928_26942__$1 = temp__4092__auto___26941;if(cljs.core.chunked_seq_QMARK_(seq__26928_26942__$1))
{var c__4148__auto___26943 = cljs.core.chunk_first(seq__26928_26942__$1);{
var G__26944 = cljs.core.chunk_rest(seq__26928_26942__$1);
var G__26945 = c__4148__auto___26943;
var G__26946 = cljs.core.count(c__4148__auto___26943);
var G__26947 = 0;
seq__26928_26932 = G__26944;
chunk__26929_26933 = G__26945;
count__26930_26934 = G__26946;
i__26931_26935 = G__26947;
continue;
}
} else
{var child_26948 = cljs.core.first(seq__26928_26942__$1);frag.appendChild(child_26948);
{
var G__26949 = cljs.core.next(seq__26928_26942__$1);
var G__26950 = null;
var G__26951 = 0;
var G__26952 = 0;
seq__26928_26932 = G__26949;
chunk__26929_26933 = G__26950;
count__26930_26934 = G__26951;
i__26931_26935 = G__26952;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26922_SHARP_,p2__26923_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26922_SHARP_,p2__26923_SHARP_) : f.call(null,p1__26922_SHARP_,p2__26923_SHARP_));
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
{if((function (){var G__26954 = list_thing;if(G__26954)
{var bit__4050__auto__ = (G__26954.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26954.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26954.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26954);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26954);
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
{if((function (){var G__26955 = content;if(G__26955)
{var bit__4050__auto__ = (G__26955.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26955.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26955.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26955);
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
{if((function (){var G__26956 = content;if(G__26956)
{var bit__4050__auto__ = (G__26956.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26956.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26956);
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
