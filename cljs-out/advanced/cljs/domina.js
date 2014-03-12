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
var opt_wrapper_39455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39456 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$541,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39456,table_section_wrapper_39456,opt_wrapper_39455,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39457,table_section_wrapper_39456,cell_wrapper_39457,opt_wrapper_39455,table_section_wrapper_39456,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39456]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39462 = cljs.core.seq(tbody);var chunk__39463 = null;var count__39464 = 0;var i__39465 = 0;while(true){
if((i__39465 < count__39464))
{var child = chunk__39463.cljs$core$IIndexed$_nth$arity$2(null,i__39465);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39466 = seq__39462;
var G__39467 = chunk__39463;
var G__39468 = count__39464;
var G__39469 = (i__39465 + 1);
seq__39462 = G__39466;
chunk__39463 = G__39467;
count__39464 = G__39468;
i__39465 = G__39469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39462);if(temp__4092__auto__)
{var seq__39462__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39462__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39462__$1);{
var G__39470 = cljs.core.chunk_rest(seq__39462__$1);
var G__39471 = c__4189__auto__;
var G__39472 = cljs.core.count(c__4189__auto__);
var G__39473 = 0;
seq__39462 = G__39470;
chunk__39463 = G__39471;
count__39464 = G__39472;
i__39465 = G__39473;
continue;
}
} else
{var child = cljs.core.first(seq__39462__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39474 = cljs.core.next(seq__39462__$1);
var G__39475 = null;
var G__39476 = 0;
var G__39477 = 0;
seq__39462 = G__39474;
chunk__39463 = G__39475;
count__39464 = G__39476;
i__39465 = G__39477;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39479 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39479,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39479,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39479,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39480 = wrapper.lastChild;
var G__39481 = (level - 1);
wrapper = G__39480;
level = G__39481;
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
domina.DomContent = (function (){var obj39483 = {};return obj39483;
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
log_debug.cljs$lang$applyTo = (function (arglist__39484){
var mesg = cljs.core.seq(arglist__39484);
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
log.cljs$lang$applyTo = (function (arglist__39485){
var mesg = cljs.core.seq(arglist__39485);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39486){
var contents = cljs.core.seq(arglist__39486);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39487_SHARP_){return p1__39487_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39488_SHARP_,p2__39489_SHARP_){return goog.dom.insertChildAt(p1__39488_SHARP_,p2__39489_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39488_SHARP_,p2__39489_SHARP_){return goog.dom.insertChildAt(p1__39488_SHARP_,p2__39489_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39491_SHARP_,p2__39490_SHARP_){return goog.dom.insertSiblingBefore(p2__39490_SHARP_,p1__39491_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39491_SHARP_,p2__39490_SHARP_){return goog.dom.insertSiblingBefore(p2__39490_SHARP_,p1__39491_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39493_SHARP_,p2__39492_SHARP_){return goog.dom.insertSiblingAfter(p2__39492_SHARP_,p1__39493_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39493_SHARP_,p2__39492_SHARP_){return goog.dom.insertSiblingAfter(p2__39492_SHARP_,p1__39493_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39495_SHARP_,p2__39494_SHARP_){return goog.dom.replaceNode(p2__39494_SHARP_,p1__39495_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39495_SHARP_,p2__39494_SHARP_){return goog.dom.replaceNode(p2__39494_SHARP_,p1__39495_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39500_39504 = cljs.core.seq(domina.nodes(content));var chunk__39501_39505 = null;var count__39502_39506 = 0;var i__39503_39507 = 0;while(true){
if((i__39503_39507 < count__39502_39506))
{var n_39508 = chunk__39501_39505.cljs$core$IIndexed$_nth$arity$2(null,i__39503_39507);goog.style.setStyle(n_39508,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39509 = seq__39500_39504;
var G__39510 = chunk__39501_39505;
var G__39511 = count__39502_39506;
var G__39512 = (i__39503_39507 + 1);
seq__39500_39504 = G__39509;
chunk__39501_39505 = G__39510;
count__39502_39506 = G__39511;
i__39503_39507 = G__39512;
continue;
}
} else
{var temp__4092__auto___39513 = cljs.core.seq(seq__39500_39504);if(temp__4092__auto___39513)
{var seq__39500_39514__$1 = temp__4092__auto___39513;if(cljs.core.chunked_seq_QMARK_(seq__39500_39514__$1))
{var c__4189__auto___39515 = cljs.core.chunk_first(seq__39500_39514__$1);{
var G__39516 = cljs.core.chunk_rest(seq__39500_39514__$1);
var G__39517 = c__4189__auto___39515;
var G__39518 = cljs.core.count(c__4189__auto___39515);
var G__39519 = 0;
seq__39500_39504 = G__39516;
chunk__39501_39505 = G__39517;
count__39502_39506 = G__39518;
i__39503_39507 = G__39519;
continue;
}
} else
{var n_39520 = cljs.core.first(seq__39500_39514__$1);goog.style.setStyle(n_39520,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39521 = cljs.core.next(seq__39500_39514__$1);
var G__39522 = null;
var G__39523 = 0;
var G__39524 = 0;
seq__39500_39504 = G__39521;
chunk__39501_39505 = G__39522;
count__39502_39506 = G__39523;
i__39503_39507 = G__39524;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39525){
var content = cljs.core.first(arglist__39525);
arglist__39525 = cljs.core.next(arglist__39525);
var name = cljs.core.first(arglist__39525);
var value = cljs.core.rest(arglist__39525);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39530_39534 = cljs.core.seq(domina.nodes(content));var chunk__39531_39535 = null;var count__39532_39536 = 0;var i__39533_39537 = 0;while(true){
if((i__39533_39537 < count__39532_39536))
{var n_39538 = chunk__39531_39535.cljs$core$IIndexed$_nth$arity$2(null,i__39533_39537);n_39538.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39539 = seq__39530_39534;
var G__39540 = chunk__39531_39535;
var G__39541 = count__39532_39536;
var G__39542 = (i__39533_39537 + 1);
seq__39530_39534 = G__39539;
chunk__39531_39535 = G__39540;
count__39532_39536 = G__39541;
i__39533_39537 = G__39542;
continue;
}
} else
{var temp__4092__auto___39543 = cljs.core.seq(seq__39530_39534);if(temp__4092__auto___39543)
{var seq__39530_39544__$1 = temp__4092__auto___39543;if(cljs.core.chunked_seq_QMARK_(seq__39530_39544__$1))
{var c__4189__auto___39545 = cljs.core.chunk_first(seq__39530_39544__$1);{
var G__39546 = cljs.core.chunk_rest(seq__39530_39544__$1);
var G__39547 = c__4189__auto___39545;
var G__39548 = cljs.core.count(c__4189__auto___39545);
var G__39549 = 0;
seq__39530_39534 = G__39546;
chunk__39531_39535 = G__39547;
count__39532_39536 = G__39548;
i__39533_39537 = G__39549;
continue;
}
} else
{var n_39550 = cljs.core.first(seq__39530_39544__$1);n_39550.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39551 = cljs.core.next(seq__39530_39544__$1);
var G__39552 = null;
var G__39553 = 0;
var G__39554 = 0;
seq__39530_39534 = G__39551;
chunk__39531_39535 = G__39552;
count__39532_39536 = G__39553;
i__39533_39537 = G__39554;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39555){
var content = cljs.core.first(arglist__39555);
arglist__39555 = cljs.core.next(arglist__39555);
var name = cljs.core.first(arglist__39555);
var value = cljs.core.rest(arglist__39555);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39560_39564 = cljs.core.seq(domina.nodes(content));var chunk__39561_39565 = null;var count__39562_39566 = 0;var i__39563_39567 = 0;while(true){
if((i__39563_39567 < count__39562_39566))
{var n_39568 = chunk__39561_39565.cljs$core$IIndexed$_nth$arity$2(null,i__39563_39567);n_39568.removeAttribute(cljs.core.name(name));
{
var G__39569 = seq__39560_39564;
var G__39570 = chunk__39561_39565;
var G__39571 = count__39562_39566;
var G__39572 = (i__39563_39567 + 1);
seq__39560_39564 = G__39569;
chunk__39561_39565 = G__39570;
count__39562_39566 = G__39571;
i__39563_39567 = G__39572;
continue;
}
} else
{var temp__4092__auto___39573 = cljs.core.seq(seq__39560_39564);if(temp__4092__auto___39573)
{var seq__39560_39574__$1 = temp__4092__auto___39573;if(cljs.core.chunked_seq_QMARK_(seq__39560_39574__$1))
{var c__4189__auto___39575 = cljs.core.chunk_first(seq__39560_39574__$1);{
var G__39576 = cljs.core.chunk_rest(seq__39560_39574__$1);
var G__39577 = c__4189__auto___39575;
var G__39578 = cljs.core.count(c__4189__auto___39575);
var G__39579 = 0;
seq__39560_39564 = G__39576;
chunk__39561_39565 = G__39577;
count__39562_39566 = G__39578;
i__39563_39567 = G__39579;
continue;
}
} else
{var n_39580 = cljs.core.first(seq__39560_39574__$1);n_39580.removeAttribute(cljs.core.name(name));
{
var G__39581 = cljs.core.next(seq__39560_39574__$1);
var G__39582 = null;
var G__39583 = 0;
var G__39584 = 0;
seq__39560_39564 = G__39581;
chunk__39561_39565 = G__39582;
count__39562_39566 = G__39583;
i__39563_39567 = G__39584;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39586 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39586,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39586,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39587_SHARP_){var attr = attrs__$1.item(p1__39587_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39594_39600 = cljs.core.seq(styles);var chunk__39595_39601 = null;var count__39596_39602 = 0;var i__39597_39603 = 0;while(true){
if((i__39597_39603 < count__39596_39602))
{var vec__39598_39604 = chunk__39595_39601.cljs$core$IIndexed$_nth$arity$2(null,i__39597_39603);var name_39605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598_39604,0,null);var value_39606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39598_39604,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39605,cljs.core.array_seq([value_39606], 0));
{
var G__39607 = seq__39594_39600;
var G__39608 = chunk__39595_39601;
var G__39609 = count__39596_39602;
var G__39610 = (i__39597_39603 + 1);
seq__39594_39600 = G__39607;
chunk__39595_39601 = G__39608;
count__39596_39602 = G__39609;
i__39597_39603 = G__39610;
continue;
}
} else
{var temp__4092__auto___39611 = cljs.core.seq(seq__39594_39600);if(temp__4092__auto___39611)
{var seq__39594_39612__$1 = temp__4092__auto___39611;if(cljs.core.chunked_seq_QMARK_(seq__39594_39612__$1))
{var c__4189__auto___39613 = cljs.core.chunk_first(seq__39594_39612__$1);{
var G__39614 = cljs.core.chunk_rest(seq__39594_39612__$1);
var G__39615 = c__4189__auto___39613;
var G__39616 = cljs.core.count(c__4189__auto___39613);
var G__39617 = 0;
seq__39594_39600 = G__39614;
chunk__39595_39601 = G__39615;
count__39596_39602 = G__39616;
i__39597_39603 = G__39617;
continue;
}
} else
{var vec__39599_39618 = cljs.core.first(seq__39594_39612__$1);var name_39619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599_39618,0,null);var value_39620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599_39618,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39619,cljs.core.array_seq([value_39620], 0));
{
var G__39621 = cljs.core.next(seq__39594_39612__$1);
var G__39622 = null;
var G__39623 = 0;
var G__39624 = 0;
seq__39594_39600 = G__39621;
chunk__39595_39601 = G__39622;
count__39596_39602 = G__39623;
i__39597_39603 = G__39624;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39631_39637 = cljs.core.seq(attrs);var chunk__39632_39638 = null;var count__39633_39639 = 0;var i__39634_39640 = 0;while(true){
if((i__39634_39640 < count__39633_39639))
{var vec__39635_39641 = chunk__39632_39638.cljs$core$IIndexed$_nth$arity$2(null,i__39634_39640);var name_39642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635_39641,0,null);var value_39643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39635_39641,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39642,cljs.core.array_seq([value_39643], 0));
{
var G__39644 = seq__39631_39637;
var G__39645 = chunk__39632_39638;
var G__39646 = count__39633_39639;
var G__39647 = (i__39634_39640 + 1);
seq__39631_39637 = G__39644;
chunk__39632_39638 = G__39645;
count__39633_39639 = G__39646;
i__39634_39640 = G__39647;
continue;
}
} else
{var temp__4092__auto___39648 = cljs.core.seq(seq__39631_39637);if(temp__4092__auto___39648)
{var seq__39631_39649__$1 = temp__4092__auto___39648;if(cljs.core.chunked_seq_QMARK_(seq__39631_39649__$1))
{var c__4189__auto___39650 = cljs.core.chunk_first(seq__39631_39649__$1);{
var G__39651 = cljs.core.chunk_rest(seq__39631_39649__$1);
var G__39652 = c__4189__auto___39650;
var G__39653 = cljs.core.count(c__4189__auto___39650);
var G__39654 = 0;
seq__39631_39637 = G__39651;
chunk__39632_39638 = G__39652;
count__39633_39639 = G__39653;
i__39634_39640 = G__39654;
continue;
}
} else
{var vec__39636_39655 = cljs.core.first(seq__39631_39649__$1);var name_39656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39636_39655,0,null);var value_39657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39636_39655,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39656,cljs.core.array_seq([value_39657], 0));
{
var G__39658 = cljs.core.next(seq__39631_39649__$1);
var G__39659 = null;
var G__39660 = 0;
var G__39661 = 0;
seq__39631_39637 = G__39658;
chunk__39632_39638 = G__39659;
count__39633_39639 = G__39660;
i__39634_39640 = G__39661;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39666_39670 = cljs.core.seq(domina.nodes(content));var chunk__39667_39671 = null;var count__39668_39672 = 0;var i__39669_39673 = 0;while(true){
if((i__39669_39673 < count__39668_39672))
{var node_39674 = chunk__39667_39671.cljs$core$IIndexed$_nth$arity$2(null,i__39669_39673);goog.dom.classes.add(node_39674,class$);
{
var G__39675 = seq__39666_39670;
var G__39676 = chunk__39667_39671;
var G__39677 = count__39668_39672;
var G__39678 = (i__39669_39673 + 1);
seq__39666_39670 = G__39675;
chunk__39667_39671 = G__39676;
count__39668_39672 = G__39677;
i__39669_39673 = G__39678;
continue;
}
} else
{var temp__4092__auto___39679 = cljs.core.seq(seq__39666_39670);if(temp__4092__auto___39679)
{var seq__39666_39680__$1 = temp__4092__auto___39679;if(cljs.core.chunked_seq_QMARK_(seq__39666_39680__$1))
{var c__4189__auto___39681 = cljs.core.chunk_first(seq__39666_39680__$1);{
var G__39682 = cljs.core.chunk_rest(seq__39666_39680__$1);
var G__39683 = c__4189__auto___39681;
var G__39684 = cljs.core.count(c__4189__auto___39681);
var G__39685 = 0;
seq__39666_39670 = G__39682;
chunk__39667_39671 = G__39683;
count__39668_39672 = G__39684;
i__39669_39673 = G__39685;
continue;
}
} else
{var node_39686 = cljs.core.first(seq__39666_39680__$1);goog.dom.classes.add(node_39686,class$);
{
var G__39687 = cljs.core.next(seq__39666_39680__$1);
var G__39688 = null;
var G__39689 = 0;
var G__39690 = 0;
seq__39666_39670 = G__39687;
chunk__39667_39671 = G__39688;
count__39668_39672 = G__39689;
i__39669_39673 = G__39690;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39695_39699 = cljs.core.seq(domina.nodes(content));var chunk__39696_39700 = null;var count__39697_39701 = 0;var i__39698_39702 = 0;while(true){
if((i__39698_39702 < count__39697_39701))
{var node_39703 = chunk__39696_39700.cljs$core$IIndexed$_nth$arity$2(null,i__39698_39702);goog.dom.classes.remove(node_39703,class$);
{
var G__39704 = seq__39695_39699;
var G__39705 = chunk__39696_39700;
var G__39706 = count__39697_39701;
var G__39707 = (i__39698_39702 + 1);
seq__39695_39699 = G__39704;
chunk__39696_39700 = G__39705;
count__39697_39701 = G__39706;
i__39698_39702 = G__39707;
continue;
}
} else
{var temp__4092__auto___39708 = cljs.core.seq(seq__39695_39699);if(temp__4092__auto___39708)
{var seq__39695_39709__$1 = temp__4092__auto___39708;if(cljs.core.chunked_seq_QMARK_(seq__39695_39709__$1))
{var c__4189__auto___39710 = cljs.core.chunk_first(seq__39695_39709__$1);{
var G__39711 = cljs.core.chunk_rest(seq__39695_39709__$1);
var G__39712 = c__4189__auto___39710;
var G__39713 = cljs.core.count(c__4189__auto___39710);
var G__39714 = 0;
seq__39695_39699 = G__39711;
chunk__39696_39700 = G__39712;
count__39697_39701 = G__39713;
i__39698_39702 = G__39714;
continue;
}
} else
{var node_39715 = cljs.core.first(seq__39695_39709__$1);goog.dom.classes.remove(node_39715,class$);
{
var G__39716 = cljs.core.next(seq__39695_39709__$1);
var G__39717 = null;
var G__39718 = 0;
var G__39719 = 0;
seq__39695_39699 = G__39716;
chunk__39696_39700 = G__39717;
count__39697_39701 = G__39718;
i__39698_39702 = G__39719;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39724_39728 = cljs.core.seq(domina.nodes(content));var chunk__39725_39729 = null;var count__39726_39730 = 0;var i__39727_39731 = 0;while(true){
if((i__39727_39731 < count__39726_39730))
{var node_39732 = chunk__39725_39729.cljs$core$IIndexed$_nth$arity$2(null,i__39727_39731);goog.dom.classes.toggle(node_39732,class$);
{
var G__39733 = seq__39724_39728;
var G__39734 = chunk__39725_39729;
var G__39735 = count__39726_39730;
var G__39736 = (i__39727_39731 + 1);
seq__39724_39728 = G__39733;
chunk__39725_39729 = G__39734;
count__39726_39730 = G__39735;
i__39727_39731 = G__39736;
continue;
}
} else
{var temp__4092__auto___39737 = cljs.core.seq(seq__39724_39728);if(temp__4092__auto___39737)
{var seq__39724_39738__$1 = temp__4092__auto___39737;if(cljs.core.chunked_seq_QMARK_(seq__39724_39738__$1))
{var c__4189__auto___39739 = cljs.core.chunk_first(seq__39724_39738__$1);{
var G__39740 = cljs.core.chunk_rest(seq__39724_39738__$1);
var G__39741 = c__4189__auto___39739;
var G__39742 = cljs.core.count(c__4189__auto___39739);
var G__39743 = 0;
seq__39724_39728 = G__39740;
chunk__39725_39729 = G__39741;
count__39726_39730 = G__39742;
i__39727_39731 = G__39743;
continue;
}
} else
{var node_39744 = cljs.core.first(seq__39724_39738__$1);goog.dom.classes.toggle(node_39744,class$);
{
var G__39745 = cljs.core.next(seq__39724_39738__$1);
var G__39746 = null;
var G__39747 = 0;
var G__39748 = 0;
seq__39724_39728 = G__39745;
chunk__39725_39729 = G__39746;
count__39726_39730 = G__39747;
i__39727_39731 = G__39748;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39757__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39753_39758 = cljs.core.seq(domina.nodes(content));var chunk__39754_39759 = null;var count__39755_39760 = 0;var i__39756_39761 = 0;while(true){
if((i__39756_39761 < count__39755_39760))
{var node_39762 = chunk__39754_39759.cljs$core$IIndexed$_nth$arity$2(null,i__39756_39761);goog.dom.classes.set(node_39762,classes_39757__$1);
{
var G__39763 = seq__39753_39758;
var G__39764 = chunk__39754_39759;
var G__39765 = count__39755_39760;
var G__39766 = (i__39756_39761 + 1);
seq__39753_39758 = G__39763;
chunk__39754_39759 = G__39764;
count__39755_39760 = G__39765;
i__39756_39761 = G__39766;
continue;
}
} else
{var temp__4092__auto___39767 = cljs.core.seq(seq__39753_39758);if(temp__4092__auto___39767)
{var seq__39753_39768__$1 = temp__4092__auto___39767;if(cljs.core.chunked_seq_QMARK_(seq__39753_39768__$1))
{var c__4189__auto___39769 = cljs.core.chunk_first(seq__39753_39768__$1);{
var G__39770 = cljs.core.chunk_rest(seq__39753_39768__$1);
var G__39771 = c__4189__auto___39769;
var G__39772 = cljs.core.count(c__4189__auto___39769);
var G__39773 = 0;
seq__39753_39758 = G__39770;
chunk__39754_39759 = G__39771;
count__39755_39760 = G__39772;
i__39756_39761 = G__39773;
continue;
}
} else
{var node_39774 = cljs.core.first(seq__39753_39768__$1);goog.dom.classes.set(node_39774,classes_39757__$1);
{
var G__39775 = cljs.core.next(seq__39753_39768__$1);
var G__39776 = null;
var G__39777 = 0;
var G__39778 = 0;
seq__39753_39758 = G__39775;
chunk__39754_39759 = G__39776;
count__39755_39760 = G__39777;
i__39756_39761 = G__39778;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39783_39787 = cljs.core.seq(domina.nodes(content));var chunk__39784_39788 = null;var count__39785_39789 = 0;var i__39786_39790 = 0;while(true){
if((i__39786_39790 < count__39785_39789))
{var node_39791 = chunk__39784_39788.cljs$core$IIndexed$_nth$arity$2(null,i__39786_39790);goog.dom.setTextContent(node_39791,value);
{
var G__39792 = seq__39783_39787;
var G__39793 = chunk__39784_39788;
var G__39794 = count__39785_39789;
var G__39795 = (i__39786_39790 + 1);
seq__39783_39787 = G__39792;
chunk__39784_39788 = G__39793;
count__39785_39789 = G__39794;
i__39786_39790 = G__39795;
continue;
}
} else
{var temp__4092__auto___39796 = cljs.core.seq(seq__39783_39787);if(temp__4092__auto___39796)
{var seq__39783_39797__$1 = temp__4092__auto___39796;if(cljs.core.chunked_seq_QMARK_(seq__39783_39797__$1))
{var c__4189__auto___39798 = cljs.core.chunk_first(seq__39783_39797__$1);{
var G__39799 = cljs.core.chunk_rest(seq__39783_39797__$1);
var G__39800 = c__4189__auto___39798;
var G__39801 = cljs.core.count(c__4189__auto___39798);
var G__39802 = 0;
seq__39783_39787 = G__39799;
chunk__39784_39788 = G__39800;
count__39785_39789 = G__39801;
i__39786_39790 = G__39802;
continue;
}
} else
{var node_39803 = cljs.core.first(seq__39783_39797__$1);goog.dom.setTextContent(node_39803,value);
{
var G__39804 = cljs.core.next(seq__39783_39797__$1);
var G__39805 = null;
var G__39806 = 0;
var G__39807 = 0;
seq__39783_39787 = G__39804;
chunk__39784_39788 = G__39805;
count__39785_39789 = G__39806;
i__39786_39790 = G__39807;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39812_39816 = cljs.core.seq(domina.nodes(content));var chunk__39813_39817 = null;var count__39814_39818 = 0;var i__39815_39819 = 0;while(true){
if((i__39815_39819 < count__39814_39818))
{var node_39820 = chunk__39813_39817.cljs$core$IIndexed$_nth$arity$2(null,i__39815_39819);goog.dom.forms.setValue(node_39820,value);
{
var G__39821 = seq__39812_39816;
var G__39822 = chunk__39813_39817;
var G__39823 = count__39814_39818;
var G__39824 = (i__39815_39819 + 1);
seq__39812_39816 = G__39821;
chunk__39813_39817 = G__39822;
count__39814_39818 = G__39823;
i__39815_39819 = G__39824;
continue;
}
} else
{var temp__4092__auto___39825 = cljs.core.seq(seq__39812_39816);if(temp__4092__auto___39825)
{var seq__39812_39826__$1 = temp__4092__auto___39825;if(cljs.core.chunked_seq_QMARK_(seq__39812_39826__$1))
{var c__4189__auto___39827 = cljs.core.chunk_first(seq__39812_39826__$1);{
var G__39828 = cljs.core.chunk_rest(seq__39812_39826__$1);
var G__39829 = c__4189__auto___39827;
var G__39830 = cljs.core.count(c__4189__auto___39827);
var G__39831 = 0;
seq__39812_39816 = G__39828;
chunk__39813_39817 = G__39829;
count__39814_39818 = G__39830;
i__39815_39819 = G__39831;
continue;
}
} else
{var node_39832 = cljs.core.first(seq__39812_39826__$1);goog.dom.forms.setValue(node_39832,value);
{
var G__39833 = cljs.core.next(seq__39812_39826__$1);
var G__39834 = null;
var G__39835 = 0;
var G__39836 = 0;
seq__39812_39816 = G__39833;
chunk__39813_39817 = G__39834;
count__39814_39818 = G__39835;
i__39815_39819 = G__39836;
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
{var value_39847 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39843_39848 = cljs.core.seq(domina.nodes(content));var chunk__39844_39849 = null;var count__39845_39850 = 0;var i__39846_39851 = 0;while(true){
if((i__39846_39851 < count__39845_39850))
{var node_39852 = chunk__39844_39849.cljs$core$IIndexed$_nth$arity$2(null,i__39846_39851);node_39852.innerHTML = value_39847;
{
var G__39853 = seq__39843_39848;
var G__39854 = chunk__39844_39849;
var G__39855 = count__39845_39850;
var G__39856 = (i__39846_39851 + 1);
seq__39843_39848 = G__39853;
chunk__39844_39849 = G__39854;
count__39845_39850 = G__39855;
i__39846_39851 = G__39856;
continue;
}
} else
{var temp__4092__auto___39857 = cljs.core.seq(seq__39843_39848);if(temp__4092__auto___39857)
{var seq__39843_39858__$1 = temp__4092__auto___39857;if(cljs.core.chunked_seq_QMARK_(seq__39843_39858__$1))
{var c__4189__auto___39859 = cljs.core.chunk_first(seq__39843_39858__$1);{
var G__39860 = cljs.core.chunk_rest(seq__39843_39858__$1);
var G__39861 = c__4189__auto___39859;
var G__39862 = cljs.core.count(c__4189__auto___39859);
var G__39863 = 0;
seq__39843_39848 = G__39860;
chunk__39844_39849 = G__39861;
count__39845_39850 = G__39862;
i__39846_39851 = G__39863;
continue;
}
} else
{var node_39864 = cljs.core.first(seq__39843_39858__$1);node_39864.innerHTML = value_39847;
{
var G__39865 = cljs.core.next(seq__39843_39858__$1);
var G__39866 = null;
var G__39867 = 0;
var G__39868 = 0;
seq__39843_39848 = G__39865;
chunk__39844_39849 = G__39866;
count__39845_39850 = G__39867;
i__39846_39851 = G__39868;
continue;
}
}
} else
{}
}
break;
}
}catch (e39842){if((e39842 instanceof Error))
{var e_39869 = e39842;domina.replace_children_BANG_(content,value_39847);
} else
{if(cljs.core.constant$keyword$540)
{throw e39842;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39876_39880 = cljs.core.seq(children);var chunk__39877_39881 = null;var count__39878_39882 = 0;var i__39879_39883 = 0;while(true){
if((i__39879_39883 < count__39878_39882))
{var child_39884 = chunk__39877_39881.cljs$core$IIndexed$_nth$arity$2(null,i__39879_39883);frag.appendChild(child_39884);
{
var G__39885 = seq__39876_39880;
var G__39886 = chunk__39877_39881;
var G__39887 = count__39878_39882;
var G__39888 = (i__39879_39883 + 1);
seq__39876_39880 = G__39885;
chunk__39877_39881 = G__39886;
count__39878_39882 = G__39887;
i__39879_39883 = G__39888;
continue;
}
} else
{var temp__4092__auto___39889 = cljs.core.seq(seq__39876_39880);if(temp__4092__auto___39889)
{var seq__39876_39890__$1 = temp__4092__auto___39889;if(cljs.core.chunked_seq_QMARK_(seq__39876_39890__$1))
{var c__4189__auto___39891 = cljs.core.chunk_first(seq__39876_39890__$1);{
var G__39892 = cljs.core.chunk_rest(seq__39876_39890__$1);
var G__39893 = c__4189__auto___39891;
var G__39894 = cljs.core.count(c__4189__auto___39891);
var G__39895 = 0;
seq__39876_39880 = G__39892;
chunk__39877_39881 = G__39893;
count__39878_39882 = G__39894;
i__39879_39883 = G__39895;
continue;
}
} else
{var child_39896 = cljs.core.first(seq__39876_39890__$1);frag.appendChild(child_39896);
{
var G__39897 = cljs.core.next(seq__39876_39890__$1);
var G__39898 = null;
var G__39899 = 0;
var G__39900 = 0;
seq__39876_39880 = G__39897;
chunk__39877_39881 = G__39898;
count__39878_39882 = G__39899;
i__39879_39883 = G__39900;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39870_SHARP_,p2__39871_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39870_SHARP_,p2__39871_SHARP_) : f.call(null,p1__39870_SHARP_,p2__39871_SHARP_));
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
{if((function (){var G__39902 = list_thing;if(G__39902)
{var bit__4091__auto__ = (G__39902.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39902.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39902);
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
{if((function (){var G__39903 = content;if(G__39903)
{var bit__4091__auto__ = (G__39903.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39903.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39903.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39903);
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
{if((function (){var G__39904 = content;if(G__39904)
{var bit__4091__auto__ = (G__39904.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39904.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39904);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39904);
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
