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
var opt_wrapper_26455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$188,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26456,table_section_wrapper_26456,opt_wrapper_26455,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26457,table_section_wrapper_26456,cell_wrapper_26457,opt_wrapper_26455,table_section_wrapper_26456,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26456]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26462 = cljs.core.seq(tbody);var chunk__26463 = null;var count__26464 = 0;var i__26465 = 0;while(true){
if((i__26465 < count__26464))
{var child = chunk__26463.cljs$core$IIndexed$_nth$arity$2(null,i__26465);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26466 = seq__26462;
var G__26467 = chunk__26463;
var G__26468 = count__26464;
var G__26469 = (i__26465 + 1);
seq__26462 = G__26466;
chunk__26463 = G__26467;
count__26464 = G__26468;
i__26465 = G__26469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26462);if(temp__4092__auto__)
{var seq__26462__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26462__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26462__$1);{
var G__26470 = cljs.core.chunk_rest(seq__26462__$1);
var G__26471 = c__4148__auto__;
var G__26472 = cljs.core.count(c__4148__auto__);
var G__26473 = 0;
seq__26462 = G__26470;
chunk__26463 = G__26471;
count__26464 = G__26472;
i__26465 = G__26473;
continue;
}
} else
{var child = cljs.core.first(seq__26462__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26474 = cljs.core.next(seq__26462__$1);
var G__26475 = null;
var G__26476 = 0;
var G__26477 = 0;
seq__26462 = G__26474;
chunk__26463 = G__26475;
count__26464 = G__26476;
i__26465 = G__26477;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26479 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26480 = wrapper.lastChild;
var G__26481 = (level - 1);
wrapper = G__26480;
level = G__26481;
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
domina.DomContent = (function (){var obj26483 = {};return obj26483;
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
log_debug.cljs$lang$applyTo = (function (arglist__26484){
var mesg = cljs.core.seq(arglist__26484);
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
log.cljs$lang$applyTo = (function (arglist__26485){
var mesg = cljs.core.seq(arglist__26485);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26486){
var contents = cljs.core.seq(arglist__26486);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26487_SHARP_){return p1__26487_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26488_SHARP_,p2__26489_SHARP_){return goog.dom.insertChildAt(p1__26488_SHARP_,p2__26489_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26488_SHARP_,p2__26489_SHARP_){return goog.dom.insertChildAt(p1__26488_SHARP_,p2__26489_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26491_SHARP_,p2__26490_SHARP_){return goog.dom.insertSiblingBefore(p2__26490_SHARP_,p1__26491_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26491_SHARP_,p2__26490_SHARP_){return goog.dom.insertSiblingBefore(p2__26490_SHARP_,p1__26491_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26493_SHARP_,p2__26492_SHARP_){return goog.dom.insertSiblingAfter(p2__26492_SHARP_,p1__26493_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26493_SHARP_,p2__26492_SHARP_){return goog.dom.insertSiblingAfter(p2__26492_SHARP_,p1__26493_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26495_SHARP_,p2__26494_SHARP_){return goog.dom.replaceNode(p2__26494_SHARP_,p1__26495_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26495_SHARP_,p2__26494_SHARP_){return goog.dom.replaceNode(p2__26494_SHARP_,p1__26495_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26500_26504 = cljs.core.seq(domina.nodes(content));var chunk__26501_26505 = null;var count__26502_26506 = 0;var i__26503_26507 = 0;while(true){
if((i__26503_26507 < count__26502_26506))
{var n_26508 = chunk__26501_26505.cljs$core$IIndexed$_nth$arity$2(null,i__26503_26507);goog.style.setStyle(n_26508,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26509 = seq__26500_26504;
var G__26510 = chunk__26501_26505;
var G__26511 = count__26502_26506;
var G__26512 = (i__26503_26507 + 1);
seq__26500_26504 = G__26509;
chunk__26501_26505 = G__26510;
count__26502_26506 = G__26511;
i__26503_26507 = G__26512;
continue;
}
} else
{var temp__4092__auto___26513 = cljs.core.seq(seq__26500_26504);if(temp__4092__auto___26513)
{var seq__26500_26514__$1 = temp__4092__auto___26513;if(cljs.core.chunked_seq_QMARK_(seq__26500_26514__$1))
{var c__4148__auto___26515 = cljs.core.chunk_first(seq__26500_26514__$1);{
var G__26516 = cljs.core.chunk_rest(seq__26500_26514__$1);
var G__26517 = c__4148__auto___26515;
var G__26518 = cljs.core.count(c__4148__auto___26515);
var G__26519 = 0;
seq__26500_26504 = G__26516;
chunk__26501_26505 = G__26517;
count__26502_26506 = G__26518;
i__26503_26507 = G__26519;
continue;
}
} else
{var n_26520 = cljs.core.first(seq__26500_26514__$1);goog.style.setStyle(n_26520,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26521 = cljs.core.next(seq__26500_26514__$1);
var G__26522 = null;
var G__26523 = 0;
var G__26524 = 0;
seq__26500_26504 = G__26521;
chunk__26501_26505 = G__26522;
count__26502_26506 = G__26523;
i__26503_26507 = G__26524;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26525){
var content = cljs.core.first(arglist__26525);
arglist__26525 = cljs.core.next(arglist__26525);
var name = cljs.core.first(arglist__26525);
var value = cljs.core.rest(arglist__26525);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26530_26534 = cljs.core.seq(domina.nodes(content));var chunk__26531_26535 = null;var count__26532_26536 = 0;var i__26533_26537 = 0;while(true){
if((i__26533_26537 < count__26532_26536))
{var n_26538 = chunk__26531_26535.cljs$core$IIndexed$_nth$arity$2(null,i__26533_26537);n_26538.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26539 = seq__26530_26534;
var G__26540 = chunk__26531_26535;
var G__26541 = count__26532_26536;
var G__26542 = (i__26533_26537 + 1);
seq__26530_26534 = G__26539;
chunk__26531_26535 = G__26540;
count__26532_26536 = G__26541;
i__26533_26537 = G__26542;
continue;
}
} else
{var temp__4092__auto___26543 = cljs.core.seq(seq__26530_26534);if(temp__4092__auto___26543)
{var seq__26530_26544__$1 = temp__4092__auto___26543;if(cljs.core.chunked_seq_QMARK_(seq__26530_26544__$1))
{var c__4148__auto___26545 = cljs.core.chunk_first(seq__26530_26544__$1);{
var G__26546 = cljs.core.chunk_rest(seq__26530_26544__$1);
var G__26547 = c__4148__auto___26545;
var G__26548 = cljs.core.count(c__4148__auto___26545);
var G__26549 = 0;
seq__26530_26534 = G__26546;
chunk__26531_26535 = G__26547;
count__26532_26536 = G__26548;
i__26533_26537 = G__26549;
continue;
}
} else
{var n_26550 = cljs.core.first(seq__26530_26544__$1);n_26550.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26551 = cljs.core.next(seq__26530_26544__$1);
var G__26552 = null;
var G__26553 = 0;
var G__26554 = 0;
seq__26530_26534 = G__26551;
chunk__26531_26535 = G__26552;
count__26532_26536 = G__26553;
i__26533_26537 = G__26554;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26555){
var content = cljs.core.first(arglist__26555);
arglist__26555 = cljs.core.next(arglist__26555);
var name = cljs.core.first(arglist__26555);
var value = cljs.core.rest(arglist__26555);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26560_26564 = cljs.core.seq(domina.nodes(content));var chunk__26561_26565 = null;var count__26562_26566 = 0;var i__26563_26567 = 0;while(true){
if((i__26563_26567 < count__26562_26566))
{var n_26568 = chunk__26561_26565.cljs$core$IIndexed$_nth$arity$2(null,i__26563_26567);n_26568.removeAttribute(cljs.core.name(name));
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
{var n_26580 = cljs.core.first(seq__26560_26574__$1);n_26580.removeAttribute(cljs.core.name(name));
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
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26586 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26586,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$187)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26587_SHARP_){var attr = attrs__$1.item(p1__26587_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26594_26600 = cljs.core.seq(styles);var chunk__26595_26601 = null;var count__26596_26602 = 0;var i__26597_26603 = 0;while(true){
if((i__26597_26603 < count__26596_26602))
{var vec__26598_26604 = chunk__26595_26601.cljs$core$IIndexed$_nth$arity$2(null,i__26597_26603);var name_26605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598_26604,0,null);var value_26606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26598_26604,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26605,cljs.core.array_seq([value_26606], 0));
{
var G__26607 = seq__26594_26600;
var G__26608 = chunk__26595_26601;
var G__26609 = count__26596_26602;
var G__26610 = (i__26597_26603 + 1);
seq__26594_26600 = G__26607;
chunk__26595_26601 = G__26608;
count__26596_26602 = G__26609;
i__26597_26603 = G__26610;
continue;
}
} else
{var temp__4092__auto___26611 = cljs.core.seq(seq__26594_26600);if(temp__4092__auto___26611)
{var seq__26594_26612__$1 = temp__4092__auto___26611;if(cljs.core.chunked_seq_QMARK_(seq__26594_26612__$1))
{var c__4148__auto___26613 = cljs.core.chunk_first(seq__26594_26612__$1);{
var G__26614 = cljs.core.chunk_rest(seq__26594_26612__$1);
var G__26615 = c__4148__auto___26613;
var G__26616 = cljs.core.count(c__4148__auto___26613);
var G__26617 = 0;
seq__26594_26600 = G__26614;
chunk__26595_26601 = G__26615;
count__26596_26602 = G__26616;
i__26597_26603 = G__26617;
continue;
}
} else
{var vec__26599_26618 = cljs.core.first(seq__26594_26612__$1);var name_26619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26599_26618,0,null);var value_26620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26599_26618,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26619,cljs.core.array_seq([value_26620], 0));
{
var G__26621 = cljs.core.next(seq__26594_26612__$1);
var G__26622 = null;
var G__26623 = 0;
var G__26624 = 0;
seq__26594_26600 = G__26621;
chunk__26595_26601 = G__26622;
count__26596_26602 = G__26623;
i__26597_26603 = G__26624;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26631_26637 = cljs.core.seq(attrs);var chunk__26632_26638 = null;var count__26633_26639 = 0;var i__26634_26640 = 0;while(true){
if((i__26634_26640 < count__26633_26639))
{var vec__26635_26641 = chunk__26632_26638.cljs$core$IIndexed$_nth$arity$2(null,i__26634_26640);var name_26642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_26641,0,null);var value_26643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26635_26641,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26642,cljs.core.array_seq([value_26643], 0));
{
var G__26644 = seq__26631_26637;
var G__26645 = chunk__26632_26638;
var G__26646 = count__26633_26639;
var G__26647 = (i__26634_26640 + 1);
seq__26631_26637 = G__26644;
chunk__26632_26638 = G__26645;
count__26633_26639 = G__26646;
i__26634_26640 = G__26647;
continue;
}
} else
{var temp__4092__auto___26648 = cljs.core.seq(seq__26631_26637);if(temp__4092__auto___26648)
{var seq__26631_26649__$1 = temp__4092__auto___26648;if(cljs.core.chunked_seq_QMARK_(seq__26631_26649__$1))
{var c__4148__auto___26650 = cljs.core.chunk_first(seq__26631_26649__$1);{
var G__26651 = cljs.core.chunk_rest(seq__26631_26649__$1);
var G__26652 = c__4148__auto___26650;
var G__26653 = cljs.core.count(c__4148__auto___26650);
var G__26654 = 0;
seq__26631_26637 = G__26651;
chunk__26632_26638 = G__26652;
count__26633_26639 = G__26653;
i__26634_26640 = G__26654;
continue;
}
} else
{var vec__26636_26655 = cljs.core.first(seq__26631_26649__$1);var name_26656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26636_26655,0,null);var value_26657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26636_26655,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26656,cljs.core.array_seq([value_26657], 0));
{
var G__26658 = cljs.core.next(seq__26631_26649__$1);
var G__26659 = null;
var G__26660 = 0;
var G__26661 = 0;
seq__26631_26637 = G__26658;
chunk__26632_26638 = G__26659;
count__26633_26639 = G__26660;
i__26634_26640 = G__26661;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26666_26670 = cljs.core.seq(domina.nodes(content));var chunk__26667_26671 = null;var count__26668_26672 = 0;var i__26669_26673 = 0;while(true){
if((i__26669_26673 < count__26668_26672))
{var node_26674 = chunk__26667_26671.cljs$core$IIndexed$_nth$arity$2(null,i__26669_26673);goog.dom.classes.add(node_26674,class$);
{
var G__26675 = seq__26666_26670;
var G__26676 = chunk__26667_26671;
var G__26677 = count__26668_26672;
var G__26678 = (i__26669_26673 + 1);
seq__26666_26670 = G__26675;
chunk__26667_26671 = G__26676;
count__26668_26672 = G__26677;
i__26669_26673 = G__26678;
continue;
}
} else
{var temp__4092__auto___26679 = cljs.core.seq(seq__26666_26670);if(temp__4092__auto___26679)
{var seq__26666_26680__$1 = temp__4092__auto___26679;if(cljs.core.chunked_seq_QMARK_(seq__26666_26680__$1))
{var c__4148__auto___26681 = cljs.core.chunk_first(seq__26666_26680__$1);{
var G__26682 = cljs.core.chunk_rest(seq__26666_26680__$1);
var G__26683 = c__4148__auto___26681;
var G__26684 = cljs.core.count(c__4148__auto___26681);
var G__26685 = 0;
seq__26666_26670 = G__26682;
chunk__26667_26671 = G__26683;
count__26668_26672 = G__26684;
i__26669_26673 = G__26685;
continue;
}
} else
{var node_26686 = cljs.core.first(seq__26666_26680__$1);goog.dom.classes.add(node_26686,class$);
{
var G__26687 = cljs.core.next(seq__26666_26680__$1);
var G__26688 = null;
var G__26689 = 0;
var G__26690 = 0;
seq__26666_26670 = G__26687;
chunk__26667_26671 = G__26688;
count__26668_26672 = G__26689;
i__26669_26673 = G__26690;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26695_26699 = cljs.core.seq(domina.nodes(content));var chunk__26696_26700 = null;var count__26697_26701 = 0;var i__26698_26702 = 0;while(true){
if((i__26698_26702 < count__26697_26701))
{var node_26703 = chunk__26696_26700.cljs$core$IIndexed$_nth$arity$2(null,i__26698_26702);goog.dom.classes.remove(node_26703,class$);
{
var G__26704 = seq__26695_26699;
var G__26705 = chunk__26696_26700;
var G__26706 = count__26697_26701;
var G__26707 = (i__26698_26702 + 1);
seq__26695_26699 = G__26704;
chunk__26696_26700 = G__26705;
count__26697_26701 = G__26706;
i__26698_26702 = G__26707;
continue;
}
} else
{var temp__4092__auto___26708 = cljs.core.seq(seq__26695_26699);if(temp__4092__auto___26708)
{var seq__26695_26709__$1 = temp__4092__auto___26708;if(cljs.core.chunked_seq_QMARK_(seq__26695_26709__$1))
{var c__4148__auto___26710 = cljs.core.chunk_first(seq__26695_26709__$1);{
var G__26711 = cljs.core.chunk_rest(seq__26695_26709__$1);
var G__26712 = c__4148__auto___26710;
var G__26713 = cljs.core.count(c__4148__auto___26710);
var G__26714 = 0;
seq__26695_26699 = G__26711;
chunk__26696_26700 = G__26712;
count__26697_26701 = G__26713;
i__26698_26702 = G__26714;
continue;
}
} else
{var node_26715 = cljs.core.first(seq__26695_26709__$1);goog.dom.classes.remove(node_26715,class$);
{
var G__26716 = cljs.core.next(seq__26695_26709__$1);
var G__26717 = null;
var G__26718 = 0;
var G__26719 = 0;
seq__26695_26699 = G__26716;
chunk__26696_26700 = G__26717;
count__26697_26701 = G__26718;
i__26698_26702 = G__26719;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26724_26728 = cljs.core.seq(domina.nodes(content));var chunk__26725_26729 = null;var count__26726_26730 = 0;var i__26727_26731 = 0;while(true){
if((i__26727_26731 < count__26726_26730))
{var node_26732 = chunk__26725_26729.cljs$core$IIndexed$_nth$arity$2(null,i__26727_26731);goog.dom.classes.toggle(node_26732,class$);
{
var G__26733 = seq__26724_26728;
var G__26734 = chunk__26725_26729;
var G__26735 = count__26726_26730;
var G__26736 = (i__26727_26731 + 1);
seq__26724_26728 = G__26733;
chunk__26725_26729 = G__26734;
count__26726_26730 = G__26735;
i__26727_26731 = G__26736;
continue;
}
} else
{var temp__4092__auto___26737 = cljs.core.seq(seq__26724_26728);if(temp__4092__auto___26737)
{var seq__26724_26738__$1 = temp__4092__auto___26737;if(cljs.core.chunked_seq_QMARK_(seq__26724_26738__$1))
{var c__4148__auto___26739 = cljs.core.chunk_first(seq__26724_26738__$1);{
var G__26740 = cljs.core.chunk_rest(seq__26724_26738__$1);
var G__26741 = c__4148__auto___26739;
var G__26742 = cljs.core.count(c__4148__auto___26739);
var G__26743 = 0;
seq__26724_26728 = G__26740;
chunk__26725_26729 = G__26741;
count__26726_26730 = G__26742;
i__26727_26731 = G__26743;
continue;
}
} else
{var node_26744 = cljs.core.first(seq__26724_26738__$1);goog.dom.classes.toggle(node_26744,class$);
{
var G__26745 = cljs.core.next(seq__26724_26738__$1);
var G__26746 = null;
var G__26747 = 0;
var G__26748 = 0;
seq__26724_26728 = G__26745;
chunk__26725_26729 = G__26746;
count__26726_26730 = G__26747;
i__26727_26731 = G__26748;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26757__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26753_26758 = cljs.core.seq(domina.nodes(content));var chunk__26754_26759 = null;var count__26755_26760 = 0;var i__26756_26761 = 0;while(true){
if((i__26756_26761 < count__26755_26760))
{var node_26762 = chunk__26754_26759.cljs$core$IIndexed$_nth$arity$2(null,i__26756_26761);goog.dom.classes.set(node_26762,classes_26757__$1);
{
var G__26763 = seq__26753_26758;
var G__26764 = chunk__26754_26759;
var G__26765 = count__26755_26760;
var G__26766 = (i__26756_26761 + 1);
seq__26753_26758 = G__26763;
chunk__26754_26759 = G__26764;
count__26755_26760 = G__26765;
i__26756_26761 = G__26766;
continue;
}
} else
{var temp__4092__auto___26767 = cljs.core.seq(seq__26753_26758);if(temp__4092__auto___26767)
{var seq__26753_26768__$1 = temp__4092__auto___26767;if(cljs.core.chunked_seq_QMARK_(seq__26753_26768__$1))
{var c__4148__auto___26769 = cljs.core.chunk_first(seq__26753_26768__$1);{
var G__26770 = cljs.core.chunk_rest(seq__26753_26768__$1);
var G__26771 = c__4148__auto___26769;
var G__26772 = cljs.core.count(c__4148__auto___26769);
var G__26773 = 0;
seq__26753_26758 = G__26770;
chunk__26754_26759 = G__26771;
count__26755_26760 = G__26772;
i__26756_26761 = G__26773;
continue;
}
} else
{var node_26774 = cljs.core.first(seq__26753_26768__$1);goog.dom.classes.set(node_26774,classes_26757__$1);
{
var G__26775 = cljs.core.next(seq__26753_26768__$1);
var G__26776 = null;
var G__26777 = 0;
var G__26778 = 0;
seq__26753_26758 = G__26775;
chunk__26754_26759 = G__26776;
count__26755_26760 = G__26777;
i__26756_26761 = G__26778;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26783_26787 = cljs.core.seq(domina.nodes(content));var chunk__26784_26788 = null;var count__26785_26789 = 0;var i__26786_26790 = 0;while(true){
if((i__26786_26790 < count__26785_26789))
{var node_26791 = chunk__26784_26788.cljs$core$IIndexed$_nth$arity$2(null,i__26786_26790);goog.dom.setTextContent(node_26791,value);
{
var G__26792 = seq__26783_26787;
var G__26793 = chunk__26784_26788;
var G__26794 = count__26785_26789;
var G__26795 = (i__26786_26790 + 1);
seq__26783_26787 = G__26792;
chunk__26784_26788 = G__26793;
count__26785_26789 = G__26794;
i__26786_26790 = G__26795;
continue;
}
} else
{var temp__4092__auto___26796 = cljs.core.seq(seq__26783_26787);if(temp__4092__auto___26796)
{var seq__26783_26797__$1 = temp__4092__auto___26796;if(cljs.core.chunked_seq_QMARK_(seq__26783_26797__$1))
{var c__4148__auto___26798 = cljs.core.chunk_first(seq__26783_26797__$1);{
var G__26799 = cljs.core.chunk_rest(seq__26783_26797__$1);
var G__26800 = c__4148__auto___26798;
var G__26801 = cljs.core.count(c__4148__auto___26798);
var G__26802 = 0;
seq__26783_26787 = G__26799;
chunk__26784_26788 = G__26800;
count__26785_26789 = G__26801;
i__26786_26790 = G__26802;
continue;
}
} else
{var node_26803 = cljs.core.first(seq__26783_26797__$1);goog.dom.setTextContent(node_26803,value);
{
var G__26804 = cljs.core.next(seq__26783_26797__$1);
var G__26805 = null;
var G__26806 = 0;
var G__26807 = 0;
seq__26783_26787 = G__26804;
chunk__26784_26788 = G__26805;
count__26785_26789 = G__26806;
i__26786_26790 = G__26807;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26812_26816 = cljs.core.seq(domina.nodes(content));var chunk__26813_26817 = null;var count__26814_26818 = 0;var i__26815_26819 = 0;while(true){
if((i__26815_26819 < count__26814_26818))
{var node_26820 = chunk__26813_26817.cljs$core$IIndexed$_nth$arity$2(null,i__26815_26819);goog.dom.forms.setValue(node_26820,value);
{
var G__26821 = seq__26812_26816;
var G__26822 = chunk__26813_26817;
var G__26823 = count__26814_26818;
var G__26824 = (i__26815_26819 + 1);
seq__26812_26816 = G__26821;
chunk__26813_26817 = G__26822;
count__26814_26818 = G__26823;
i__26815_26819 = G__26824;
continue;
}
} else
{var temp__4092__auto___26825 = cljs.core.seq(seq__26812_26816);if(temp__4092__auto___26825)
{var seq__26812_26826__$1 = temp__4092__auto___26825;if(cljs.core.chunked_seq_QMARK_(seq__26812_26826__$1))
{var c__4148__auto___26827 = cljs.core.chunk_first(seq__26812_26826__$1);{
var G__26828 = cljs.core.chunk_rest(seq__26812_26826__$1);
var G__26829 = c__4148__auto___26827;
var G__26830 = cljs.core.count(c__4148__auto___26827);
var G__26831 = 0;
seq__26812_26816 = G__26828;
chunk__26813_26817 = G__26829;
count__26814_26818 = G__26830;
i__26815_26819 = G__26831;
continue;
}
} else
{var node_26832 = cljs.core.first(seq__26812_26826__$1);goog.dom.forms.setValue(node_26832,value);
{
var G__26833 = cljs.core.next(seq__26812_26826__$1);
var G__26834 = null;
var G__26835 = 0;
var G__26836 = 0;
seq__26812_26816 = G__26833;
chunk__26813_26817 = G__26834;
count__26814_26818 = G__26835;
i__26815_26819 = G__26836;
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
{var value_26847 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26843_26848 = cljs.core.seq(domina.nodes(content));var chunk__26844_26849 = null;var count__26845_26850 = 0;var i__26846_26851 = 0;while(true){
if((i__26846_26851 < count__26845_26850))
{var node_26852 = chunk__26844_26849.cljs$core$IIndexed$_nth$arity$2(null,i__26846_26851);node_26852.innerHTML = value_26847;
{
var G__26853 = seq__26843_26848;
var G__26854 = chunk__26844_26849;
var G__26855 = count__26845_26850;
var G__26856 = (i__26846_26851 + 1);
seq__26843_26848 = G__26853;
chunk__26844_26849 = G__26854;
count__26845_26850 = G__26855;
i__26846_26851 = G__26856;
continue;
}
} else
{var temp__4092__auto___26857 = cljs.core.seq(seq__26843_26848);if(temp__4092__auto___26857)
{var seq__26843_26858__$1 = temp__4092__auto___26857;if(cljs.core.chunked_seq_QMARK_(seq__26843_26858__$1))
{var c__4148__auto___26859 = cljs.core.chunk_first(seq__26843_26858__$1);{
var G__26860 = cljs.core.chunk_rest(seq__26843_26858__$1);
var G__26861 = c__4148__auto___26859;
var G__26862 = cljs.core.count(c__4148__auto___26859);
var G__26863 = 0;
seq__26843_26848 = G__26860;
chunk__26844_26849 = G__26861;
count__26845_26850 = G__26862;
i__26846_26851 = G__26863;
continue;
}
} else
{var node_26864 = cljs.core.first(seq__26843_26858__$1);node_26864.innerHTML = value_26847;
{
var G__26865 = cljs.core.next(seq__26843_26858__$1);
var G__26866 = null;
var G__26867 = 0;
var G__26868 = 0;
seq__26843_26848 = G__26865;
chunk__26844_26849 = G__26866;
count__26845_26850 = G__26867;
i__26846_26851 = G__26868;
continue;
}
}
} else
{}
}
break;
}
}catch (e26842){if((e26842 instanceof Error))
{var e_26869 = e26842;domina.replace_children_BANG_(content,value_26847);
} else
{if(cljs.core.constant$keyword$187)
{throw e26842;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26876_26880 = cljs.core.seq(children);var chunk__26877_26881 = null;var count__26878_26882 = 0;var i__26879_26883 = 0;while(true){
if((i__26879_26883 < count__26878_26882))
{var child_26884 = chunk__26877_26881.cljs$core$IIndexed$_nth$arity$2(null,i__26879_26883);frag.appendChild(child_26884);
{
var G__26885 = seq__26876_26880;
var G__26886 = chunk__26877_26881;
var G__26887 = count__26878_26882;
var G__26888 = (i__26879_26883 + 1);
seq__26876_26880 = G__26885;
chunk__26877_26881 = G__26886;
count__26878_26882 = G__26887;
i__26879_26883 = G__26888;
continue;
}
} else
{var temp__4092__auto___26889 = cljs.core.seq(seq__26876_26880);if(temp__4092__auto___26889)
{var seq__26876_26890__$1 = temp__4092__auto___26889;if(cljs.core.chunked_seq_QMARK_(seq__26876_26890__$1))
{var c__4148__auto___26891 = cljs.core.chunk_first(seq__26876_26890__$1);{
var G__26892 = cljs.core.chunk_rest(seq__26876_26890__$1);
var G__26893 = c__4148__auto___26891;
var G__26894 = cljs.core.count(c__4148__auto___26891);
var G__26895 = 0;
seq__26876_26880 = G__26892;
chunk__26877_26881 = G__26893;
count__26878_26882 = G__26894;
i__26879_26883 = G__26895;
continue;
}
} else
{var child_26896 = cljs.core.first(seq__26876_26890__$1);frag.appendChild(child_26896);
{
var G__26897 = cljs.core.next(seq__26876_26890__$1);
var G__26898 = null;
var G__26899 = 0;
var G__26900 = 0;
seq__26876_26880 = G__26897;
chunk__26877_26881 = G__26898;
count__26878_26882 = G__26899;
i__26879_26883 = G__26900;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__26870_SHARP_,p2__26871_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__26870_SHARP_,p2__26871_SHARP_) : f.call(null,p1__26870_SHARP_,p2__26871_SHARP_));
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
{if((function (){var G__26902 = list_thing;if(G__26902)
{var bit__4050__auto__ = (G__26902.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26902.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26902);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$188)
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
{if((function (){var G__26903 = content;if(G__26903)
{var bit__4050__auto__ = (G__26903.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26903.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26903.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26903);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$188)
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
{if((function (){var G__26904 = content;if(G__26904)
{var bit__4050__auto__ = (G__26904.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__26904.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26904);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__26904);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$188)
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
