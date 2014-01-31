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
var opt_wrapper_26495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26496 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26497 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$194,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26496,table_section_wrapper_26496,opt_wrapper_26495,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26497,table_section_wrapper_26496,cell_wrapper_26497,opt_wrapper_26495,table_section_wrapper_26496,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26496]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26502 = cljs.core.seq(tbody);var chunk__26503 = null;var count__26504 = 0;var i__26505 = 0;while(true){
if((i__26505 < count__26504))
{var child = chunk__26503.cljs$core$IIndexed$_nth$arity$2(null,i__26505);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26506 = seq__26502;
var G__26507 = chunk__26503;
var G__26508 = count__26504;
var G__26509 = (i__26505 + 1);
seq__26502 = G__26506;
chunk__26503 = G__26507;
count__26504 = G__26508;
i__26505 = G__26509;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26502);if(temp__4092__auto__)
{var seq__26502__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26502__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26502__$1);{
var G__26510 = cljs.core.chunk_rest(seq__26502__$1);
var G__26511 = c__4148__auto__;
var G__26512 = cljs.core.count(c__4148__auto__);
var G__26513 = 0;
seq__26502 = G__26510;
chunk__26503 = G__26511;
count__26504 = G__26512;
i__26505 = G__26513;
continue;
}
} else
{var child = cljs.core.first(seq__26502__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26514 = cljs.core.next(seq__26502__$1);
var G__26515 = null;
var G__26516 = 0;
var G__26517 = 0;
seq__26502 = G__26514;
chunk__26503 = G__26515;
count__26504 = G__26516;
i__26505 = G__26517;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26519 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26520 = wrapper.lastChild;
var G__26521 = (level - 1);
wrapper = G__26520;
level = G__26521;
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
domina.DomContent = (function (){var obj26523 = {};return obj26523;
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
log_debug.cljs$lang$applyTo = (function (arglist__26524){
var mesg = cljs.core.seq(arglist__26524);
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
log.cljs$lang$applyTo = (function (arglist__26525){
var mesg = cljs.core.seq(arglist__26525);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26526){
var contents = cljs.core.seq(arglist__26526);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26527_SHARP_){return p1__26527_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26528_SHARP_,p2__26529_SHARP_){return goog.dom.insertChildAt(p1__26528_SHARP_,p2__26529_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26528_SHARP_,p2__26529_SHARP_){return goog.dom.insertChildAt(p1__26528_SHARP_,p2__26529_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26531_SHARP_,p2__26530_SHARP_){return goog.dom.insertSiblingBefore(p2__26530_SHARP_,p1__26531_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26531_SHARP_,p2__26530_SHARP_){return goog.dom.insertSiblingBefore(p2__26530_SHARP_,p1__26531_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26533_SHARP_,p2__26532_SHARP_){return goog.dom.insertSiblingAfter(p2__26532_SHARP_,p1__26533_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26533_SHARP_,p2__26532_SHARP_){return goog.dom.insertSiblingAfter(p2__26532_SHARP_,p1__26533_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26535_SHARP_,p2__26534_SHARP_){return goog.dom.replaceNode(p2__26534_SHARP_,p1__26535_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26535_SHARP_,p2__26534_SHARP_){return goog.dom.replaceNode(p2__26534_SHARP_,p1__26535_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26540_26544 = cljs.core.seq(domina.nodes(content));var chunk__26541_26545 = null;var count__26542_26546 = 0;var i__26543_26547 = 0;while(true){
if((i__26543_26547 < count__26542_26546))
{var n_26548 = chunk__26541_26545.cljs$core$IIndexed$_nth$arity$2(null,i__26543_26547);goog.style.setStyle(n_26548,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26549 = seq__26540_26544;
var G__26550 = chunk__26541_26545;
var G__26551 = count__26542_26546;
var G__26552 = (i__26543_26547 + 1);
seq__26540_26544 = G__26549;
chunk__26541_26545 = G__26550;
count__26542_26546 = G__26551;
i__26543_26547 = G__26552;
continue;
}
} else
{var temp__4092__auto___26553 = cljs.core.seq(seq__26540_26544);if(temp__4092__auto___26553)
{var seq__26540_26554__$1 = temp__4092__auto___26553;if(cljs.core.chunked_seq_QMARK_(seq__26540_26554__$1))
{var c__4148__auto___26555 = cljs.core.chunk_first(seq__26540_26554__$1);{
var G__26556 = cljs.core.chunk_rest(seq__26540_26554__$1);
var G__26557 = c__4148__auto___26555;
var G__26558 = cljs.core.count(c__4148__auto___26555);
var G__26559 = 0;
seq__26540_26544 = G__26556;
chunk__26541_26545 = G__26557;
count__26542_26546 = G__26558;
i__26543_26547 = G__26559;
continue;
}
} else
{var n_26560 = cljs.core.first(seq__26540_26554__$1);goog.style.setStyle(n_26560,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26561 = cljs.core.next(seq__26540_26554__$1);
var G__26562 = null;
var G__26563 = 0;
var G__26564 = 0;
seq__26540_26544 = G__26561;
chunk__26541_26545 = G__26562;
count__26542_26546 = G__26563;
i__26543_26547 = G__26564;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26565){
var content = cljs.core.first(arglist__26565);
arglist__26565 = cljs.core.next(arglist__26565);
var name = cljs.core.first(arglist__26565);
var value = cljs.core.rest(arglist__26565);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26570_26574 = cljs.core.seq(domina.nodes(content));var chunk__26571_26575 = null;var count__26572_26576 = 0;var i__26573_26577 = 0;while(true){
if((i__26573_26577 < count__26572_26576))
{var n_26578 = chunk__26571_26575.cljs$core$IIndexed$_nth$arity$2(null,i__26573_26577);n_26578.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26579 = seq__26570_26574;
var G__26580 = chunk__26571_26575;
var G__26581 = count__26572_26576;
var G__26582 = (i__26573_26577 + 1);
seq__26570_26574 = G__26579;
chunk__26571_26575 = G__26580;
count__26572_26576 = G__26581;
i__26573_26577 = G__26582;
continue;
}
} else
{var temp__4092__auto___26583 = cljs.core.seq(seq__26570_26574);if(temp__4092__auto___26583)
{var seq__26570_26584__$1 = temp__4092__auto___26583;if(cljs.core.chunked_seq_QMARK_(seq__26570_26584__$1))
{var c__4148__auto___26585 = cljs.core.chunk_first(seq__26570_26584__$1);{
var G__26586 = cljs.core.chunk_rest(seq__26570_26584__$1);
var G__26587 = c__4148__auto___26585;
var G__26588 = cljs.core.count(c__4148__auto___26585);
var G__26589 = 0;
seq__26570_26574 = G__26586;
chunk__26571_26575 = G__26587;
count__26572_26576 = G__26588;
i__26573_26577 = G__26589;
continue;
}
} else
{var n_26590 = cljs.core.first(seq__26570_26584__$1);n_26590.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26591 = cljs.core.next(seq__26570_26584__$1);
var G__26592 = null;
var G__26593 = 0;
var G__26594 = 0;
seq__26570_26574 = G__26591;
chunk__26571_26575 = G__26592;
count__26572_26576 = G__26593;
i__26573_26577 = G__26594;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26595){
var content = cljs.core.first(arglist__26595);
arglist__26595 = cljs.core.next(arglist__26595);
var name = cljs.core.first(arglist__26595);
var value = cljs.core.rest(arglist__26595);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26600_26604 = cljs.core.seq(domina.nodes(content));var chunk__26601_26605 = null;var count__26602_26606 = 0;var i__26603_26607 = 0;while(true){
if((i__26603_26607 < count__26602_26606))
{var n_26608 = chunk__26601_26605.cljs$core$IIndexed$_nth$arity$2(null,i__26603_26607);n_26608.removeAttribute(cljs.core.name(name));
{
var G__26609 = seq__26600_26604;
var G__26610 = chunk__26601_26605;
var G__26611 = count__26602_26606;
var G__26612 = (i__26603_26607 + 1);
seq__26600_26604 = G__26609;
chunk__26601_26605 = G__26610;
count__26602_26606 = G__26611;
i__26603_26607 = G__26612;
continue;
}
} else
{var temp__4092__auto___26613 = cljs.core.seq(seq__26600_26604);if(temp__4092__auto___26613)
{var seq__26600_26614__$1 = temp__4092__auto___26613;if(cljs.core.chunked_seq_QMARK_(seq__26600_26614__$1))
{var c__4148__auto___26615 = cljs.core.chunk_first(seq__26600_26614__$1);{
var G__26616 = cljs.core.chunk_rest(seq__26600_26614__$1);
var G__26617 = c__4148__auto___26615;
var G__26618 = cljs.core.count(c__4148__auto___26615);
var G__26619 = 0;
seq__26600_26604 = G__26616;
chunk__26601_26605 = G__26617;
count__26602_26606 = G__26618;
i__26603_26607 = G__26619;
continue;
}
} else
{var n_26620 = cljs.core.first(seq__26600_26614__$1);n_26620.removeAttribute(cljs.core.name(name));
{
var G__26621 = cljs.core.next(seq__26600_26614__$1);
var G__26622 = null;
var G__26623 = 0;
var G__26624 = 0;
seq__26600_26604 = G__26621;
chunk__26601_26605 = G__26622;
count__26602_26606 = G__26623;
i__26603_26607 = G__26624;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26626 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26626,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26626,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$193)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26627_SHARP_){var attr = attrs__$1.item(p1__26627_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26634_26640 = cljs.core.seq(styles);var chunk__26635_26641 = null;var count__26636_26642 = 0;var i__26637_26643 = 0;while(true){
if((i__26637_26643 < count__26636_26642))
{var vec__26638_26644 = chunk__26635_26641.cljs$core$IIndexed$_nth$arity$2(null,i__26637_26643);var name_26645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638_26644,0,null);var value_26646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26638_26644,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26645,cljs.core.array_seq([value_26646], 0));
{
var G__26647 = seq__26634_26640;
var G__26648 = chunk__26635_26641;
var G__26649 = count__26636_26642;
var G__26650 = (i__26637_26643 + 1);
seq__26634_26640 = G__26647;
chunk__26635_26641 = G__26648;
count__26636_26642 = G__26649;
i__26637_26643 = G__26650;
continue;
}
} else
{var temp__4092__auto___26651 = cljs.core.seq(seq__26634_26640);if(temp__4092__auto___26651)
{var seq__26634_26652__$1 = temp__4092__auto___26651;if(cljs.core.chunked_seq_QMARK_(seq__26634_26652__$1))
{var c__4148__auto___26653 = cljs.core.chunk_first(seq__26634_26652__$1);{
var G__26654 = cljs.core.chunk_rest(seq__26634_26652__$1);
var G__26655 = c__4148__auto___26653;
var G__26656 = cljs.core.count(c__4148__auto___26653);
var G__26657 = 0;
seq__26634_26640 = G__26654;
chunk__26635_26641 = G__26655;
count__26636_26642 = G__26656;
i__26637_26643 = G__26657;
continue;
}
} else
{var vec__26639_26658 = cljs.core.first(seq__26634_26652__$1);var name_26659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26639_26658,0,null);var value_26660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26639_26658,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26659,cljs.core.array_seq([value_26660], 0));
{
var G__26661 = cljs.core.next(seq__26634_26652__$1);
var G__26662 = null;
var G__26663 = 0;
var G__26664 = 0;
seq__26634_26640 = G__26661;
chunk__26635_26641 = G__26662;
count__26636_26642 = G__26663;
i__26637_26643 = G__26664;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26671_26677 = cljs.core.seq(attrs);var chunk__26672_26678 = null;var count__26673_26679 = 0;var i__26674_26680 = 0;while(true){
if((i__26674_26680 < count__26673_26679))
{var vec__26675_26681 = chunk__26672_26678.cljs$core$IIndexed$_nth$arity$2(null,i__26674_26680);var name_26682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26681,0,null);var value_26683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26675_26681,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26682,cljs.core.array_seq([value_26683], 0));
{
var G__26684 = seq__26671_26677;
var G__26685 = chunk__26672_26678;
var G__26686 = count__26673_26679;
var G__26687 = (i__26674_26680 + 1);
seq__26671_26677 = G__26684;
chunk__26672_26678 = G__26685;
count__26673_26679 = G__26686;
i__26674_26680 = G__26687;
continue;
}
} else
{var temp__4092__auto___26688 = cljs.core.seq(seq__26671_26677);if(temp__4092__auto___26688)
{var seq__26671_26689__$1 = temp__4092__auto___26688;if(cljs.core.chunked_seq_QMARK_(seq__26671_26689__$1))
{var c__4148__auto___26690 = cljs.core.chunk_first(seq__26671_26689__$1);{
var G__26691 = cljs.core.chunk_rest(seq__26671_26689__$1);
var G__26692 = c__4148__auto___26690;
var G__26693 = cljs.core.count(c__4148__auto___26690);
var G__26694 = 0;
seq__26671_26677 = G__26691;
chunk__26672_26678 = G__26692;
count__26673_26679 = G__26693;
i__26674_26680 = G__26694;
continue;
}
} else
{var vec__26676_26695 = cljs.core.first(seq__26671_26689__$1);var name_26696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26695,0,null);var value_26697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26676_26695,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26696,cljs.core.array_seq([value_26697], 0));
{
var G__26698 = cljs.core.next(seq__26671_26689__$1);
var G__26699 = null;
var G__26700 = 0;
var G__26701 = 0;
seq__26671_26677 = G__26698;
chunk__26672_26678 = G__26699;
count__26673_26679 = G__26700;
i__26674_26680 = G__26701;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26706_26710 = cljs.core.seq(domina.nodes(content));var chunk__26707_26711 = null;var count__26708_26712 = 0;var i__26709_26713 = 0;while(true){
if((i__26709_26713 < count__26708_26712))
{var node_26714 = chunk__26707_26711.cljs$core$IIndexed$_nth$arity$2(null,i__26709_26713);goog.dom.classes.add(node_26714,class$);
{
var G__26715 = seq__26706_26710;
var G__26716 = chunk__26707_26711;
var G__26717 = count__26708_26712;
var G__26718 = (i__26709_26713 + 1);
seq__26706_26710 = G__26715;
chunk__26707_26711 = G__26716;
count__26708_26712 = G__26717;
i__26709_26713 = G__26718;
continue;
}
} else
{var temp__4092__auto___26719 = cljs.core.seq(seq__26706_26710);if(temp__4092__auto___26719)
{var seq__26706_26720__$1 = temp__4092__auto___26719;if(cljs.core.chunked_seq_QMARK_(seq__26706_26720__$1))
{var c__4148__auto___26721 = cljs.core.chunk_first(seq__26706_26720__$1);{
var G__26722 = cljs.core.chunk_rest(seq__26706_26720__$1);
var G__26723 = c__4148__auto___26721;
var G__26724 = cljs.core.count(c__4148__auto___26721);
var G__26725 = 0;
seq__26706_26710 = G__26722;
chunk__26707_26711 = G__26723;
count__26708_26712 = G__26724;
i__26709_26713 = G__26725;
continue;
}
} else
{var node_26726 = cljs.core.first(seq__26706_26720__$1);goog.dom.classes.add(node_26726,class$);
{
var G__26727 = cljs.core.next(seq__26706_26720__$1);
var G__26728 = null;
var G__26729 = 0;
var G__26730 = 0;
seq__26706_26710 = G__26727;
chunk__26707_26711 = G__26728;
count__26708_26712 = G__26729;
i__26709_26713 = G__26730;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26735_26739 = cljs.core.seq(domina.nodes(content));var chunk__26736_26740 = null;var count__26737_26741 = 0;var i__26738_26742 = 0;while(true){
if((i__26738_26742 < count__26737_26741))
{var node_26743 = chunk__26736_26740.cljs$core$IIndexed$_nth$arity$2(null,i__26738_26742);goog.dom.classes.remove(node_26743,class$);
{
var G__26744 = seq__26735_26739;
var G__26745 = chunk__26736_26740;
var G__26746 = count__26737_26741;
var G__26747 = (i__26738_26742 + 1);
seq__26735_26739 = G__26744;
chunk__26736_26740 = G__26745;
count__26737_26741 = G__26746;
i__26738_26742 = G__26747;
continue;
}
} else
{var temp__4092__auto___26748 = cljs.core.seq(seq__26735_26739);if(temp__4092__auto___26748)
{var seq__26735_26749__$1 = temp__4092__auto___26748;if(cljs.core.chunked_seq_QMARK_(seq__26735_26749__$1))
{var c__4148__auto___26750 = cljs.core.chunk_first(seq__26735_26749__$1);{
var G__26751 = cljs.core.chunk_rest(seq__26735_26749__$1);
var G__26752 = c__4148__auto___26750;
var G__26753 = cljs.core.count(c__4148__auto___26750);
var G__26754 = 0;
seq__26735_26739 = G__26751;
chunk__26736_26740 = G__26752;
count__26737_26741 = G__26753;
i__26738_26742 = G__26754;
continue;
}
} else
{var node_26755 = cljs.core.first(seq__26735_26749__$1);goog.dom.classes.remove(node_26755,class$);
{
var G__26756 = cljs.core.next(seq__26735_26749__$1);
var G__26757 = null;
var G__26758 = 0;
var G__26759 = 0;
seq__26735_26739 = G__26756;
chunk__26736_26740 = G__26757;
count__26737_26741 = G__26758;
i__26738_26742 = G__26759;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26764_26768 = cljs.core.seq(domina.nodes(content));var chunk__26765_26769 = null;var count__26766_26770 = 0;var i__26767_26771 = 0;while(true){
if((i__26767_26771 < count__26766_26770))
{var node_26772 = chunk__26765_26769.cljs$core$IIndexed$_nth$arity$2(null,i__26767_26771);goog.dom.classes.toggle(node_26772,class$);
{
var G__26773 = seq__26764_26768;
var G__26774 = chunk__26765_26769;
var G__26775 = count__26766_26770;
var G__26776 = (i__26767_26771 + 1);
seq__26764_26768 = G__26773;
chunk__26765_26769 = G__26774;
count__26766_26770 = G__26775;
i__26767_26771 = G__26776;
continue;
}
} else
{var temp__4092__auto___26777 = cljs.core.seq(seq__26764_26768);if(temp__4092__auto___26777)
{var seq__26764_26778__$1 = temp__4092__auto___26777;if(cljs.core.chunked_seq_QMARK_(seq__26764_26778__$1))
{var c__4148__auto___26779 = cljs.core.chunk_first(seq__26764_26778__$1);{
var G__26780 = cljs.core.chunk_rest(seq__26764_26778__$1);
var G__26781 = c__4148__auto___26779;
var G__26782 = cljs.core.count(c__4148__auto___26779);
var G__26783 = 0;
seq__26764_26768 = G__26780;
chunk__26765_26769 = G__26781;
count__26766_26770 = G__26782;
i__26767_26771 = G__26783;
continue;
}
} else
{var node_26784 = cljs.core.first(seq__26764_26778__$1);goog.dom.classes.toggle(node_26784,class$);
{
var G__26785 = cljs.core.next(seq__26764_26778__$1);
var G__26786 = null;
var G__26787 = 0;
var G__26788 = 0;
seq__26764_26768 = G__26785;
chunk__26765_26769 = G__26786;
count__26766_26770 = G__26787;
i__26767_26771 = G__26788;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26797__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26793_26798 = cljs.core.seq(domina.nodes(content));var chunk__26794_26799 = null;var count__26795_26800 = 0;var i__26796_26801 = 0;while(true){
if((i__26796_26801 < count__26795_26800))
{var node_26802 = chunk__26794_26799.cljs$core$IIndexed$_nth$arity$2(null,i__26796_26801);goog.dom.classes.set(node_26802,classes_26797__$1);
{
var G__26803 = seq__26793_26798;
var G__26804 = chunk__26794_26799;
var G__26805 = count__26795_26800;
var G__26806 = (i__26796_26801 + 1);
seq__26793_26798 = G__26803;
chunk__26794_26799 = G__26804;
count__26795_26800 = G__26805;
i__26796_26801 = G__26806;
continue;
}
} else
{var temp__4092__auto___26807 = cljs.core.seq(seq__26793_26798);if(temp__4092__auto___26807)
{var seq__26793_26808__$1 = temp__4092__auto___26807;if(cljs.core.chunked_seq_QMARK_(seq__26793_26808__$1))
{var c__4148__auto___26809 = cljs.core.chunk_first(seq__26793_26808__$1);{
var G__26810 = cljs.core.chunk_rest(seq__26793_26808__$1);
var G__26811 = c__4148__auto___26809;
var G__26812 = cljs.core.count(c__4148__auto___26809);
var G__26813 = 0;
seq__26793_26798 = G__26810;
chunk__26794_26799 = G__26811;
count__26795_26800 = G__26812;
i__26796_26801 = G__26813;
continue;
}
} else
{var node_26814 = cljs.core.first(seq__26793_26808__$1);goog.dom.classes.set(node_26814,classes_26797__$1);
{
var G__26815 = cljs.core.next(seq__26793_26808__$1);
var G__26816 = null;
var G__26817 = 0;
var G__26818 = 0;
seq__26793_26798 = G__26815;
chunk__26794_26799 = G__26816;
count__26795_26800 = G__26817;
i__26796_26801 = G__26818;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26823_26827 = cljs.core.seq(domina.nodes(content));var chunk__26824_26828 = null;var count__26825_26829 = 0;var i__26826_26830 = 0;while(true){
if((i__26826_26830 < count__26825_26829))
{var node_26831 = chunk__26824_26828.cljs$core$IIndexed$_nth$arity$2(null,i__26826_26830);goog.dom.setTextContent(node_26831,value);
{
var G__26832 = seq__26823_26827;
var G__26833 = chunk__26824_26828;
var G__26834 = count__26825_26829;
var G__26835 = (i__26826_26830 + 1);
seq__26823_26827 = G__26832;
chunk__26824_26828 = G__26833;
count__26825_26829 = G__26834;
i__26826_26830 = G__26835;
continue;
}
} else
{var temp__4092__auto___26836 = cljs.core.seq(seq__26823_26827);if(temp__4092__auto___26836)
{var seq__26823_26837__$1 = temp__4092__auto___26836;if(cljs.core.chunked_seq_QMARK_(seq__26823_26837__$1))
{var c__4148__auto___26838 = cljs.core.chunk_first(seq__26823_26837__$1);{
var G__26839 = cljs.core.chunk_rest(seq__26823_26837__$1);
var G__26840 = c__4148__auto___26838;
var G__26841 = cljs.core.count(c__4148__auto___26838);
var G__26842 = 0;
seq__26823_26827 = G__26839;
chunk__26824_26828 = G__26840;
count__26825_26829 = G__26841;
i__26826_26830 = G__26842;
continue;
}
} else
{var node_26843 = cljs.core.first(seq__26823_26837__$1);goog.dom.setTextContent(node_26843,value);
{
var G__26844 = cljs.core.next(seq__26823_26837__$1);
var G__26845 = null;
var G__26846 = 0;
var G__26847 = 0;
seq__26823_26827 = G__26844;
chunk__26824_26828 = G__26845;
count__26825_26829 = G__26846;
i__26826_26830 = G__26847;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26852_26856 = cljs.core.seq(domina.nodes(content));var chunk__26853_26857 = null;var count__26854_26858 = 0;var i__26855_26859 = 0;while(true){
if((i__26855_26859 < count__26854_26858))
{var node_26860 = chunk__26853_26857.cljs$core$IIndexed$_nth$arity$2(null,i__26855_26859);goog.dom.forms.setValue(node_26860,value);
{
var G__26861 = seq__26852_26856;
var G__26862 = chunk__26853_26857;
var G__26863 = count__26854_26858;
var G__26864 = (i__26855_26859 + 1);
seq__26852_26856 = G__26861;
chunk__26853_26857 = G__26862;
count__26854_26858 = G__26863;
i__26855_26859 = G__26864;
continue;
}
} else
{var temp__4092__auto___26865 = cljs.core.seq(seq__26852_26856);if(temp__4092__auto___26865)
{var seq__26852_26866__$1 = temp__4092__auto___26865;if(cljs.core.chunked_seq_QMARK_(seq__26852_26866__$1))
{var c__4148__auto___26867 = cljs.core.chunk_first(seq__26852_26866__$1);{
var G__26868 = cljs.core.chunk_rest(seq__26852_26866__$1);
var G__26869 = c__4148__auto___26867;
var G__26870 = cljs.core.count(c__4148__auto___26867);
var G__26871 = 0;
seq__26852_26856 = G__26868;
chunk__26853_26857 = G__26869;
count__26854_26858 = G__26870;
i__26855_26859 = G__26871;
continue;
}
} else
{var node_26872 = cljs.core.first(seq__26852_26866__$1);goog.dom.forms.setValue(node_26872,value);
{
var G__26873 = cljs.core.next(seq__26852_26866__$1);
var G__26874 = null;
var G__26875 = 0;
var G__26876 = 0;
seq__26852_26856 = G__26873;
chunk__26853_26857 = G__26874;
count__26854_26858 = G__26875;
i__26855_26859 = G__26876;
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
{var value_26887 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26883_26888 = cljs.core.seq(domina.nodes(content));var chunk__26884_26889 = null;var count__26885_26890 = 0;var i__26886_26891 = 0;while(true){
if((i__26886_26891 < count__26885_26890))
{var node_26892 = chunk__26884_26889.cljs$core$IIndexed$_nth$arity$2(null,i__26886_26891);node_26892.innerHTML = value_26887;
{
var G__26893 = seq__26883_26888;
var G__26894 = chunk__26884_26889;
var G__26895 = count__26885_26890;
var G__26896 = (i__26886_26891 + 1);
seq__26883_26888 = G__26893;
chunk__26884_26889 = G__26894;
count__26885_26890 = G__26895;
i__26886_26891 = G__26896;
continue;
}
} else
{var temp__4092__auto___26897 = cljs.core.seq(seq__26883_26888);if(temp__4092__auto___26897)
{var seq__26883_26898__$1 = temp__4092__auto___26897;if(cljs.core.chunked_seq_QMARK_(seq__26883_26898__$1))
{var c__4148__auto___26899 = cljs.core.chunk_first(seq__26883_26898__$1);{
var G__26900 = cljs.core.chunk_rest(seq__26883_26898__$1);
var G__26901 = c__4148__auto___26899;
var G__26902 = cljs.core.count(c__4148__auto___26899);
var G__26903 = 0;
seq__26883_26888 = G__26900;
chunk__26884_26889 = G__26901;
count__26885_26890 = G__26902;
i__26886_26891 = G__26903;
continue;
}
} else
{var node_26904 = cljs.core.first(seq__26883_26898__$1);node_26904.innerHTML = value_26887;
{
var G__26905 = cljs.core.next(seq__26883_26898__$1);
var G__26906 = null;
var G__26907 = 0;
var G__26908 = 0;
seq__26883_26888 = G__26905;
chunk__26884_26889 = G__26906;
count__26885_26890 = G__26907;
i__26886_26891 = G__26908;
continue;
}
}
} else
{}
}
break;
}
}catch (e26882){if((e26882 instanceof Error))
{var e_26909 = e26882;domina.replace_children_BANG_(content,value_26887);
} else
{if(cljs.core.constant$keyword$193)
{throw e26882;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26916_26920 = cljs.core.seq(children);var chunk__26917_26921 = null;var count__26918_26922 = 0;var i__26919_26923 = 0;while(true){
if((i__26919_26923 < count__26918_26922))
{var child_26924 = chunk__26917_26921.cljs$core$IIndexed$_nth$arity$2(null,i__26919_26923);frag.appendChild(child_26924);
{
var G__26925 = seq__26916_26920;
var G__26926 = chunk__26917_26921;
var G__26927 = count__26918_26922;
var G__26928 = (i__26919_26923 + 1);
seq__26916_26920 = G__26925;
chunk__26917_26921 = G__26926;
count__26918_26922 = G__26927;
i__26919_26923 = G__26928;
continue;
}
} else
{var temp__4092__auto___26929 = cljs.core.seq(seq__26916_26920);if(temp__4092__auto___26929)
{var seq__26916_26930__$1 = temp__4092__auto___26929;if(cljs.core.chunked_seq_QMARK_(seq__26916_26930__$1))
{var c__4148__auto___26931 = cljs.core.chunk_first(seq__26916_26930__$1);{
var G__26932 = cljs.core.chunk_rest(seq__26916_26930__$1);
var G__26933 = c__4148__auto___26931;
var G__26934 = cljs.core.count(c__4148__auto___26931);
var G__26935 = 0;
seq__26916_26920 = G__26932;
chunk__26917_26921 = G__26933;
count__26918_26922 = G__26934;
i__26919_26923 = G__26935;
continue;
}
} else
{var child_26936 = cljs.core.first(seq__26916_26930__$1);frag.appendChild(child_26936);
{
var G__26937 = cljs.core.next(seq__26916_26930__$1);
var G__26938 = null;
var G__26939 = 0;
var G__26940 = 0;
seq__26916_26920 = G__26937;
chunk__26917_26921 = G__26938;
count__26918_26922 = G__26939;
i__26919_26923 = G__26940;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26910_SHARP_,p2__26911_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26910_SHARP_,p2__26911_SHARP_) : f.call(null,p1__26910_SHARP_,p2__26911_SHARP_));
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
{if((function (){var G__26942 = list_thing;if(G__26942)
{var bit__4050__auto__ = (G__26942.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26942.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26942.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26942);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26942);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$194)
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
{if((function (){var G__26943 = content;if(G__26943)
{var bit__4050__auto__ = (G__26943.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26943.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26943.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26943);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26943);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$194)
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
{if((function (){var G__26944 = content;if(G__26944)
{var bit__4050__auto__ = (G__26944.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26944.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26944.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26944);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26944);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$194)
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
