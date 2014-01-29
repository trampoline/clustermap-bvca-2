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
var opt_wrapper_26481 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26482 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26483 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$187,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26482,table_section_wrapper_26482,opt_wrapper_26481,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26483,table_section_wrapper_26482,cell_wrapper_26483,opt_wrapper_26481,table_section_wrapper_26482,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26482]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26488 = cljs.core.seq(tbody);var chunk__26489 = null;var count__26490 = 0;var i__26491 = 0;while(true){
if((i__26491 < count__26490))
{var child = chunk__26489.cljs$core$IIndexed$_nth$arity$2(null,i__26491);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26492 = seq__26488;
var G__26493 = chunk__26489;
var G__26494 = count__26490;
var G__26495 = (i__26491 + 1);
seq__26488 = G__26492;
chunk__26489 = G__26493;
count__26490 = G__26494;
i__26491 = G__26495;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26488);if(temp__4092__auto__)
{var seq__26488__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26488__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26488__$1);{
var G__26496 = cljs.core.chunk_rest(seq__26488__$1);
var G__26497 = c__4148__auto__;
var G__26498 = cljs.core.count(c__4148__auto__);
var G__26499 = 0;
seq__26488 = G__26496;
chunk__26489 = G__26497;
count__26490 = G__26498;
i__26491 = G__26499;
continue;
}
} else
{var child = cljs.core.first(seq__26488__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26500 = cljs.core.next(seq__26488__$1);
var G__26501 = null;
var G__26502 = 0;
var G__26503 = 0;
seq__26488 = G__26500;
chunk__26489 = G__26501;
count__26490 = G__26502;
i__26491 = G__26503;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26505 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26505,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26506 = wrapper.lastChild;
var G__26507 = (level - 1);
wrapper = G__26506;
level = G__26507;
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
domina.DomContent = (function (){var obj26509 = {};return obj26509;
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
log_debug.cljs$lang$applyTo = (function (arglist__26510){
var mesg = cljs.core.seq(arglist__26510);
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
log.cljs$lang$applyTo = (function (arglist__26511){
var mesg = cljs.core.seq(arglist__26511);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26512){
var contents = cljs.core.seq(arglist__26512);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26513_SHARP_){return p1__26513_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26514_SHARP_,p2__26515_SHARP_){return goog.dom.insertChildAt(p1__26514_SHARP_,p2__26515_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26514_SHARP_,p2__26515_SHARP_){return goog.dom.insertChildAt(p1__26514_SHARP_,p2__26515_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26517_SHARP_,p2__26516_SHARP_){return goog.dom.insertSiblingBefore(p2__26516_SHARP_,p1__26517_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26517_SHARP_,p2__26516_SHARP_){return goog.dom.insertSiblingBefore(p2__26516_SHARP_,p1__26517_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26519_SHARP_,p2__26518_SHARP_){return goog.dom.insertSiblingAfter(p2__26518_SHARP_,p1__26519_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26519_SHARP_,p2__26518_SHARP_){return goog.dom.insertSiblingAfter(p2__26518_SHARP_,p1__26519_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26521_SHARP_,p2__26520_SHARP_){return goog.dom.replaceNode(p2__26520_SHARP_,p1__26521_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26521_SHARP_,p2__26520_SHARP_){return goog.dom.replaceNode(p2__26520_SHARP_,p1__26521_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26526_26530 = cljs.core.seq(domina.nodes(content));var chunk__26527_26531 = null;var count__26528_26532 = 0;var i__26529_26533 = 0;while(true){
if((i__26529_26533 < count__26528_26532))
{var n_26534 = chunk__26527_26531.cljs$core$IIndexed$_nth$arity$2(null,i__26529_26533);goog.style.setStyle(n_26534,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26535 = seq__26526_26530;
var G__26536 = chunk__26527_26531;
var G__26537 = count__26528_26532;
var G__26538 = (i__26529_26533 + 1);
seq__26526_26530 = G__26535;
chunk__26527_26531 = G__26536;
count__26528_26532 = G__26537;
i__26529_26533 = G__26538;
continue;
}
} else
{var temp__4092__auto___26539 = cljs.core.seq(seq__26526_26530);if(temp__4092__auto___26539)
{var seq__26526_26540__$1 = temp__4092__auto___26539;if(cljs.core.chunked_seq_QMARK_(seq__26526_26540__$1))
{var c__4148__auto___26541 = cljs.core.chunk_first(seq__26526_26540__$1);{
var G__26542 = cljs.core.chunk_rest(seq__26526_26540__$1);
var G__26543 = c__4148__auto___26541;
var G__26544 = cljs.core.count(c__4148__auto___26541);
var G__26545 = 0;
seq__26526_26530 = G__26542;
chunk__26527_26531 = G__26543;
count__26528_26532 = G__26544;
i__26529_26533 = G__26545;
continue;
}
} else
{var n_26546 = cljs.core.first(seq__26526_26540__$1);goog.style.setStyle(n_26546,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26547 = cljs.core.next(seq__26526_26540__$1);
var G__26548 = null;
var G__26549 = 0;
var G__26550 = 0;
seq__26526_26530 = G__26547;
chunk__26527_26531 = G__26548;
count__26528_26532 = G__26549;
i__26529_26533 = G__26550;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26551){
var content = cljs.core.first(arglist__26551);
arglist__26551 = cljs.core.next(arglist__26551);
var name = cljs.core.first(arglist__26551);
var value = cljs.core.rest(arglist__26551);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26556_26560 = cljs.core.seq(domina.nodes(content));var chunk__26557_26561 = null;var count__26558_26562 = 0;var i__26559_26563 = 0;while(true){
if((i__26559_26563 < count__26558_26562))
{var n_26564 = chunk__26557_26561.cljs$core$IIndexed$_nth$arity$2(null,i__26559_26563);n_26564.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26565 = seq__26556_26560;
var G__26566 = chunk__26557_26561;
var G__26567 = count__26558_26562;
var G__26568 = (i__26559_26563 + 1);
seq__26556_26560 = G__26565;
chunk__26557_26561 = G__26566;
count__26558_26562 = G__26567;
i__26559_26563 = G__26568;
continue;
}
} else
{var temp__4092__auto___26569 = cljs.core.seq(seq__26556_26560);if(temp__4092__auto___26569)
{var seq__26556_26570__$1 = temp__4092__auto___26569;if(cljs.core.chunked_seq_QMARK_(seq__26556_26570__$1))
{var c__4148__auto___26571 = cljs.core.chunk_first(seq__26556_26570__$1);{
var G__26572 = cljs.core.chunk_rest(seq__26556_26570__$1);
var G__26573 = c__4148__auto___26571;
var G__26574 = cljs.core.count(c__4148__auto___26571);
var G__26575 = 0;
seq__26556_26560 = G__26572;
chunk__26557_26561 = G__26573;
count__26558_26562 = G__26574;
i__26559_26563 = G__26575;
continue;
}
} else
{var n_26576 = cljs.core.first(seq__26556_26570__$1);n_26576.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26577 = cljs.core.next(seq__26556_26570__$1);
var G__26578 = null;
var G__26579 = 0;
var G__26580 = 0;
seq__26556_26560 = G__26577;
chunk__26557_26561 = G__26578;
count__26558_26562 = G__26579;
i__26559_26563 = G__26580;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26581){
var content = cljs.core.first(arglist__26581);
arglist__26581 = cljs.core.next(arglist__26581);
var name = cljs.core.first(arglist__26581);
var value = cljs.core.rest(arglist__26581);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26586_26590 = cljs.core.seq(domina.nodes(content));var chunk__26587_26591 = null;var count__26588_26592 = 0;var i__26589_26593 = 0;while(true){
if((i__26589_26593 < count__26588_26592))
{var n_26594 = chunk__26587_26591.cljs$core$IIndexed$_nth$arity$2(null,i__26589_26593);n_26594.removeAttribute(cljs.core.name(name));
{
var G__26595 = seq__26586_26590;
var G__26596 = chunk__26587_26591;
var G__26597 = count__26588_26592;
var G__26598 = (i__26589_26593 + 1);
seq__26586_26590 = G__26595;
chunk__26587_26591 = G__26596;
count__26588_26592 = G__26597;
i__26589_26593 = G__26598;
continue;
}
} else
{var temp__4092__auto___26599 = cljs.core.seq(seq__26586_26590);if(temp__4092__auto___26599)
{var seq__26586_26600__$1 = temp__4092__auto___26599;if(cljs.core.chunked_seq_QMARK_(seq__26586_26600__$1))
{var c__4148__auto___26601 = cljs.core.chunk_first(seq__26586_26600__$1);{
var G__26602 = cljs.core.chunk_rest(seq__26586_26600__$1);
var G__26603 = c__4148__auto___26601;
var G__26604 = cljs.core.count(c__4148__auto___26601);
var G__26605 = 0;
seq__26586_26590 = G__26602;
chunk__26587_26591 = G__26603;
count__26588_26592 = G__26604;
i__26589_26593 = G__26605;
continue;
}
} else
{var n_26606 = cljs.core.first(seq__26586_26600__$1);n_26606.removeAttribute(cljs.core.name(name));
{
var G__26607 = cljs.core.next(seq__26586_26600__$1);
var G__26608 = null;
var G__26609 = 0;
var G__26610 = 0;
seq__26586_26590 = G__26607;
chunk__26587_26591 = G__26608;
count__26588_26592 = G__26609;
i__26589_26593 = G__26610;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26612 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26612,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26612,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$186)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26613_SHARP_){var attr = attrs__$1.item(p1__26613_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26620_26626 = cljs.core.seq(styles);var chunk__26621_26627 = null;var count__26622_26628 = 0;var i__26623_26629 = 0;while(true){
if((i__26623_26629 < count__26622_26628))
{var vec__26624_26630 = chunk__26621_26627.cljs$core$IIndexed$_nth$arity$2(null,i__26623_26629);var name_26631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624_26630,0,null);var value_26632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624_26630,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26631,cljs.core.array_seq([value_26632], 0));
{
var G__26633 = seq__26620_26626;
var G__26634 = chunk__26621_26627;
var G__26635 = count__26622_26628;
var G__26636 = (i__26623_26629 + 1);
seq__26620_26626 = G__26633;
chunk__26621_26627 = G__26634;
count__26622_26628 = G__26635;
i__26623_26629 = G__26636;
continue;
}
} else
{var temp__4092__auto___26637 = cljs.core.seq(seq__26620_26626);if(temp__4092__auto___26637)
{var seq__26620_26638__$1 = temp__4092__auto___26637;if(cljs.core.chunked_seq_QMARK_(seq__26620_26638__$1))
{var c__4148__auto___26639 = cljs.core.chunk_first(seq__26620_26638__$1);{
var G__26640 = cljs.core.chunk_rest(seq__26620_26638__$1);
var G__26641 = c__4148__auto___26639;
var G__26642 = cljs.core.count(c__4148__auto___26639);
var G__26643 = 0;
seq__26620_26626 = G__26640;
chunk__26621_26627 = G__26641;
count__26622_26628 = G__26642;
i__26623_26629 = G__26643;
continue;
}
} else
{var vec__26625_26644 = cljs.core.first(seq__26620_26638__$1);var name_26645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625_26644,0,null);var value_26646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26625_26644,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26645,cljs.core.array_seq([value_26646], 0));
{
var G__26647 = cljs.core.next(seq__26620_26638__$1);
var G__26648 = null;
var G__26649 = 0;
var G__26650 = 0;
seq__26620_26626 = G__26647;
chunk__26621_26627 = G__26648;
count__26622_26628 = G__26649;
i__26623_26629 = G__26650;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26657_26663 = cljs.core.seq(attrs);var chunk__26658_26664 = null;var count__26659_26665 = 0;var i__26660_26666 = 0;while(true){
if((i__26660_26666 < count__26659_26665))
{var vec__26661_26667 = chunk__26658_26664.cljs$core$IIndexed$_nth$arity$2(null,i__26660_26666);var name_26668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26661_26667,0,null);var value_26669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26661_26667,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26668,cljs.core.array_seq([value_26669], 0));
{
var G__26670 = seq__26657_26663;
var G__26671 = chunk__26658_26664;
var G__26672 = count__26659_26665;
var G__26673 = (i__26660_26666 + 1);
seq__26657_26663 = G__26670;
chunk__26658_26664 = G__26671;
count__26659_26665 = G__26672;
i__26660_26666 = G__26673;
continue;
}
} else
{var temp__4092__auto___26674 = cljs.core.seq(seq__26657_26663);if(temp__4092__auto___26674)
{var seq__26657_26675__$1 = temp__4092__auto___26674;if(cljs.core.chunked_seq_QMARK_(seq__26657_26675__$1))
{var c__4148__auto___26676 = cljs.core.chunk_first(seq__26657_26675__$1);{
var G__26677 = cljs.core.chunk_rest(seq__26657_26675__$1);
var G__26678 = c__4148__auto___26676;
var G__26679 = cljs.core.count(c__4148__auto___26676);
var G__26680 = 0;
seq__26657_26663 = G__26677;
chunk__26658_26664 = G__26678;
count__26659_26665 = G__26679;
i__26660_26666 = G__26680;
continue;
}
} else
{var vec__26662_26681 = cljs.core.first(seq__26657_26675__$1);var name_26682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26662_26681,0,null);var value_26683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26662_26681,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26682,cljs.core.array_seq([value_26683], 0));
{
var G__26684 = cljs.core.next(seq__26657_26675__$1);
var G__26685 = null;
var G__26686 = 0;
var G__26687 = 0;
seq__26657_26663 = G__26684;
chunk__26658_26664 = G__26685;
count__26659_26665 = G__26686;
i__26660_26666 = G__26687;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26692_26696 = cljs.core.seq(domina.nodes(content));var chunk__26693_26697 = null;var count__26694_26698 = 0;var i__26695_26699 = 0;while(true){
if((i__26695_26699 < count__26694_26698))
{var node_26700 = chunk__26693_26697.cljs$core$IIndexed$_nth$arity$2(null,i__26695_26699);goog.dom.classes.add(node_26700,class$);
{
var G__26701 = seq__26692_26696;
var G__26702 = chunk__26693_26697;
var G__26703 = count__26694_26698;
var G__26704 = (i__26695_26699 + 1);
seq__26692_26696 = G__26701;
chunk__26693_26697 = G__26702;
count__26694_26698 = G__26703;
i__26695_26699 = G__26704;
continue;
}
} else
{var temp__4092__auto___26705 = cljs.core.seq(seq__26692_26696);if(temp__4092__auto___26705)
{var seq__26692_26706__$1 = temp__4092__auto___26705;if(cljs.core.chunked_seq_QMARK_(seq__26692_26706__$1))
{var c__4148__auto___26707 = cljs.core.chunk_first(seq__26692_26706__$1);{
var G__26708 = cljs.core.chunk_rest(seq__26692_26706__$1);
var G__26709 = c__4148__auto___26707;
var G__26710 = cljs.core.count(c__4148__auto___26707);
var G__26711 = 0;
seq__26692_26696 = G__26708;
chunk__26693_26697 = G__26709;
count__26694_26698 = G__26710;
i__26695_26699 = G__26711;
continue;
}
} else
{var node_26712 = cljs.core.first(seq__26692_26706__$1);goog.dom.classes.add(node_26712,class$);
{
var G__26713 = cljs.core.next(seq__26692_26706__$1);
var G__26714 = null;
var G__26715 = 0;
var G__26716 = 0;
seq__26692_26696 = G__26713;
chunk__26693_26697 = G__26714;
count__26694_26698 = G__26715;
i__26695_26699 = G__26716;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26721_26725 = cljs.core.seq(domina.nodes(content));var chunk__26722_26726 = null;var count__26723_26727 = 0;var i__26724_26728 = 0;while(true){
if((i__26724_26728 < count__26723_26727))
{var node_26729 = chunk__26722_26726.cljs$core$IIndexed$_nth$arity$2(null,i__26724_26728);goog.dom.classes.remove(node_26729,class$);
{
var G__26730 = seq__26721_26725;
var G__26731 = chunk__26722_26726;
var G__26732 = count__26723_26727;
var G__26733 = (i__26724_26728 + 1);
seq__26721_26725 = G__26730;
chunk__26722_26726 = G__26731;
count__26723_26727 = G__26732;
i__26724_26728 = G__26733;
continue;
}
} else
{var temp__4092__auto___26734 = cljs.core.seq(seq__26721_26725);if(temp__4092__auto___26734)
{var seq__26721_26735__$1 = temp__4092__auto___26734;if(cljs.core.chunked_seq_QMARK_(seq__26721_26735__$1))
{var c__4148__auto___26736 = cljs.core.chunk_first(seq__26721_26735__$1);{
var G__26737 = cljs.core.chunk_rest(seq__26721_26735__$1);
var G__26738 = c__4148__auto___26736;
var G__26739 = cljs.core.count(c__4148__auto___26736);
var G__26740 = 0;
seq__26721_26725 = G__26737;
chunk__26722_26726 = G__26738;
count__26723_26727 = G__26739;
i__26724_26728 = G__26740;
continue;
}
} else
{var node_26741 = cljs.core.first(seq__26721_26735__$1);goog.dom.classes.remove(node_26741,class$);
{
var G__26742 = cljs.core.next(seq__26721_26735__$1);
var G__26743 = null;
var G__26744 = 0;
var G__26745 = 0;
seq__26721_26725 = G__26742;
chunk__26722_26726 = G__26743;
count__26723_26727 = G__26744;
i__26724_26728 = G__26745;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26750_26754 = cljs.core.seq(domina.nodes(content));var chunk__26751_26755 = null;var count__26752_26756 = 0;var i__26753_26757 = 0;while(true){
if((i__26753_26757 < count__26752_26756))
{var node_26758 = chunk__26751_26755.cljs$core$IIndexed$_nth$arity$2(null,i__26753_26757);goog.dom.classes.toggle(node_26758,class$);
{
var G__26759 = seq__26750_26754;
var G__26760 = chunk__26751_26755;
var G__26761 = count__26752_26756;
var G__26762 = (i__26753_26757 + 1);
seq__26750_26754 = G__26759;
chunk__26751_26755 = G__26760;
count__26752_26756 = G__26761;
i__26753_26757 = G__26762;
continue;
}
} else
{var temp__4092__auto___26763 = cljs.core.seq(seq__26750_26754);if(temp__4092__auto___26763)
{var seq__26750_26764__$1 = temp__4092__auto___26763;if(cljs.core.chunked_seq_QMARK_(seq__26750_26764__$1))
{var c__4148__auto___26765 = cljs.core.chunk_first(seq__26750_26764__$1);{
var G__26766 = cljs.core.chunk_rest(seq__26750_26764__$1);
var G__26767 = c__4148__auto___26765;
var G__26768 = cljs.core.count(c__4148__auto___26765);
var G__26769 = 0;
seq__26750_26754 = G__26766;
chunk__26751_26755 = G__26767;
count__26752_26756 = G__26768;
i__26753_26757 = G__26769;
continue;
}
} else
{var node_26770 = cljs.core.first(seq__26750_26764__$1);goog.dom.classes.toggle(node_26770,class$);
{
var G__26771 = cljs.core.next(seq__26750_26764__$1);
var G__26772 = null;
var G__26773 = 0;
var G__26774 = 0;
seq__26750_26754 = G__26771;
chunk__26751_26755 = G__26772;
count__26752_26756 = G__26773;
i__26753_26757 = G__26774;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26783__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26779_26784 = cljs.core.seq(domina.nodes(content));var chunk__26780_26785 = null;var count__26781_26786 = 0;var i__26782_26787 = 0;while(true){
if((i__26782_26787 < count__26781_26786))
{var node_26788 = chunk__26780_26785.cljs$core$IIndexed$_nth$arity$2(null,i__26782_26787);goog.dom.classes.set(node_26788,classes_26783__$1);
{
var G__26789 = seq__26779_26784;
var G__26790 = chunk__26780_26785;
var G__26791 = count__26781_26786;
var G__26792 = (i__26782_26787 + 1);
seq__26779_26784 = G__26789;
chunk__26780_26785 = G__26790;
count__26781_26786 = G__26791;
i__26782_26787 = G__26792;
continue;
}
} else
{var temp__4092__auto___26793 = cljs.core.seq(seq__26779_26784);if(temp__4092__auto___26793)
{var seq__26779_26794__$1 = temp__4092__auto___26793;if(cljs.core.chunked_seq_QMARK_(seq__26779_26794__$1))
{var c__4148__auto___26795 = cljs.core.chunk_first(seq__26779_26794__$1);{
var G__26796 = cljs.core.chunk_rest(seq__26779_26794__$1);
var G__26797 = c__4148__auto___26795;
var G__26798 = cljs.core.count(c__4148__auto___26795);
var G__26799 = 0;
seq__26779_26784 = G__26796;
chunk__26780_26785 = G__26797;
count__26781_26786 = G__26798;
i__26782_26787 = G__26799;
continue;
}
} else
{var node_26800 = cljs.core.first(seq__26779_26794__$1);goog.dom.classes.set(node_26800,classes_26783__$1);
{
var G__26801 = cljs.core.next(seq__26779_26794__$1);
var G__26802 = null;
var G__26803 = 0;
var G__26804 = 0;
seq__26779_26784 = G__26801;
chunk__26780_26785 = G__26802;
count__26781_26786 = G__26803;
i__26782_26787 = G__26804;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26809_26813 = cljs.core.seq(domina.nodes(content));var chunk__26810_26814 = null;var count__26811_26815 = 0;var i__26812_26816 = 0;while(true){
if((i__26812_26816 < count__26811_26815))
{var node_26817 = chunk__26810_26814.cljs$core$IIndexed$_nth$arity$2(null,i__26812_26816);goog.dom.setTextContent(node_26817,value);
{
var G__26818 = seq__26809_26813;
var G__26819 = chunk__26810_26814;
var G__26820 = count__26811_26815;
var G__26821 = (i__26812_26816 + 1);
seq__26809_26813 = G__26818;
chunk__26810_26814 = G__26819;
count__26811_26815 = G__26820;
i__26812_26816 = G__26821;
continue;
}
} else
{var temp__4092__auto___26822 = cljs.core.seq(seq__26809_26813);if(temp__4092__auto___26822)
{var seq__26809_26823__$1 = temp__4092__auto___26822;if(cljs.core.chunked_seq_QMARK_(seq__26809_26823__$1))
{var c__4148__auto___26824 = cljs.core.chunk_first(seq__26809_26823__$1);{
var G__26825 = cljs.core.chunk_rest(seq__26809_26823__$1);
var G__26826 = c__4148__auto___26824;
var G__26827 = cljs.core.count(c__4148__auto___26824);
var G__26828 = 0;
seq__26809_26813 = G__26825;
chunk__26810_26814 = G__26826;
count__26811_26815 = G__26827;
i__26812_26816 = G__26828;
continue;
}
} else
{var node_26829 = cljs.core.first(seq__26809_26823__$1);goog.dom.setTextContent(node_26829,value);
{
var G__26830 = cljs.core.next(seq__26809_26823__$1);
var G__26831 = null;
var G__26832 = 0;
var G__26833 = 0;
seq__26809_26813 = G__26830;
chunk__26810_26814 = G__26831;
count__26811_26815 = G__26832;
i__26812_26816 = G__26833;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26838_26842 = cljs.core.seq(domina.nodes(content));var chunk__26839_26843 = null;var count__26840_26844 = 0;var i__26841_26845 = 0;while(true){
if((i__26841_26845 < count__26840_26844))
{var node_26846 = chunk__26839_26843.cljs$core$IIndexed$_nth$arity$2(null,i__26841_26845);goog.dom.forms.setValue(node_26846,value);
{
var G__26847 = seq__26838_26842;
var G__26848 = chunk__26839_26843;
var G__26849 = count__26840_26844;
var G__26850 = (i__26841_26845 + 1);
seq__26838_26842 = G__26847;
chunk__26839_26843 = G__26848;
count__26840_26844 = G__26849;
i__26841_26845 = G__26850;
continue;
}
} else
{var temp__4092__auto___26851 = cljs.core.seq(seq__26838_26842);if(temp__4092__auto___26851)
{var seq__26838_26852__$1 = temp__4092__auto___26851;if(cljs.core.chunked_seq_QMARK_(seq__26838_26852__$1))
{var c__4148__auto___26853 = cljs.core.chunk_first(seq__26838_26852__$1);{
var G__26854 = cljs.core.chunk_rest(seq__26838_26852__$1);
var G__26855 = c__4148__auto___26853;
var G__26856 = cljs.core.count(c__4148__auto___26853);
var G__26857 = 0;
seq__26838_26842 = G__26854;
chunk__26839_26843 = G__26855;
count__26840_26844 = G__26856;
i__26841_26845 = G__26857;
continue;
}
} else
{var node_26858 = cljs.core.first(seq__26838_26852__$1);goog.dom.forms.setValue(node_26858,value);
{
var G__26859 = cljs.core.next(seq__26838_26852__$1);
var G__26860 = null;
var G__26861 = 0;
var G__26862 = 0;
seq__26838_26842 = G__26859;
chunk__26839_26843 = G__26860;
count__26840_26844 = G__26861;
i__26841_26845 = G__26862;
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
{var value_26873 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26869_26874 = cljs.core.seq(domina.nodes(content));var chunk__26870_26875 = null;var count__26871_26876 = 0;var i__26872_26877 = 0;while(true){
if((i__26872_26877 < count__26871_26876))
{var node_26878 = chunk__26870_26875.cljs$core$IIndexed$_nth$arity$2(null,i__26872_26877);node_26878.innerHTML = value_26873;
{
var G__26879 = seq__26869_26874;
var G__26880 = chunk__26870_26875;
var G__26881 = count__26871_26876;
var G__26882 = (i__26872_26877 + 1);
seq__26869_26874 = G__26879;
chunk__26870_26875 = G__26880;
count__26871_26876 = G__26881;
i__26872_26877 = G__26882;
continue;
}
} else
{var temp__4092__auto___26883 = cljs.core.seq(seq__26869_26874);if(temp__4092__auto___26883)
{var seq__26869_26884__$1 = temp__4092__auto___26883;if(cljs.core.chunked_seq_QMARK_(seq__26869_26884__$1))
{var c__4148__auto___26885 = cljs.core.chunk_first(seq__26869_26884__$1);{
var G__26886 = cljs.core.chunk_rest(seq__26869_26884__$1);
var G__26887 = c__4148__auto___26885;
var G__26888 = cljs.core.count(c__4148__auto___26885);
var G__26889 = 0;
seq__26869_26874 = G__26886;
chunk__26870_26875 = G__26887;
count__26871_26876 = G__26888;
i__26872_26877 = G__26889;
continue;
}
} else
{var node_26890 = cljs.core.first(seq__26869_26884__$1);node_26890.innerHTML = value_26873;
{
var G__26891 = cljs.core.next(seq__26869_26884__$1);
var G__26892 = null;
var G__26893 = 0;
var G__26894 = 0;
seq__26869_26874 = G__26891;
chunk__26870_26875 = G__26892;
count__26871_26876 = G__26893;
i__26872_26877 = G__26894;
continue;
}
}
} else
{}
}
break;
}
}catch (e26868){if((e26868 instanceof Error))
{var e_26895 = e26868;domina.replace_children_BANG_(content,value_26873);
} else
{if(cljs.core.constant$keyword$186)
{throw e26868;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26902_26906 = cljs.core.seq(children);var chunk__26903_26907 = null;var count__26904_26908 = 0;var i__26905_26909 = 0;while(true){
if((i__26905_26909 < count__26904_26908))
{var child_26910 = chunk__26903_26907.cljs$core$IIndexed$_nth$arity$2(null,i__26905_26909);frag.appendChild(child_26910);
{
var G__26911 = seq__26902_26906;
var G__26912 = chunk__26903_26907;
var G__26913 = count__26904_26908;
var G__26914 = (i__26905_26909 + 1);
seq__26902_26906 = G__26911;
chunk__26903_26907 = G__26912;
count__26904_26908 = G__26913;
i__26905_26909 = G__26914;
continue;
}
} else
{var temp__4092__auto___26915 = cljs.core.seq(seq__26902_26906);if(temp__4092__auto___26915)
{var seq__26902_26916__$1 = temp__4092__auto___26915;if(cljs.core.chunked_seq_QMARK_(seq__26902_26916__$1))
{var c__4148__auto___26917 = cljs.core.chunk_first(seq__26902_26916__$1);{
var G__26918 = cljs.core.chunk_rest(seq__26902_26916__$1);
var G__26919 = c__4148__auto___26917;
var G__26920 = cljs.core.count(c__4148__auto___26917);
var G__26921 = 0;
seq__26902_26906 = G__26918;
chunk__26903_26907 = G__26919;
count__26904_26908 = G__26920;
i__26905_26909 = G__26921;
continue;
}
} else
{var child_26922 = cljs.core.first(seq__26902_26916__$1);frag.appendChild(child_26922);
{
var G__26923 = cljs.core.next(seq__26902_26916__$1);
var G__26924 = null;
var G__26925 = 0;
var G__26926 = 0;
seq__26902_26906 = G__26923;
chunk__26903_26907 = G__26924;
count__26904_26908 = G__26925;
i__26905_26909 = G__26926;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26896_SHARP_,p2__26897_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26896_SHARP_,p2__26897_SHARP_) : f.call(null,p1__26896_SHARP_,p2__26897_SHARP_));
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
{if((function (){var G__26928 = list_thing;if(G__26928)
{var bit__4050__auto__ = (G__26928.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26928.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26928);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26928);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$187)
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
{if((function (){var G__26929 = content;if(G__26929)
{var bit__4050__auto__ = (G__26929.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26929.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26929.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26929);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26929);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$187)
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
{if((function (){var G__26930 = content;if(G__26930)
{var bit__4050__auto__ = (G__26930.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26930.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26930.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26930);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$187)
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
