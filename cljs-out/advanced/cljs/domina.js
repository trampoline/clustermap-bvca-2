// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_71458 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_71459 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_71460 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$1111,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_71460,opt_wrapper_71458,table_section_wrapper_71459,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_71458,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_71459,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_71459,cell_wrapper_71460,table_section_wrapper_71459,table_section_wrapper_71459]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__71465 = cljs.core.seq(tbody);var chunk__71466 = null;var count__71467 = (0);var i__71468 = (0);while(true){
if((i__71468 < count__71467))
{var child = chunk__71466.cljs$core$IIndexed$_nth$arity$2(null,i__71468);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__71469 = seq__71465;
var G__71470 = chunk__71466;
var G__71471 = count__71467;
var G__71472 = (i__71468 + (1));
seq__71465 = G__71469;
chunk__71466 = G__71470;
count__71467 = G__71471;
i__71468 = G__71472;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__71465);if(temp__4126__auto__)
{var seq__71465__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__71465__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__71465__$1);{
var G__71473 = cljs.core.chunk_rest(seq__71465__$1);
var G__71474 = c__4406__auto__;
var G__71475 = cljs.core.count(c__4406__auto__);
var G__71476 = (0);
seq__71465 = G__71473;
chunk__71466 = G__71474;
count__71467 = G__71475;
i__71468 = G__71476;
continue;
}
} else
{var child = cljs.core.first(seq__71465__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__71477 = cljs.core.next(seq__71465__$1);
var G__71478 = null;
var G__71479 = (0);
var G__71480 = (0);
seq__71465 = G__71477;
chunk__71466 = G__71478;
count__71467 = G__71479;
i__71468 = G__71480;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__71482 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$1111.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71482,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71482,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71482,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__71483 = wrapper.lastChild;
var G__71484 = (level - (1));
wrapper = G__71483;
level = G__71484;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj71486 = {};return obj71486;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[(function (){var G__71490 = x__4273__auto__;return goog.typeOf(G__71490);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[(function (){var G__71494 = x__4273__auto__;return goog.typeOf(G__71494);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__71495){
var mesg = cljs.core.seq(arglist__71495);
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
log.cljs$lang$applyTo = (function (arglist__71496){
var mesg = cljs.core.seq(arglist__71496);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){var G__71498 = cljs.core.name(id);return goog.dom.getElement(G__71498);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){var G__71501 = (function (){var G__71502 = cljs.core.name(class_name);return goog.dom.getElementsByClass(G__71502);
})();return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__71501) : domina.normalize_seq.call(null,G__71501));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.array_seq([domina.nodes(content)], 0)));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__71503){
var contents = cljs.core.seq(arglist__71503);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71504_SHARP_){return p1__71504_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){var G__71508_71511 = goog.dom.appendChild;var G__71509_71512 = parent_content;var G__71510_71513 = child_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__71508_71511,G__71509_71512,G__71510_71513) : domina.apply_with_cloning.call(null,G__71508_71511,G__71509_71512,G__71510_71513));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){var G__71522_71528 = (function (p1__71514_SHARP_,p2__71515_SHARP_){var G__71525 = p1__71514_SHARP_;var G__71526 = p2__71515_SHARP_;var G__71527 = idx;return goog.dom.insertChildAt(G__71525,G__71526,G__71527);
});var G__71523_71529 = parent_content;var G__71524_71530 = child_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__71522_71528,G__71523_71529,G__71524_71530) : domina.apply_with_cloning.call(null,G__71522_71528,G__71523_71529,G__71524_71530));
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){var G__71538_71543 = (function (p1__71532_SHARP_,p2__71531_SHARP_){var G__71541 = p2__71531_SHARP_;var G__71542 = p1__71532_SHARP_;return goog.dom.insertSiblingBefore(G__71541,G__71542);
});var G__71539_71544 = content;var G__71540_71545 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__71538_71543,G__71539_71544,G__71540_71545) : domina.apply_with_cloning.call(null,G__71538_71543,G__71539_71544,G__71540_71545));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){var G__71553_71558 = (function (p1__71547_SHARP_,p2__71546_SHARP_){var G__71556 = p2__71546_SHARP_;var G__71557 = p1__71547_SHARP_;return goog.dom.insertSiblingAfter(G__71556,G__71557);
});var G__71554_71559 = content;var G__71555_71560 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__71553_71558,G__71554_71559,G__71555_71560) : domina.apply_with_cloning.call(null,G__71553_71558,G__71554_71559,G__71555_71560));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){var G__71568_71573 = (function (p1__71562_SHARP_,p2__71561_SHARP_){var G__71571 = p2__71561_SHARP_;var G__71572 = p1__71562_SHARP_;return goog.dom.replaceNode(G__71571,G__71572);
});var G__71569_71574 = old_content;var G__71570_71575 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__71568_71573,G__71569_71574,G__71570_71575) : domina.apply_with_cloning.call(null,G__71568_71573,G__71569_71574,G__71570_71575));
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
domina.style = (function style(content,name){var s = (function (){var G__71578 = domina.single_node(content);var G__71579 = cljs.core.name(name);return goog.style.getStyle(G__71578,G__71579);
})();if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
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
var set_style_BANG___delegate = function (content,name,value){var seq__71590_71600 = cljs.core.seq(domina.nodes(content));var chunk__71591_71601 = null;var count__71592_71602 = (0);var i__71593_71603 = (0);while(true){
if((i__71593_71603 < count__71592_71602))
{var n_71604 = chunk__71591_71601.cljs$core$IIndexed$_nth$arity$2(null,i__71593_71603);var G__71594_71605 = n_71604;var G__71595_71606 = cljs.core.name(name);var G__71596_71607 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);goog.style.setStyle(G__71594_71605,G__71595_71606,G__71596_71607);
{
var G__71608 = seq__71590_71600;
var G__71609 = chunk__71591_71601;
var G__71610 = count__71592_71602;
var G__71611 = (i__71593_71603 + (1));
seq__71590_71600 = G__71608;
chunk__71591_71601 = G__71609;
count__71592_71602 = G__71610;
i__71593_71603 = G__71611;
continue;
}
} else
{var temp__4126__auto___71612 = cljs.core.seq(seq__71590_71600);if(temp__4126__auto___71612)
{var seq__71590_71613__$1 = temp__4126__auto___71612;if(cljs.core.chunked_seq_QMARK_(seq__71590_71613__$1))
{var c__4406__auto___71614 = cljs.core.chunk_first(seq__71590_71613__$1);{
var G__71615 = cljs.core.chunk_rest(seq__71590_71613__$1);
var G__71616 = c__4406__auto___71614;
var G__71617 = cljs.core.count(c__4406__auto___71614);
var G__71618 = (0);
seq__71590_71600 = G__71615;
chunk__71591_71601 = G__71616;
count__71592_71602 = G__71617;
i__71593_71603 = G__71618;
continue;
}
} else
{var n_71619 = cljs.core.first(seq__71590_71613__$1);var G__71597_71620 = n_71619;var G__71598_71621 = cljs.core.name(name);var G__71599_71622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);goog.style.setStyle(G__71597_71620,G__71598_71621,G__71599_71622);
{
var G__71623 = cljs.core.next(seq__71590_71613__$1);
var G__71624 = null;
var G__71625 = (0);
var G__71626 = (0);
seq__71590_71600 = G__71623;
chunk__71591_71601 = G__71624;
count__71592_71602 = G__71625;
i__71593_71603 = G__71626;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__71627){
var content = cljs.core.first(arglist__71627);
arglist__71627 = cljs.core.next(arglist__71627);
var name = cljs.core.first(arglist__71627);
var value = cljs.core.rest(arglist__71627);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__71632_71636 = cljs.core.seq(domina.nodes(content));var chunk__71633_71637 = null;var count__71634_71638 = (0);var i__71635_71639 = (0);while(true){
if((i__71635_71639 < count__71634_71638))
{var n_71640 = chunk__71633_71637.cljs$core$IIndexed$_nth$arity$2(null,i__71635_71639);n_71640.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__71641 = seq__71632_71636;
var G__71642 = chunk__71633_71637;
var G__71643 = count__71634_71638;
var G__71644 = (i__71635_71639 + (1));
seq__71632_71636 = G__71641;
chunk__71633_71637 = G__71642;
count__71634_71638 = G__71643;
i__71635_71639 = G__71644;
continue;
}
} else
{var temp__4126__auto___71645 = cljs.core.seq(seq__71632_71636);if(temp__4126__auto___71645)
{var seq__71632_71646__$1 = temp__4126__auto___71645;if(cljs.core.chunked_seq_QMARK_(seq__71632_71646__$1))
{var c__4406__auto___71647 = cljs.core.chunk_first(seq__71632_71646__$1);{
var G__71648 = cljs.core.chunk_rest(seq__71632_71646__$1);
var G__71649 = c__4406__auto___71647;
var G__71650 = cljs.core.count(c__4406__auto___71647);
var G__71651 = (0);
seq__71632_71636 = G__71648;
chunk__71633_71637 = G__71649;
count__71634_71638 = G__71650;
i__71635_71639 = G__71651;
continue;
}
} else
{var n_71652 = cljs.core.first(seq__71632_71646__$1);n_71652.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__71653 = cljs.core.next(seq__71632_71646__$1);
var G__71654 = null;
var G__71655 = (0);
var G__71656 = (0);
seq__71632_71636 = G__71653;
chunk__71633_71637 = G__71654;
count__71634_71638 = G__71655;
i__71635_71639 = G__71656;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__71657){
var content = cljs.core.first(arglist__71657);
arglist__71657 = cljs.core.next(arglist__71657);
var name = cljs.core.first(arglist__71657);
var value = cljs.core.rest(arglist__71657);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__71662_71666 = cljs.core.seq(domina.nodes(content));var chunk__71663_71667 = null;var count__71664_71668 = (0);var i__71665_71669 = (0);while(true){
if((i__71665_71669 < count__71664_71668))
{var n_71670 = chunk__71663_71667.cljs$core$IIndexed$_nth$arity$2(null,i__71665_71669);n_71670.removeAttribute(cljs.core.name(name));
{
var G__71671 = seq__71662_71666;
var G__71672 = chunk__71663_71667;
var G__71673 = count__71664_71668;
var G__71674 = (i__71665_71669 + (1));
seq__71662_71666 = G__71671;
chunk__71663_71667 = G__71672;
count__71664_71668 = G__71673;
i__71665_71669 = G__71674;
continue;
}
} else
{var temp__4126__auto___71675 = cljs.core.seq(seq__71662_71666);if(temp__4126__auto___71675)
{var seq__71662_71676__$1 = temp__4126__auto___71675;if(cljs.core.chunked_seq_QMARK_(seq__71662_71676__$1))
{var c__4406__auto___71677 = cljs.core.chunk_first(seq__71662_71676__$1);{
var G__71678 = cljs.core.chunk_rest(seq__71662_71676__$1);
var G__71679 = c__4406__auto___71677;
var G__71680 = cljs.core.count(c__4406__auto___71677);
var G__71681 = (0);
seq__71662_71666 = G__71678;
chunk__71663_71667 = G__71679;
count__71664_71668 = G__71680;
i__71665_71669 = G__71681;
continue;
}
} else
{var n_71682 = cljs.core.first(seq__71662_71676__$1);n_71682.removeAttribute(cljs.core.name(name));
{
var G__71683 = cljs.core.next(seq__71662_71676__$1);
var G__71684 = null;
var G__71685 = (0);
var G__71686 = (0);
seq__71662_71666 = G__71683;
chunk__71663_71667 = G__71684;
count__71664_71668 = G__71685;
i__71665_71669 = G__71686;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__71688 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71688,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
return (function (p1__71689_SHARP_){var attr = attrs__$1.item(p1__71689_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__71696_71702 = cljs.core.seq(styles);var chunk__71697_71703 = null;var count__71698_71704 = (0);var i__71699_71705 = (0);while(true){
if((i__71699_71705 < count__71698_71704))
{var vec__71700_71706 = chunk__71697_71703.cljs$core$IIndexed$_nth$arity$2(null,i__71699_71705);var name_71707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71700_71706,(0),null);var value_71708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71700_71706,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_71707,cljs.core.array_seq([value_71708], 0));
{
var G__71709 = seq__71696_71702;
var G__71710 = chunk__71697_71703;
var G__71711 = count__71698_71704;
var G__71712 = (i__71699_71705 + (1));
seq__71696_71702 = G__71709;
chunk__71697_71703 = G__71710;
count__71698_71704 = G__71711;
i__71699_71705 = G__71712;
continue;
}
} else
{var temp__4126__auto___71713 = cljs.core.seq(seq__71696_71702);if(temp__4126__auto___71713)
{var seq__71696_71714__$1 = temp__4126__auto___71713;if(cljs.core.chunked_seq_QMARK_(seq__71696_71714__$1))
{var c__4406__auto___71715 = cljs.core.chunk_first(seq__71696_71714__$1);{
var G__71716 = cljs.core.chunk_rest(seq__71696_71714__$1);
var G__71717 = c__4406__auto___71715;
var G__71718 = cljs.core.count(c__4406__auto___71715);
var G__71719 = (0);
seq__71696_71702 = G__71716;
chunk__71697_71703 = G__71717;
count__71698_71704 = G__71718;
i__71699_71705 = G__71719;
continue;
}
} else
{var vec__71701_71720 = cljs.core.first(seq__71696_71714__$1);var name_71721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701_71720,(0),null);var value_71722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701_71720,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_71721,cljs.core.array_seq([value_71722], 0));
{
var G__71723 = cljs.core.next(seq__71696_71714__$1);
var G__71724 = null;
var G__71725 = (0);
var G__71726 = (0);
seq__71696_71702 = G__71723;
chunk__71697_71703 = G__71724;
count__71698_71704 = G__71725;
i__71699_71705 = G__71726;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__71733_71739 = cljs.core.seq(attrs);var chunk__71734_71740 = null;var count__71735_71741 = (0);var i__71736_71742 = (0);while(true){
if((i__71736_71742 < count__71735_71741))
{var vec__71737_71743 = chunk__71734_71740.cljs$core$IIndexed$_nth$arity$2(null,i__71736_71742);var name_71744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71737_71743,(0),null);var value_71745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71737_71743,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_71744,cljs.core.array_seq([value_71745], 0));
{
var G__71746 = seq__71733_71739;
var G__71747 = chunk__71734_71740;
var G__71748 = count__71735_71741;
var G__71749 = (i__71736_71742 + (1));
seq__71733_71739 = G__71746;
chunk__71734_71740 = G__71747;
count__71735_71741 = G__71748;
i__71736_71742 = G__71749;
continue;
}
} else
{var temp__4126__auto___71750 = cljs.core.seq(seq__71733_71739);if(temp__4126__auto___71750)
{var seq__71733_71751__$1 = temp__4126__auto___71750;if(cljs.core.chunked_seq_QMARK_(seq__71733_71751__$1))
{var c__4406__auto___71752 = cljs.core.chunk_first(seq__71733_71751__$1);{
var G__71753 = cljs.core.chunk_rest(seq__71733_71751__$1);
var G__71754 = c__4406__auto___71752;
var G__71755 = cljs.core.count(c__4406__auto___71752);
var G__71756 = (0);
seq__71733_71739 = G__71753;
chunk__71734_71740 = G__71754;
count__71735_71741 = G__71755;
i__71736_71742 = G__71756;
continue;
}
} else
{var vec__71738_71757 = cljs.core.first(seq__71733_71751__$1);var name_71758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71738_71757,(0),null);var value_71759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71738_71757,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_71758,cljs.core.array_seq([value_71759], 0));
{
var G__71760 = cljs.core.next(seq__71733_71751__$1);
var G__71761 = null;
var G__71762 = (0);
var G__71763 = (0);
seq__71733_71739 = G__71760;
chunk__71734_71740 = G__71761;
count__71735_71741 = G__71762;
i__71736_71742 = G__71763;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){var G__71766 = domina.single_node(content);var G__71767 = class$;return goog.dom.classes.has(G__71766,G__71767);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__71776_71784 = cljs.core.seq(domina.nodes(content));var chunk__71777_71785 = null;var count__71778_71786 = (0);var i__71779_71787 = (0);while(true){
if((i__71779_71787 < count__71778_71786))
{var node_71788 = chunk__71777_71785.cljs$core$IIndexed$_nth$arity$2(null,i__71779_71787);var G__71780_71789 = node_71788;var G__71781_71790 = class$;goog.dom.classes.add(G__71780_71789,G__71781_71790);
{
var G__71791 = seq__71776_71784;
var G__71792 = chunk__71777_71785;
var G__71793 = count__71778_71786;
var G__71794 = (i__71779_71787 + (1));
seq__71776_71784 = G__71791;
chunk__71777_71785 = G__71792;
count__71778_71786 = G__71793;
i__71779_71787 = G__71794;
continue;
}
} else
{var temp__4126__auto___71795 = cljs.core.seq(seq__71776_71784);if(temp__4126__auto___71795)
{var seq__71776_71796__$1 = temp__4126__auto___71795;if(cljs.core.chunked_seq_QMARK_(seq__71776_71796__$1))
{var c__4406__auto___71797 = cljs.core.chunk_first(seq__71776_71796__$1);{
var G__71798 = cljs.core.chunk_rest(seq__71776_71796__$1);
var G__71799 = c__4406__auto___71797;
var G__71800 = cljs.core.count(c__4406__auto___71797);
var G__71801 = (0);
seq__71776_71784 = G__71798;
chunk__71777_71785 = G__71799;
count__71778_71786 = G__71800;
i__71779_71787 = G__71801;
continue;
}
} else
{var node_71802 = cljs.core.first(seq__71776_71796__$1);var G__71782_71803 = node_71802;var G__71783_71804 = class$;goog.dom.classes.add(G__71782_71803,G__71783_71804);
{
var G__71805 = cljs.core.next(seq__71776_71796__$1);
var G__71806 = null;
var G__71807 = (0);
var G__71808 = (0);
seq__71776_71784 = G__71805;
chunk__71777_71785 = G__71806;
count__71778_71786 = G__71807;
i__71779_71787 = G__71808;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__71817_71825 = cljs.core.seq(domina.nodes(content));var chunk__71818_71826 = null;var count__71819_71827 = (0);var i__71820_71828 = (0);while(true){
if((i__71820_71828 < count__71819_71827))
{var node_71829 = chunk__71818_71826.cljs$core$IIndexed$_nth$arity$2(null,i__71820_71828);var G__71821_71830 = node_71829;var G__71822_71831 = class$;goog.dom.classes.remove(G__71821_71830,G__71822_71831);
{
var G__71832 = seq__71817_71825;
var G__71833 = chunk__71818_71826;
var G__71834 = count__71819_71827;
var G__71835 = (i__71820_71828 + (1));
seq__71817_71825 = G__71832;
chunk__71818_71826 = G__71833;
count__71819_71827 = G__71834;
i__71820_71828 = G__71835;
continue;
}
} else
{var temp__4126__auto___71836 = cljs.core.seq(seq__71817_71825);if(temp__4126__auto___71836)
{var seq__71817_71837__$1 = temp__4126__auto___71836;if(cljs.core.chunked_seq_QMARK_(seq__71817_71837__$1))
{var c__4406__auto___71838 = cljs.core.chunk_first(seq__71817_71837__$1);{
var G__71839 = cljs.core.chunk_rest(seq__71817_71837__$1);
var G__71840 = c__4406__auto___71838;
var G__71841 = cljs.core.count(c__4406__auto___71838);
var G__71842 = (0);
seq__71817_71825 = G__71839;
chunk__71818_71826 = G__71840;
count__71819_71827 = G__71841;
i__71820_71828 = G__71842;
continue;
}
} else
{var node_71843 = cljs.core.first(seq__71817_71837__$1);var G__71823_71844 = node_71843;var G__71824_71845 = class$;goog.dom.classes.remove(G__71823_71844,G__71824_71845);
{
var G__71846 = cljs.core.next(seq__71817_71837__$1);
var G__71847 = null;
var G__71848 = (0);
var G__71849 = (0);
seq__71817_71825 = G__71846;
chunk__71818_71826 = G__71847;
count__71819_71827 = G__71848;
i__71820_71828 = G__71849;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__71858_71866 = cljs.core.seq(domina.nodes(content));var chunk__71859_71867 = null;var count__71860_71868 = (0);var i__71861_71869 = (0);while(true){
if((i__71861_71869 < count__71860_71868))
{var node_71870 = chunk__71859_71867.cljs$core$IIndexed$_nth$arity$2(null,i__71861_71869);var G__71862_71871 = node_71870;var G__71863_71872 = class$;goog.dom.classes.toggle(G__71862_71871,G__71863_71872);
{
var G__71873 = seq__71858_71866;
var G__71874 = chunk__71859_71867;
var G__71875 = count__71860_71868;
var G__71876 = (i__71861_71869 + (1));
seq__71858_71866 = G__71873;
chunk__71859_71867 = G__71874;
count__71860_71868 = G__71875;
i__71861_71869 = G__71876;
continue;
}
} else
{var temp__4126__auto___71877 = cljs.core.seq(seq__71858_71866);if(temp__4126__auto___71877)
{var seq__71858_71878__$1 = temp__4126__auto___71877;if(cljs.core.chunked_seq_QMARK_(seq__71858_71878__$1))
{var c__4406__auto___71879 = cljs.core.chunk_first(seq__71858_71878__$1);{
var G__71880 = cljs.core.chunk_rest(seq__71858_71878__$1);
var G__71881 = c__4406__auto___71879;
var G__71882 = cljs.core.count(c__4406__auto___71879);
var G__71883 = (0);
seq__71858_71866 = G__71880;
chunk__71859_71867 = G__71881;
count__71860_71868 = G__71882;
i__71861_71869 = G__71883;
continue;
}
} else
{var node_71884 = cljs.core.first(seq__71858_71878__$1);var G__71864_71885 = node_71884;var G__71865_71886 = class$;goog.dom.classes.toggle(G__71864_71885,G__71865_71886);
{
var G__71887 = cljs.core.next(seq__71858_71878__$1);
var G__71888 = null;
var G__71889 = (0);
var G__71890 = (0);
seq__71858_71866 = G__71887;
chunk__71859_71867 = G__71888;
count__71860_71868 = G__71889;
i__71861_71869 = G__71890;
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
domina.classes = (function classes(content){return cljs.core.seq((function (){var G__71892 = domina.single_node(content);return goog.dom.classes.get(G__71892);
})());
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_71909__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__71901_71910 = cljs.core.seq(domina.nodes(content));var chunk__71902_71911 = null;var count__71903_71912 = (0);var i__71904_71913 = (0);while(true){
if((i__71904_71913 < count__71903_71912))
{var node_71914 = chunk__71902_71911.cljs$core$IIndexed$_nth$arity$2(null,i__71904_71913);var G__71905_71915 = node_71914;var G__71906_71916 = classes_71909__$1;goog.dom.classes.set(G__71905_71915,G__71906_71916);
{
var G__71917 = seq__71901_71910;
var G__71918 = chunk__71902_71911;
var G__71919 = count__71903_71912;
var G__71920 = (i__71904_71913 + (1));
seq__71901_71910 = G__71917;
chunk__71902_71911 = G__71918;
count__71903_71912 = G__71919;
i__71904_71913 = G__71920;
continue;
}
} else
{var temp__4126__auto___71921 = cljs.core.seq(seq__71901_71910);if(temp__4126__auto___71921)
{var seq__71901_71922__$1 = temp__4126__auto___71921;if(cljs.core.chunked_seq_QMARK_(seq__71901_71922__$1))
{var c__4406__auto___71923 = cljs.core.chunk_first(seq__71901_71922__$1);{
var G__71924 = cljs.core.chunk_rest(seq__71901_71922__$1);
var G__71925 = c__4406__auto___71923;
var G__71926 = cljs.core.count(c__4406__auto___71923);
var G__71927 = (0);
seq__71901_71910 = G__71924;
chunk__71902_71911 = G__71925;
count__71903_71912 = G__71926;
i__71904_71913 = G__71927;
continue;
}
} else
{var node_71928 = cljs.core.first(seq__71901_71922__$1);var G__71907_71929 = node_71928;var G__71908_71930 = classes_71909__$1;goog.dom.classes.set(G__71907_71929,G__71908_71930);
{
var G__71931 = cljs.core.next(seq__71901_71922__$1);
var G__71932 = null;
var G__71933 = (0);
var G__71934 = (0);
seq__71901_71910 = G__71931;
chunk__71902_71911 = G__71932;
count__71903_71912 = G__71933;
i__71904_71913 = G__71934;
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
domina.text = (function text(content){var G__71937 = (function (){var G__71938 = domina.single_node(content);return goog.dom.getTextContent(G__71938);
})();return goog.string.trim(G__71937);
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__71947_71955 = cljs.core.seq(domina.nodes(content));var chunk__71948_71956 = null;var count__71949_71957 = (0);var i__71950_71958 = (0);while(true){
if((i__71950_71958 < count__71949_71957))
{var node_71959 = chunk__71948_71956.cljs$core$IIndexed$_nth$arity$2(null,i__71950_71958);var G__71951_71960 = node_71959;var G__71952_71961 = value;goog.dom.setTextContent(G__71951_71960,G__71952_71961);
{
var G__71962 = seq__71947_71955;
var G__71963 = chunk__71948_71956;
var G__71964 = count__71949_71957;
var G__71965 = (i__71950_71958 + (1));
seq__71947_71955 = G__71962;
chunk__71948_71956 = G__71963;
count__71949_71957 = G__71964;
i__71950_71958 = G__71965;
continue;
}
} else
{var temp__4126__auto___71966 = cljs.core.seq(seq__71947_71955);if(temp__4126__auto___71966)
{var seq__71947_71967__$1 = temp__4126__auto___71966;if(cljs.core.chunked_seq_QMARK_(seq__71947_71967__$1))
{var c__4406__auto___71968 = cljs.core.chunk_first(seq__71947_71967__$1);{
var G__71969 = cljs.core.chunk_rest(seq__71947_71967__$1);
var G__71970 = c__4406__auto___71968;
var G__71971 = cljs.core.count(c__4406__auto___71968);
var G__71972 = (0);
seq__71947_71955 = G__71969;
chunk__71948_71956 = G__71970;
count__71949_71957 = G__71971;
i__71950_71958 = G__71972;
continue;
}
} else
{var node_71973 = cljs.core.first(seq__71947_71967__$1);var G__71953_71974 = node_71973;var G__71954_71975 = value;goog.dom.setTextContent(G__71953_71974,G__71954_71975);
{
var G__71976 = cljs.core.next(seq__71947_71967__$1);
var G__71977 = null;
var G__71978 = (0);
var G__71979 = (0);
seq__71947_71955 = G__71976;
chunk__71948_71956 = G__71977;
count__71949_71957 = G__71978;
i__71950_71958 = G__71979;
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
domina.value = (function value(content){var G__71981 = domina.single_node(content);return goog.dom.forms.getValue(G__71981);
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__71990_71998 = cljs.core.seq(domina.nodes(content));var chunk__71991_71999 = null;var count__71992_72000 = (0);var i__71993_72001 = (0);while(true){
if((i__71993_72001 < count__71992_72000))
{var node_72002 = chunk__71991_71999.cljs$core$IIndexed$_nth$arity$2(null,i__71993_72001);var G__71994_72003 = node_72002;var G__71995_72004 = value;goog.dom.forms.setValue(G__71994_72003,G__71995_72004);
{
var G__72005 = seq__71990_71998;
var G__72006 = chunk__71991_71999;
var G__72007 = count__71992_72000;
var G__72008 = (i__71993_72001 + (1));
seq__71990_71998 = G__72005;
chunk__71991_71999 = G__72006;
count__71992_72000 = G__72007;
i__71993_72001 = G__72008;
continue;
}
} else
{var temp__4126__auto___72009 = cljs.core.seq(seq__71990_71998);if(temp__4126__auto___72009)
{var seq__71990_72010__$1 = temp__4126__auto___72009;if(cljs.core.chunked_seq_QMARK_(seq__71990_72010__$1))
{var c__4406__auto___72011 = cljs.core.chunk_first(seq__71990_72010__$1);{
var G__72012 = cljs.core.chunk_rest(seq__71990_72010__$1);
var G__72013 = c__4406__auto___72011;
var G__72014 = cljs.core.count(c__4406__auto___72011);
var G__72015 = (0);
seq__71990_71998 = G__72012;
chunk__71991_71999 = G__72013;
count__71992_72000 = G__72014;
i__71993_72001 = G__72015;
continue;
}
} else
{var node_72016 = cljs.core.first(seq__71990_72010__$1);var G__71996_72017 = node_72016;var G__71997_72018 = value;goog.dom.forms.setValue(G__71996_72017,G__71997_72018);
{
var G__72019 = cljs.core.next(seq__71990_72010__$1);
var G__72020 = null;
var G__72021 = (0);
var G__72022 = (0);
seq__71990_71998 = G__72019;
chunk__71991_71999 = G__72020;
count__71992_72000 = G__72021;
i__71993_72001 = G__72022;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_72033 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__72029_72034 = cljs.core.seq(domina.nodes(content));var chunk__72030_72035 = null;var count__72031_72036 = (0);var i__72032_72037 = (0);while(true){
if((i__72032_72037 < count__72031_72036))
{var node_72038 = chunk__72030_72035.cljs$core$IIndexed$_nth$arity$2(null,i__72032_72037);node_72038.innerHTML = value_72033;
{
var G__72039 = seq__72029_72034;
var G__72040 = chunk__72030_72035;
var G__72041 = count__72031_72036;
var G__72042 = (i__72032_72037 + (1));
seq__72029_72034 = G__72039;
chunk__72030_72035 = G__72040;
count__72031_72036 = G__72041;
i__72032_72037 = G__72042;
continue;
}
} else
{var temp__4126__auto___72043 = cljs.core.seq(seq__72029_72034);if(temp__4126__auto___72043)
{var seq__72029_72044__$1 = temp__4126__auto___72043;if(cljs.core.chunked_seq_QMARK_(seq__72029_72044__$1))
{var c__4406__auto___72045 = cljs.core.chunk_first(seq__72029_72044__$1);{
var G__72046 = cljs.core.chunk_rest(seq__72029_72044__$1);
var G__72047 = c__4406__auto___72045;
var G__72048 = cljs.core.count(c__4406__auto___72045);
var G__72049 = (0);
seq__72029_72034 = G__72046;
chunk__72030_72035 = G__72047;
count__72031_72036 = G__72048;
i__72032_72037 = G__72049;
continue;
}
} else
{var node_72050 = cljs.core.first(seq__72029_72044__$1);node_72050.innerHTML = value_72033;
{
var G__72051 = cljs.core.next(seq__72029_72044__$1);
var G__72052 = null;
var G__72053 = (0);
var G__72054 = (0);
seq__72029_72034 = G__72051;
chunk__72030_72035 = G__72052;
count__72031_72036 = G__72053;
i__72032_72037 = G__72054;
continue;
}
}
} else
{}
}
break;
}
}catch (e72028){if((e72028 instanceof Error))
{var e_72055 = e72028;domina.replace_children_BANG_(content,value_72033);
} else
{throw e72028;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__72072_72080 = cljs.core.seq(children);var chunk__72073_72081 = null;var count__72074_72082 = (0);var i__72075_72083 = (0);while(true){
if((i__72075_72083 < count__72074_72082))
{var child_72084 = chunk__72073_72081.cljs$core$IIndexed$_nth$arity$2(null,i__72075_72083);frag.appendChild(child_72084);
{
var G__72085 = seq__72072_72080;
var G__72086 = chunk__72073_72081;
var G__72087 = count__72074_72082;
var G__72088 = (i__72075_72083 + (1));
seq__72072_72080 = G__72085;
chunk__72073_72081 = G__72086;
count__72074_72082 = G__72087;
i__72075_72083 = G__72088;
continue;
}
} else
{var temp__4126__auto___72089 = cljs.core.seq(seq__72072_72080);if(temp__4126__auto___72089)
{var seq__72072_72090__$1 = temp__4126__auto___72089;if(cljs.core.chunked_seq_QMARK_(seq__72072_72090__$1))
{var c__4406__auto___72091 = cljs.core.chunk_first(seq__72072_72090__$1);{
var G__72092 = cljs.core.chunk_rest(seq__72072_72090__$1);
var G__72093 = c__4406__auto___72091;
var G__72094 = cljs.core.count(c__4406__auto___72091);
var G__72095 = (0);
seq__72072_72080 = G__72092;
chunk__72073_72081 = G__72093;
count__72074_72082 = G__72094;
i__72075_72083 = G__72095;
continue;
}
} else
{var child_72096 = cljs.core.first(seq__72072_72090__$1);frag.appendChild(child_72096);
{
var G__72097 = cljs.core.next(seq__72072_72090__$1);
var G__72098 = null;
var G__72099 = (0);
var G__72100 = (0);
seq__72072_72080 = G__72097;
chunk__72073_72081 = G__72098;
count__72074_72082 = G__72099;
i__72075_72083 = G__72100;
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
{var G__72076_72101 = cljs.core.first(parents);var G__72077_72102 = first_child;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72076_72101,G__72077_72102) : f.call(null,G__72076_72101,G__72077_72102));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__72062_SHARP_,p2__72063_SHARP_){var G__72078 = p1__72062_SHARP_;var G__72079 = p2__72063_SHARP_;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72078,G__72079) : f.call(null,G__72078,G__72079));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not(obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__72112 = list_thing;if(G__72112)
{var bit__4300__auto__ = (G__72112.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__72112.cljs$core$ISeqable$))
{return true;
} else
{if((!G__72112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72112);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72112);
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
{if((function (){var G__72113 = content;if(G__72113)
{var bit__4300__auto__ = (G__72113.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__72113.cljs$core$ISeqable$))
{return true;
} else
{if((!G__72113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72113);
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
{if((function (){var G__72114 = content;if(G__72114)
{var bit__4300__auto__ = (G__72114.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__72114.cljs$core$ISeqable$))
{return true;
} else
{if((!G__72114.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__72114);
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
