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
var opt_wrapper_26477 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26478 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$186,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26478,table_section_wrapper_26478,opt_wrapper_26477,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26479,table_section_wrapper_26478,cell_wrapper_26479,opt_wrapper_26477,table_section_wrapper_26478,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26478]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26484 = cljs.core.seq(tbody);var chunk__26485 = null;var count__26486 = 0;var i__26487 = 0;while(true){
if((i__26487 < count__26486))
{var child = chunk__26485.cljs$core$IIndexed$_nth$arity$2(null,i__26487);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26488 = seq__26484;
var G__26489 = chunk__26485;
var G__26490 = count__26486;
var G__26491 = (i__26487 + 1);
seq__26484 = G__26488;
chunk__26485 = G__26489;
count__26486 = G__26490;
i__26487 = G__26491;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26484);if(temp__4092__auto__)
{var seq__26484__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26484__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26484__$1);{
var G__26492 = cljs.core.chunk_rest(seq__26484__$1);
var G__26493 = c__4148__auto__;
var G__26494 = cljs.core.count(c__4148__auto__);
var G__26495 = 0;
seq__26484 = G__26492;
chunk__26485 = G__26493;
count__26486 = G__26494;
i__26487 = G__26495;
continue;
}
} else
{var child = cljs.core.first(seq__26484__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26496 = cljs.core.next(seq__26484__$1);
var G__26497 = null;
var G__26498 = 0;
var G__26499 = 0;
seq__26484 = G__26496;
chunk__26485 = G__26497;
count__26486 = G__26498;
i__26487 = G__26499;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26501 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26501,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26502 = wrapper.lastChild;
var G__26503 = (level - 1);
wrapper = G__26502;
level = G__26503;
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
domina.DomContent = (function (){var obj26505 = {};return obj26505;
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
log_debug.cljs$lang$applyTo = (function (arglist__26506){
var mesg = cljs.core.seq(arglist__26506);
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
log.cljs$lang$applyTo = (function (arglist__26507){
var mesg = cljs.core.seq(arglist__26507);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26508){
var contents = cljs.core.seq(arglist__26508);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26509_SHARP_){return p1__26509_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26510_SHARP_,p2__26511_SHARP_){return goog.dom.insertChildAt(p1__26510_SHARP_,p2__26511_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26510_SHARP_,p2__26511_SHARP_){return goog.dom.insertChildAt(p1__26510_SHARP_,p2__26511_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26513_SHARP_,p2__26512_SHARP_){return goog.dom.insertSiblingBefore(p2__26512_SHARP_,p1__26513_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26513_SHARP_,p2__26512_SHARP_){return goog.dom.insertSiblingBefore(p2__26512_SHARP_,p1__26513_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26515_SHARP_,p2__26514_SHARP_){return goog.dom.insertSiblingAfter(p2__26514_SHARP_,p1__26515_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26515_SHARP_,p2__26514_SHARP_){return goog.dom.insertSiblingAfter(p2__26514_SHARP_,p1__26515_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26517_SHARP_,p2__26516_SHARP_){return goog.dom.replaceNode(p2__26516_SHARP_,p1__26517_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26517_SHARP_,p2__26516_SHARP_){return goog.dom.replaceNode(p2__26516_SHARP_,p1__26517_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26522_26526 = cljs.core.seq(domina.nodes(content));var chunk__26523_26527 = null;var count__26524_26528 = 0;var i__26525_26529 = 0;while(true){
if((i__26525_26529 < count__26524_26528))
{var n_26530 = chunk__26523_26527.cljs$core$IIndexed$_nth$arity$2(null,i__26525_26529);goog.style.setStyle(n_26530,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26531 = seq__26522_26526;
var G__26532 = chunk__26523_26527;
var G__26533 = count__26524_26528;
var G__26534 = (i__26525_26529 + 1);
seq__26522_26526 = G__26531;
chunk__26523_26527 = G__26532;
count__26524_26528 = G__26533;
i__26525_26529 = G__26534;
continue;
}
} else
{var temp__4092__auto___26535 = cljs.core.seq(seq__26522_26526);if(temp__4092__auto___26535)
{var seq__26522_26536__$1 = temp__4092__auto___26535;if(cljs.core.chunked_seq_QMARK_(seq__26522_26536__$1))
{var c__4148__auto___26537 = cljs.core.chunk_first(seq__26522_26536__$1);{
var G__26538 = cljs.core.chunk_rest(seq__26522_26536__$1);
var G__26539 = c__4148__auto___26537;
var G__26540 = cljs.core.count(c__4148__auto___26537);
var G__26541 = 0;
seq__26522_26526 = G__26538;
chunk__26523_26527 = G__26539;
count__26524_26528 = G__26540;
i__26525_26529 = G__26541;
continue;
}
} else
{var n_26542 = cljs.core.first(seq__26522_26536__$1);goog.style.setStyle(n_26542,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26543 = cljs.core.next(seq__26522_26536__$1);
var G__26544 = null;
var G__26545 = 0;
var G__26546 = 0;
seq__26522_26526 = G__26543;
chunk__26523_26527 = G__26544;
count__26524_26528 = G__26545;
i__26525_26529 = G__26546;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26547){
var content = cljs.core.first(arglist__26547);
arglist__26547 = cljs.core.next(arglist__26547);
var name = cljs.core.first(arglist__26547);
var value = cljs.core.rest(arglist__26547);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26552_26556 = cljs.core.seq(domina.nodes(content));var chunk__26553_26557 = null;var count__26554_26558 = 0;var i__26555_26559 = 0;while(true){
if((i__26555_26559 < count__26554_26558))
{var n_26560 = chunk__26553_26557.cljs$core$IIndexed$_nth$arity$2(null,i__26555_26559);n_26560.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
{var n_26572 = cljs.core.first(seq__26552_26566__$1);n_26572.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26577){
var content = cljs.core.first(arglist__26577);
arglist__26577 = cljs.core.next(arglist__26577);
var name = cljs.core.first(arglist__26577);
var value = cljs.core.rest(arglist__26577);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26582_26586 = cljs.core.seq(domina.nodes(content));var chunk__26583_26587 = null;var count__26584_26588 = 0;var i__26585_26589 = 0;while(true){
if((i__26585_26589 < count__26584_26588))
{var n_26590 = chunk__26583_26587.cljs$core$IIndexed$_nth$arity$2(null,i__26585_26589);n_26590.removeAttribute(cljs.core.name(name));
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
{var n_26602 = cljs.core.first(seq__26582_26596__$1);n_26602.removeAttribute(cljs.core.name(name));
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
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26608 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26608,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$185)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26609_SHARP_){var attr = attrs__$1.item(p1__26609_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26616_26622 = cljs.core.seq(styles);var chunk__26617_26623 = null;var count__26618_26624 = 0;var i__26619_26625 = 0;while(true){
if((i__26619_26625 < count__26618_26624))
{var vec__26620_26626 = chunk__26617_26623.cljs$core$IIndexed$_nth$arity$2(null,i__26619_26625);var name_26627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620_26626,0,null);var value_26628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26620_26626,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26627,cljs.core.array_seq([value_26628], 0));
{
var G__26629 = seq__26616_26622;
var G__26630 = chunk__26617_26623;
var G__26631 = count__26618_26624;
var G__26632 = (i__26619_26625 + 1);
seq__26616_26622 = G__26629;
chunk__26617_26623 = G__26630;
count__26618_26624 = G__26631;
i__26619_26625 = G__26632;
continue;
}
} else
{var temp__4092__auto___26633 = cljs.core.seq(seq__26616_26622);if(temp__4092__auto___26633)
{var seq__26616_26634__$1 = temp__4092__auto___26633;if(cljs.core.chunked_seq_QMARK_(seq__26616_26634__$1))
{var c__4148__auto___26635 = cljs.core.chunk_first(seq__26616_26634__$1);{
var G__26636 = cljs.core.chunk_rest(seq__26616_26634__$1);
var G__26637 = c__4148__auto___26635;
var G__26638 = cljs.core.count(c__4148__auto___26635);
var G__26639 = 0;
seq__26616_26622 = G__26636;
chunk__26617_26623 = G__26637;
count__26618_26624 = G__26638;
i__26619_26625 = G__26639;
continue;
}
} else
{var vec__26621_26640 = cljs.core.first(seq__26616_26634__$1);var name_26641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621_26640,0,null);var value_26642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621_26640,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26641,cljs.core.array_seq([value_26642], 0));
{
var G__26643 = cljs.core.next(seq__26616_26634__$1);
var G__26644 = null;
var G__26645 = 0;
var G__26646 = 0;
seq__26616_26622 = G__26643;
chunk__26617_26623 = G__26644;
count__26618_26624 = G__26645;
i__26619_26625 = G__26646;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26653_26659 = cljs.core.seq(attrs);var chunk__26654_26660 = null;var count__26655_26661 = 0;var i__26656_26662 = 0;while(true){
if((i__26656_26662 < count__26655_26661))
{var vec__26657_26663 = chunk__26654_26660.cljs$core$IIndexed$_nth$arity$2(null,i__26656_26662);var name_26664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26657_26663,0,null);var value_26665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26657_26663,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26664,cljs.core.array_seq([value_26665], 0));
{
var G__26666 = seq__26653_26659;
var G__26667 = chunk__26654_26660;
var G__26668 = count__26655_26661;
var G__26669 = (i__26656_26662 + 1);
seq__26653_26659 = G__26666;
chunk__26654_26660 = G__26667;
count__26655_26661 = G__26668;
i__26656_26662 = G__26669;
continue;
}
} else
{var temp__4092__auto___26670 = cljs.core.seq(seq__26653_26659);if(temp__4092__auto___26670)
{var seq__26653_26671__$1 = temp__4092__auto___26670;if(cljs.core.chunked_seq_QMARK_(seq__26653_26671__$1))
{var c__4148__auto___26672 = cljs.core.chunk_first(seq__26653_26671__$1);{
var G__26673 = cljs.core.chunk_rest(seq__26653_26671__$1);
var G__26674 = c__4148__auto___26672;
var G__26675 = cljs.core.count(c__4148__auto___26672);
var G__26676 = 0;
seq__26653_26659 = G__26673;
chunk__26654_26660 = G__26674;
count__26655_26661 = G__26675;
i__26656_26662 = G__26676;
continue;
}
} else
{var vec__26658_26677 = cljs.core.first(seq__26653_26671__$1);var name_26678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26658_26677,0,null);var value_26679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26658_26677,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26678,cljs.core.array_seq([value_26679], 0));
{
var G__26680 = cljs.core.next(seq__26653_26671__$1);
var G__26681 = null;
var G__26682 = 0;
var G__26683 = 0;
seq__26653_26659 = G__26680;
chunk__26654_26660 = G__26681;
count__26655_26661 = G__26682;
i__26656_26662 = G__26683;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26688_26692 = cljs.core.seq(domina.nodes(content));var chunk__26689_26693 = null;var count__26690_26694 = 0;var i__26691_26695 = 0;while(true){
if((i__26691_26695 < count__26690_26694))
{var node_26696 = chunk__26689_26693.cljs$core$IIndexed$_nth$arity$2(null,i__26691_26695);goog.dom.classes.add(node_26696,class$);
{
var G__26697 = seq__26688_26692;
var G__26698 = chunk__26689_26693;
var G__26699 = count__26690_26694;
var G__26700 = (i__26691_26695 + 1);
seq__26688_26692 = G__26697;
chunk__26689_26693 = G__26698;
count__26690_26694 = G__26699;
i__26691_26695 = G__26700;
continue;
}
} else
{var temp__4092__auto___26701 = cljs.core.seq(seq__26688_26692);if(temp__4092__auto___26701)
{var seq__26688_26702__$1 = temp__4092__auto___26701;if(cljs.core.chunked_seq_QMARK_(seq__26688_26702__$1))
{var c__4148__auto___26703 = cljs.core.chunk_first(seq__26688_26702__$1);{
var G__26704 = cljs.core.chunk_rest(seq__26688_26702__$1);
var G__26705 = c__4148__auto___26703;
var G__26706 = cljs.core.count(c__4148__auto___26703);
var G__26707 = 0;
seq__26688_26692 = G__26704;
chunk__26689_26693 = G__26705;
count__26690_26694 = G__26706;
i__26691_26695 = G__26707;
continue;
}
} else
{var node_26708 = cljs.core.first(seq__26688_26702__$1);goog.dom.classes.add(node_26708,class$);
{
var G__26709 = cljs.core.next(seq__26688_26702__$1);
var G__26710 = null;
var G__26711 = 0;
var G__26712 = 0;
seq__26688_26692 = G__26709;
chunk__26689_26693 = G__26710;
count__26690_26694 = G__26711;
i__26691_26695 = G__26712;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26717_26721 = cljs.core.seq(domina.nodes(content));var chunk__26718_26722 = null;var count__26719_26723 = 0;var i__26720_26724 = 0;while(true){
if((i__26720_26724 < count__26719_26723))
{var node_26725 = chunk__26718_26722.cljs$core$IIndexed$_nth$arity$2(null,i__26720_26724);goog.dom.classes.remove(node_26725,class$);
{
var G__26726 = seq__26717_26721;
var G__26727 = chunk__26718_26722;
var G__26728 = count__26719_26723;
var G__26729 = (i__26720_26724 + 1);
seq__26717_26721 = G__26726;
chunk__26718_26722 = G__26727;
count__26719_26723 = G__26728;
i__26720_26724 = G__26729;
continue;
}
} else
{var temp__4092__auto___26730 = cljs.core.seq(seq__26717_26721);if(temp__4092__auto___26730)
{var seq__26717_26731__$1 = temp__4092__auto___26730;if(cljs.core.chunked_seq_QMARK_(seq__26717_26731__$1))
{var c__4148__auto___26732 = cljs.core.chunk_first(seq__26717_26731__$1);{
var G__26733 = cljs.core.chunk_rest(seq__26717_26731__$1);
var G__26734 = c__4148__auto___26732;
var G__26735 = cljs.core.count(c__4148__auto___26732);
var G__26736 = 0;
seq__26717_26721 = G__26733;
chunk__26718_26722 = G__26734;
count__26719_26723 = G__26735;
i__26720_26724 = G__26736;
continue;
}
} else
{var node_26737 = cljs.core.first(seq__26717_26731__$1);goog.dom.classes.remove(node_26737,class$);
{
var G__26738 = cljs.core.next(seq__26717_26731__$1);
var G__26739 = null;
var G__26740 = 0;
var G__26741 = 0;
seq__26717_26721 = G__26738;
chunk__26718_26722 = G__26739;
count__26719_26723 = G__26740;
i__26720_26724 = G__26741;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26746_26750 = cljs.core.seq(domina.nodes(content));var chunk__26747_26751 = null;var count__26748_26752 = 0;var i__26749_26753 = 0;while(true){
if((i__26749_26753 < count__26748_26752))
{var node_26754 = chunk__26747_26751.cljs$core$IIndexed$_nth$arity$2(null,i__26749_26753);goog.dom.classes.toggle(node_26754,class$);
{
var G__26755 = seq__26746_26750;
var G__26756 = chunk__26747_26751;
var G__26757 = count__26748_26752;
var G__26758 = (i__26749_26753 + 1);
seq__26746_26750 = G__26755;
chunk__26747_26751 = G__26756;
count__26748_26752 = G__26757;
i__26749_26753 = G__26758;
continue;
}
} else
{var temp__4092__auto___26759 = cljs.core.seq(seq__26746_26750);if(temp__4092__auto___26759)
{var seq__26746_26760__$1 = temp__4092__auto___26759;if(cljs.core.chunked_seq_QMARK_(seq__26746_26760__$1))
{var c__4148__auto___26761 = cljs.core.chunk_first(seq__26746_26760__$1);{
var G__26762 = cljs.core.chunk_rest(seq__26746_26760__$1);
var G__26763 = c__4148__auto___26761;
var G__26764 = cljs.core.count(c__4148__auto___26761);
var G__26765 = 0;
seq__26746_26750 = G__26762;
chunk__26747_26751 = G__26763;
count__26748_26752 = G__26764;
i__26749_26753 = G__26765;
continue;
}
} else
{var node_26766 = cljs.core.first(seq__26746_26760__$1);goog.dom.classes.toggle(node_26766,class$);
{
var G__26767 = cljs.core.next(seq__26746_26760__$1);
var G__26768 = null;
var G__26769 = 0;
var G__26770 = 0;
seq__26746_26750 = G__26767;
chunk__26747_26751 = G__26768;
count__26748_26752 = G__26769;
i__26749_26753 = G__26770;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26779__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26775_26780 = cljs.core.seq(domina.nodes(content));var chunk__26776_26781 = null;var count__26777_26782 = 0;var i__26778_26783 = 0;while(true){
if((i__26778_26783 < count__26777_26782))
{var node_26784 = chunk__26776_26781.cljs$core$IIndexed$_nth$arity$2(null,i__26778_26783);goog.dom.classes.set(node_26784,classes_26779__$1);
{
var G__26785 = seq__26775_26780;
var G__26786 = chunk__26776_26781;
var G__26787 = count__26777_26782;
var G__26788 = (i__26778_26783 + 1);
seq__26775_26780 = G__26785;
chunk__26776_26781 = G__26786;
count__26777_26782 = G__26787;
i__26778_26783 = G__26788;
continue;
}
} else
{var temp__4092__auto___26789 = cljs.core.seq(seq__26775_26780);if(temp__4092__auto___26789)
{var seq__26775_26790__$1 = temp__4092__auto___26789;if(cljs.core.chunked_seq_QMARK_(seq__26775_26790__$1))
{var c__4148__auto___26791 = cljs.core.chunk_first(seq__26775_26790__$1);{
var G__26792 = cljs.core.chunk_rest(seq__26775_26790__$1);
var G__26793 = c__4148__auto___26791;
var G__26794 = cljs.core.count(c__4148__auto___26791);
var G__26795 = 0;
seq__26775_26780 = G__26792;
chunk__26776_26781 = G__26793;
count__26777_26782 = G__26794;
i__26778_26783 = G__26795;
continue;
}
} else
{var node_26796 = cljs.core.first(seq__26775_26790__$1);goog.dom.classes.set(node_26796,classes_26779__$1);
{
var G__26797 = cljs.core.next(seq__26775_26790__$1);
var G__26798 = null;
var G__26799 = 0;
var G__26800 = 0;
seq__26775_26780 = G__26797;
chunk__26776_26781 = G__26798;
count__26777_26782 = G__26799;
i__26778_26783 = G__26800;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26805_26809 = cljs.core.seq(domina.nodes(content));var chunk__26806_26810 = null;var count__26807_26811 = 0;var i__26808_26812 = 0;while(true){
if((i__26808_26812 < count__26807_26811))
{var node_26813 = chunk__26806_26810.cljs$core$IIndexed$_nth$arity$2(null,i__26808_26812);goog.dom.setTextContent(node_26813,value);
{
var G__26814 = seq__26805_26809;
var G__26815 = chunk__26806_26810;
var G__26816 = count__26807_26811;
var G__26817 = (i__26808_26812 + 1);
seq__26805_26809 = G__26814;
chunk__26806_26810 = G__26815;
count__26807_26811 = G__26816;
i__26808_26812 = G__26817;
continue;
}
} else
{var temp__4092__auto___26818 = cljs.core.seq(seq__26805_26809);if(temp__4092__auto___26818)
{var seq__26805_26819__$1 = temp__4092__auto___26818;if(cljs.core.chunked_seq_QMARK_(seq__26805_26819__$1))
{var c__4148__auto___26820 = cljs.core.chunk_first(seq__26805_26819__$1);{
var G__26821 = cljs.core.chunk_rest(seq__26805_26819__$1);
var G__26822 = c__4148__auto___26820;
var G__26823 = cljs.core.count(c__4148__auto___26820);
var G__26824 = 0;
seq__26805_26809 = G__26821;
chunk__26806_26810 = G__26822;
count__26807_26811 = G__26823;
i__26808_26812 = G__26824;
continue;
}
} else
{var node_26825 = cljs.core.first(seq__26805_26819__$1);goog.dom.setTextContent(node_26825,value);
{
var G__26826 = cljs.core.next(seq__26805_26819__$1);
var G__26827 = null;
var G__26828 = 0;
var G__26829 = 0;
seq__26805_26809 = G__26826;
chunk__26806_26810 = G__26827;
count__26807_26811 = G__26828;
i__26808_26812 = G__26829;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26834_26838 = cljs.core.seq(domina.nodes(content));var chunk__26835_26839 = null;var count__26836_26840 = 0;var i__26837_26841 = 0;while(true){
if((i__26837_26841 < count__26836_26840))
{var node_26842 = chunk__26835_26839.cljs$core$IIndexed$_nth$arity$2(null,i__26837_26841);goog.dom.forms.setValue(node_26842,value);
{
var G__26843 = seq__26834_26838;
var G__26844 = chunk__26835_26839;
var G__26845 = count__26836_26840;
var G__26846 = (i__26837_26841 + 1);
seq__26834_26838 = G__26843;
chunk__26835_26839 = G__26844;
count__26836_26840 = G__26845;
i__26837_26841 = G__26846;
continue;
}
} else
{var temp__4092__auto___26847 = cljs.core.seq(seq__26834_26838);if(temp__4092__auto___26847)
{var seq__26834_26848__$1 = temp__4092__auto___26847;if(cljs.core.chunked_seq_QMARK_(seq__26834_26848__$1))
{var c__4148__auto___26849 = cljs.core.chunk_first(seq__26834_26848__$1);{
var G__26850 = cljs.core.chunk_rest(seq__26834_26848__$1);
var G__26851 = c__4148__auto___26849;
var G__26852 = cljs.core.count(c__4148__auto___26849);
var G__26853 = 0;
seq__26834_26838 = G__26850;
chunk__26835_26839 = G__26851;
count__26836_26840 = G__26852;
i__26837_26841 = G__26853;
continue;
}
} else
{var node_26854 = cljs.core.first(seq__26834_26848__$1);goog.dom.forms.setValue(node_26854,value);
{
var G__26855 = cljs.core.next(seq__26834_26848__$1);
var G__26856 = null;
var G__26857 = 0;
var G__26858 = 0;
seq__26834_26838 = G__26855;
chunk__26835_26839 = G__26856;
count__26836_26840 = G__26857;
i__26837_26841 = G__26858;
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
{var value_26869 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26865_26870 = cljs.core.seq(domina.nodes(content));var chunk__26866_26871 = null;var count__26867_26872 = 0;var i__26868_26873 = 0;while(true){
if((i__26868_26873 < count__26867_26872))
{var node_26874 = chunk__26866_26871.cljs$core$IIndexed$_nth$arity$2(null,i__26868_26873);node_26874.innerHTML = value_26869;
{
var G__26875 = seq__26865_26870;
var G__26876 = chunk__26866_26871;
var G__26877 = count__26867_26872;
var G__26878 = (i__26868_26873 + 1);
seq__26865_26870 = G__26875;
chunk__26866_26871 = G__26876;
count__26867_26872 = G__26877;
i__26868_26873 = G__26878;
continue;
}
} else
{var temp__4092__auto___26879 = cljs.core.seq(seq__26865_26870);if(temp__4092__auto___26879)
{var seq__26865_26880__$1 = temp__4092__auto___26879;if(cljs.core.chunked_seq_QMARK_(seq__26865_26880__$1))
{var c__4148__auto___26881 = cljs.core.chunk_first(seq__26865_26880__$1);{
var G__26882 = cljs.core.chunk_rest(seq__26865_26880__$1);
var G__26883 = c__4148__auto___26881;
var G__26884 = cljs.core.count(c__4148__auto___26881);
var G__26885 = 0;
seq__26865_26870 = G__26882;
chunk__26866_26871 = G__26883;
count__26867_26872 = G__26884;
i__26868_26873 = G__26885;
continue;
}
} else
{var node_26886 = cljs.core.first(seq__26865_26880__$1);node_26886.innerHTML = value_26869;
{
var G__26887 = cljs.core.next(seq__26865_26880__$1);
var G__26888 = null;
var G__26889 = 0;
var G__26890 = 0;
seq__26865_26870 = G__26887;
chunk__26866_26871 = G__26888;
count__26867_26872 = G__26889;
i__26868_26873 = G__26890;
continue;
}
}
} else
{}
}
break;
}
}catch (e26864){if((e26864 instanceof Error))
{var e_26891 = e26864;domina.replace_children_BANG_(content,value_26869);
} else
{if(cljs.core.constant$keyword$185)
{throw e26864;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26898_26902 = cljs.core.seq(children);var chunk__26899_26903 = null;var count__26900_26904 = 0;var i__26901_26905 = 0;while(true){
if((i__26901_26905 < count__26900_26904))
{var child_26906 = chunk__26899_26903.cljs$core$IIndexed$_nth$arity$2(null,i__26901_26905);frag.appendChild(child_26906);
{
var G__26907 = seq__26898_26902;
var G__26908 = chunk__26899_26903;
var G__26909 = count__26900_26904;
var G__26910 = (i__26901_26905 + 1);
seq__26898_26902 = G__26907;
chunk__26899_26903 = G__26908;
count__26900_26904 = G__26909;
i__26901_26905 = G__26910;
continue;
}
} else
{var temp__4092__auto___26911 = cljs.core.seq(seq__26898_26902);if(temp__4092__auto___26911)
{var seq__26898_26912__$1 = temp__4092__auto___26911;if(cljs.core.chunked_seq_QMARK_(seq__26898_26912__$1))
{var c__4148__auto___26913 = cljs.core.chunk_first(seq__26898_26912__$1);{
var G__26914 = cljs.core.chunk_rest(seq__26898_26912__$1);
var G__26915 = c__4148__auto___26913;
var G__26916 = cljs.core.count(c__4148__auto___26913);
var G__26917 = 0;
seq__26898_26902 = G__26914;
chunk__26899_26903 = G__26915;
count__26900_26904 = G__26916;
i__26901_26905 = G__26917;
continue;
}
} else
{var child_26918 = cljs.core.first(seq__26898_26912__$1);frag.appendChild(child_26918);
{
var G__26919 = cljs.core.next(seq__26898_26912__$1);
var G__26920 = null;
var G__26921 = 0;
var G__26922 = 0;
seq__26898_26902 = G__26919;
chunk__26899_26903 = G__26920;
count__26900_26904 = G__26921;
i__26901_26905 = G__26922;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26892_SHARP_,p2__26893_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26892_SHARP_,p2__26893_SHARP_) : f.call(null,p1__26892_SHARP_,p2__26893_SHARP_));
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
{if((function (){var G__26924 = list_thing;if(G__26924)
{var bit__4050__auto__ = (G__26924.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26924.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26924.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26924);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26924);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$186)
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
{if((function (){var G__26925 = content;if(G__26925)
{var bit__4050__auto__ = (G__26925.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26925.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26925.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26925);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26925);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$186)
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
{if((function (){var G__26926 = content;if(G__26926)
{var bit__4050__auto__ = (G__26926.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26926.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26926.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26926);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26926);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$186)
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
