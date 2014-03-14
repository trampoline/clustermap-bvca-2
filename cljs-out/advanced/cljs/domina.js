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
var opt_wrapper_39419 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_39421 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$541,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_39420,table_section_wrapper_39420,opt_wrapper_39419,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_39421,table_section_wrapper_39420,cell_wrapper_39421,opt_wrapper_39419,table_section_wrapper_39420,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_39420]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__39426 = cljs.core.seq(tbody);var chunk__39427 = null;var count__39428 = 0;var i__39429 = 0;while(true){
if((i__39429 < count__39428))
{var child = chunk__39427.cljs$core$IIndexed$_nth$arity$2(null,i__39429);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39430 = seq__39426;
var G__39431 = chunk__39427;
var G__39432 = count__39428;
var G__39433 = (i__39429 + 1);
seq__39426 = G__39430;
chunk__39427 = G__39431;
count__39428 = G__39432;
i__39429 = G__39433;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__39426);if(temp__4092__auto__)
{var seq__39426__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39426__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__39426__$1);{
var G__39434 = cljs.core.chunk_rest(seq__39426__$1);
var G__39435 = c__4189__auto__;
var G__39436 = cljs.core.count(c__4189__auto__);
var G__39437 = 0;
seq__39426 = G__39434;
chunk__39427 = G__39435;
count__39428 = G__39436;
i__39429 = G__39437;
continue;
}
} else
{var child = cljs.core.first(seq__39426__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39438 = cljs.core.next(seq__39426__$1);
var G__39439 = null;
var G__39440 = 0;
var G__39441 = 0;
seq__39426 = G__39438;
chunk__39427 = G__39439;
count__39428 = G__39440;
i__39429 = G__39441;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__39443 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$541.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39443,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39443,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39443,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__39444 = wrapper.lastChild;
var G__39445 = (level - 1);
wrapper = G__39444;
level = G__39445;
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
domina.DomContent = (function (){var obj39447 = {};return obj39447;
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
log_debug.cljs$lang$applyTo = (function (arglist__39448){
var mesg = cljs.core.seq(arglist__39448);
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
log.cljs$lang$applyTo = (function (arglist__39449){
var mesg = cljs.core.seq(arglist__39449);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39450){
var contents = cljs.core.seq(arglist__39450);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39451_SHARP_){return p1__39451_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39452_SHARP_,p2__39453_SHARP_){return goog.dom.insertChildAt(p1__39452_SHARP_,p2__39453_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__39452_SHARP_,p2__39453_SHARP_){return goog.dom.insertChildAt(p1__39452_SHARP_,p2__39453_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39455_SHARP_,p2__39454_SHARP_){return goog.dom.insertSiblingBefore(p2__39454_SHARP_,p1__39455_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39455_SHARP_,p2__39454_SHARP_){return goog.dom.insertSiblingBefore(p2__39454_SHARP_,p1__39455_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39457_SHARP_,p2__39456_SHARP_){return goog.dom.insertSiblingAfter(p2__39456_SHARP_,p1__39457_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39457_SHARP_,p2__39456_SHARP_){return goog.dom.insertSiblingAfter(p2__39456_SHARP_,p1__39457_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__39459_SHARP_,p2__39458_SHARP_){return goog.dom.replaceNode(p2__39458_SHARP_,p1__39459_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__39459_SHARP_,p2__39458_SHARP_){return goog.dom.replaceNode(p2__39458_SHARP_,p1__39459_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39464_39468 = cljs.core.seq(domina.nodes(content));var chunk__39465_39469 = null;var count__39466_39470 = 0;var i__39467_39471 = 0;while(true){
if((i__39467_39471 < count__39466_39470))
{var n_39472 = chunk__39465_39469.cljs$core$IIndexed$_nth$arity$2(null,i__39467_39471);goog.style.setStyle(n_39472,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39473 = seq__39464_39468;
var G__39474 = chunk__39465_39469;
var G__39475 = count__39466_39470;
var G__39476 = (i__39467_39471 + 1);
seq__39464_39468 = G__39473;
chunk__39465_39469 = G__39474;
count__39466_39470 = G__39475;
i__39467_39471 = G__39476;
continue;
}
} else
{var temp__4092__auto___39477 = cljs.core.seq(seq__39464_39468);if(temp__4092__auto___39477)
{var seq__39464_39478__$1 = temp__4092__auto___39477;if(cljs.core.chunked_seq_QMARK_(seq__39464_39478__$1))
{var c__4189__auto___39479 = cljs.core.chunk_first(seq__39464_39478__$1);{
var G__39480 = cljs.core.chunk_rest(seq__39464_39478__$1);
var G__39481 = c__4189__auto___39479;
var G__39482 = cljs.core.count(c__4189__auto___39479);
var G__39483 = 0;
seq__39464_39468 = G__39480;
chunk__39465_39469 = G__39481;
count__39466_39470 = G__39482;
i__39467_39471 = G__39483;
continue;
}
} else
{var n_39484 = cljs.core.first(seq__39464_39478__$1);goog.style.setStyle(n_39484,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39485 = cljs.core.next(seq__39464_39478__$1);
var G__39486 = null;
var G__39487 = 0;
var G__39488 = 0;
seq__39464_39468 = G__39485;
chunk__39465_39469 = G__39486;
count__39466_39470 = G__39487;
i__39467_39471 = G__39488;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39489){
var content = cljs.core.first(arglist__39489);
arglist__39489 = cljs.core.next(arglist__39489);
var name = cljs.core.first(arglist__39489);
var value = cljs.core.rest(arglist__39489);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39494_39498 = cljs.core.seq(domina.nodes(content));var chunk__39495_39499 = null;var count__39496_39500 = 0;var i__39497_39501 = 0;while(true){
if((i__39497_39501 < count__39496_39500))
{var n_39502 = chunk__39495_39499.cljs$core$IIndexed$_nth$arity$2(null,i__39497_39501);n_39502.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39503 = seq__39494_39498;
var G__39504 = chunk__39495_39499;
var G__39505 = count__39496_39500;
var G__39506 = (i__39497_39501 + 1);
seq__39494_39498 = G__39503;
chunk__39495_39499 = G__39504;
count__39496_39500 = G__39505;
i__39497_39501 = G__39506;
continue;
}
} else
{var temp__4092__auto___39507 = cljs.core.seq(seq__39494_39498);if(temp__4092__auto___39507)
{var seq__39494_39508__$1 = temp__4092__auto___39507;if(cljs.core.chunked_seq_QMARK_(seq__39494_39508__$1))
{var c__4189__auto___39509 = cljs.core.chunk_first(seq__39494_39508__$1);{
var G__39510 = cljs.core.chunk_rest(seq__39494_39508__$1);
var G__39511 = c__4189__auto___39509;
var G__39512 = cljs.core.count(c__4189__auto___39509);
var G__39513 = 0;
seq__39494_39498 = G__39510;
chunk__39495_39499 = G__39511;
count__39496_39500 = G__39512;
i__39497_39501 = G__39513;
continue;
}
} else
{var n_39514 = cljs.core.first(seq__39494_39508__$1);n_39514.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__39515 = cljs.core.next(seq__39494_39508__$1);
var G__39516 = null;
var G__39517 = 0;
var G__39518 = 0;
seq__39494_39498 = G__39515;
chunk__39495_39499 = G__39516;
count__39496_39500 = G__39517;
i__39497_39501 = G__39518;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39519){
var content = cljs.core.first(arglist__39519);
arglist__39519 = cljs.core.next(arglist__39519);
var name = cljs.core.first(arglist__39519);
var value = cljs.core.rest(arglist__39519);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39524_39528 = cljs.core.seq(domina.nodes(content));var chunk__39525_39529 = null;var count__39526_39530 = 0;var i__39527_39531 = 0;while(true){
if((i__39527_39531 < count__39526_39530))
{var n_39532 = chunk__39525_39529.cljs$core$IIndexed$_nth$arity$2(null,i__39527_39531);n_39532.removeAttribute(cljs.core.name(name));
{
var G__39533 = seq__39524_39528;
var G__39534 = chunk__39525_39529;
var G__39535 = count__39526_39530;
var G__39536 = (i__39527_39531 + 1);
seq__39524_39528 = G__39533;
chunk__39525_39529 = G__39534;
count__39526_39530 = G__39535;
i__39527_39531 = G__39536;
continue;
}
} else
{var temp__4092__auto___39537 = cljs.core.seq(seq__39524_39528);if(temp__4092__auto___39537)
{var seq__39524_39538__$1 = temp__4092__auto___39537;if(cljs.core.chunked_seq_QMARK_(seq__39524_39538__$1))
{var c__4189__auto___39539 = cljs.core.chunk_first(seq__39524_39538__$1);{
var G__39540 = cljs.core.chunk_rest(seq__39524_39538__$1);
var G__39541 = c__4189__auto___39539;
var G__39542 = cljs.core.count(c__4189__auto___39539);
var G__39543 = 0;
seq__39524_39528 = G__39540;
chunk__39525_39529 = G__39541;
count__39526_39530 = G__39542;
i__39527_39531 = G__39543;
continue;
}
} else
{var n_39544 = cljs.core.first(seq__39524_39538__$1);n_39544.removeAttribute(cljs.core.name(name));
{
var G__39545 = cljs.core.next(seq__39524_39538__$1);
var G__39546 = null;
var G__39547 = 0;
var G__39548 = 0;
seq__39524_39528 = G__39545;
chunk__39525_39529 = G__39546;
count__39526_39530 = G__39547;
i__39527_39531 = G__39548;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__39550 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39551_SHARP_){var attr = attrs__$1.item(p1__39551_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39558_39564 = cljs.core.seq(styles);var chunk__39559_39565 = null;var count__39560_39566 = 0;var i__39561_39567 = 0;while(true){
if((i__39561_39567 < count__39560_39566))
{var vec__39562_39568 = chunk__39559_39565.cljs$core$IIndexed$_nth$arity$2(null,i__39561_39567);var name_39569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39562_39568,0,null);var value_39570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39562_39568,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39569,cljs.core.array_seq([value_39570], 0));
{
var G__39571 = seq__39558_39564;
var G__39572 = chunk__39559_39565;
var G__39573 = count__39560_39566;
var G__39574 = (i__39561_39567 + 1);
seq__39558_39564 = G__39571;
chunk__39559_39565 = G__39572;
count__39560_39566 = G__39573;
i__39561_39567 = G__39574;
continue;
}
} else
{var temp__4092__auto___39575 = cljs.core.seq(seq__39558_39564);if(temp__4092__auto___39575)
{var seq__39558_39576__$1 = temp__4092__auto___39575;if(cljs.core.chunked_seq_QMARK_(seq__39558_39576__$1))
{var c__4189__auto___39577 = cljs.core.chunk_first(seq__39558_39576__$1);{
var G__39578 = cljs.core.chunk_rest(seq__39558_39576__$1);
var G__39579 = c__4189__auto___39577;
var G__39580 = cljs.core.count(c__4189__auto___39577);
var G__39581 = 0;
seq__39558_39564 = G__39578;
chunk__39559_39565 = G__39579;
count__39560_39566 = G__39580;
i__39561_39567 = G__39581;
continue;
}
} else
{var vec__39563_39582 = cljs.core.first(seq__39558_39576__$1);var name_39583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563_39582,0,null);var value_39584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39563_39582,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39583,cljs.core.array_seq([value_39584], 0));
{
var G__39585 = cljs.core.next(seq__39558_39576__$1);
var G__39586 = null;
var G__39587 = 0;
var G__39588 = 0;
seq__39558_39564 = G__39585;
chunk__39559_39565 = G__39586;
count__39560_39566 = G__39587;
i__39561_39567 = G__39588;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39595_39601 = cljs.core.seq(attrs);var chunk__39596_39602 = null;var count__39597_39603 = 0;var i__39598_39604 = 0;while(true){
if((i__39598_39604 < count__39597_39603))
{var vec__39599_39605 = chunk__39596_39602.cljs$core$IIndexed$_nth$arity$2(null,i__39598_39604);var name_39606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599_39605,0,null);var value_39607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599_39605,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39606,cljs.core.array_seq([value_39607], 0));
{
var G__39608 = seq__39595_39601;
var G__39609 = chunk__39596_39602;
var G__39610 = count__39597_39603;
var G__39611 = (i__39598_39604 + 1);
seq__39595_39601 = G__39608;
chunk__39596_39602 = G__39609;
count__39597_39603 = G__39610;
i__39598_39604 = G__39611;
continue;
}
} else
{var temp__4092__auto___39612 = cljs.core.seq(seq__39595_39601);if(temp__4092__auto___39612)
{var seq__39595_39613__$1 = temp__4092__auto___39612;if(cljs.core.chunked_seq_QMARK_(seq__39595_39613__$1))
{var c__4189__auto___39614 = cljs.core.chunk_first(seq__39595_39613__$1);{
var G__39615 = cljs.core.chunk_rest(seq__39595_39613__$1);
var G__39616 = c__4189__auto___39614;
var G__39617 = cljs.core.count(c__4189__auto___39614);
var G__39618 = 0;
seq__39595_39601 = G__39615;
chunk__39596_39602 = G__39616;
count__39597_39603 = G__39617;
i__39598_39604 = G__39618;
continue;
}
} else
{var vec__39600_39619 = cljs.core.first(seq__39595_39613__$1);var name_39620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600_39619,0,null);var value_39621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600_39619,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_39620,cljs.core.array_seq([value_39621], 0));
{
var G__39622 = cljs.core.next(seq__39595_39613__$1);
var G__39623 = null;
var G__39624 = 0;
var G__39625 = 0;
seq__39595_39601 = G__39622;
chunk__39596_39602 = G__39623;
count__39597_39603 = G__39624;
i__39598_39604 = G__39625;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39630_39634 = cljs.core.seq(domina.nodes(content));var chunk__39631_39635 = null;var count__39632_39636 = 0;var i__39633_39637 = 0;while(true){
if((i__39633_39637 < count__39632_39636))
{var node_39638 = chunk__39631_39635.cljs$core$IIndexed$_nth$arity$2(null,i__39633_39637);goog.dom.classes.add(node_39638,class$);
{
var G__39639 = seq__39630_39634;
var G__39640 = chunk__39631_39635;
var G__39641 = count__39632_39636;
var G__39642 = (i__39633_39637 + 1);
seq__39630_39634 = G__39639;
chunk__39631_39635 = G__39640;
count__39632_39636 = G__39641;
i__39633_39637 = G__39642;
continue;
}
} else
{var temp__4092__auto___39643 = cljs.core.seq(seq__39630_39634);if(temp__4092__auto___39643)
{var seq__39630_39644__$1 = temp__4092__auto___39643;if(cljs.core.chunked_seq_QMARK_(seq__39630_39644__$1))
{var c__4189__auto___39645 = cljs.core.chunk_first(seq__39630_39644__$1);{
var G__39646 = cljs.core.chunk_rest(seq__39630_39644__$1);
var G__39647 = c__4189__auto___39645;
var G__39648 = cljs.core.count(c__4189__auto___39645);
var G__39649 = 0;
seq__39630_39634 = G__39646;
chunk__39631_39635 = G__39647;
count__39632_39636 = G__39648;
i__39633_39637 = G__39649;
continue;
}
} else
{var node_39650 = cljs.core.first(seq__39630_39644__$1);goog.dom.classes.add(node_39650,class$);
{
var G__39651 = cljs.core.next(seq__39630_39644__$1);
var G__39652 = null;
var G__39653 = 0;
var G__39654 = 0;
seq__39630_39634 = G__39651;
chunk__39631_39635 = G__39652;
count__39632_39636 = G__39653;
i__39633_39637 = G__39654;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39659_39663 = cljs.core.seq(domina.nodes(content));var chunk__39660_39664 = null;var count__39661_39665 = 0;var i__39662_39666 = 0;while(true){
if((i__39662_39666 < count__39661_39665))
{var node_39667 = chunk__39660_39664.cljs$core$IIndexed$_nth$arity$2(null,i__39662_39666);goog.dom.classes.remove(node_39667,class$);
{
var G__39668 = seq__39659_39663;
var G__39669 = chunk__39660_39664;
var G__39670 = count__39661_39665;
var G__39671 = (i__39662_39666 + 1);
seq__39659_39663 = G__39668;
chunk__39660_39664 = G__39669;
count__39661_39665 = G__39670;
i__39662_39666 = G__39671;
continue;
}
} else
{var temp__4092__auto___39672 = cljs.core.seq(seq__39659_39663);if(temp__4092__auto___39672)
{var seq__39659_39673__$1 = temp__4092__auto___39672;if(cljs.core.chunked_seq_QMARK_(seq__39659_39673__$1))
{var c__4189__auto___39674 = cljs.core.chunk_first(seq__39659_39673__$1);{
var G__39675 = cljs.core.chunk_rest(seq__39659_39673__$1);
var G__39676 = c__4189__auto___39674;
var G__39677 = cljs.core.count(c__4189__auto___39674);
var G__39678 = 0;
seq__39659_39663 = G__39675;
chunk__39660_39664 = G__39676;
count__39661_39665 = G__39677;
i__39662_39666 = G__39678;
continue;
}
} else
{var node_39679 = cljs.core.first(seq__39659_39673__$1);goog.dom.classes.remove(node_39679,class$);
{
var G__39680 = cljs.core.next(seq__39659_39673__$1);
var G__39681 = null;
var G__39682 = 0;
var G__39683 = 0;
seq__39659_39663 = G__39680;
chunk__39660_39664 = G__39681;
count__39661_39665 = G__39682;
i__39662_39666 = G__39683;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39688_39692 = cljs.core.seq(domina.nodes(content));var chunk__39689_39693 = null;var count__39690_39694 = 0;var i__39691_39695 = 0;while(true){
if((i__39691_39695 < count__39690_39694))
{var node_39696 = chunk__39689_39693.cljs$core$IIndexed$_nth$arity$2(null,i__39691_39695);goog.dom.classes.toggle(node_39696,class$);
{
var G__39697 = seq__39688_39692;
var G__39698 = chunk__39689_39693;
var G__39699 = count__39690_39694;
var G__39700 = (i__39691_39695 + 1);
seq__39688_39692 = G__39697;
chunk__39689_39693 = G__39698;
count__39690_39694 = G__39699;
i__39691_39695 = G__39700;
continue;
}
} else
{var temp__4092__auto___39701 = cljs.core.seq(seq__39688_39692);if(temp__4092__auto___39701)
{var seq__39688_39702__$1 = temp__4092__auto___39701;if(cljs.core.chunked_seq_QMARK_(seq__39688_39702__$1))
{var c__4189__auto___39703 = cljs.core.chunk_first(seq__39688_39702__$1);{
var G__39704 = cljs.core.chunk_rest(seq__39688_39702__$1);
var G__39705 = c__4189__auto___39703;
var G__39706 = cljs.core.count(c__4189__auto___39703);
var G__39707 = 0;
seq__39688_39692 = G__39704;
chunk__39689_39693 = G__39705;
count__39690_39694 = G__39706;
i__39691_39695 = G__39707;
continue;
}
} else
{var node_39708 = cljs.core.first(seq__39688_39702__$1);goog.dom.classes.toggle(node_39708,class$);
{
var G__39709 = cljs.core.next(seq__39688_39702__$1);
var G__39710 = null;
var G__39711 = 0;
var G__39712 = 0;
seq__39688_39692 = G__39709;
chunk__39689_39693 = G__39710;
count__39690_39694 = G__39711;
i__39691_39695 = G__39712;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39721__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__39717_39722 = cljs.core.seq(domina.nodes(content));var chunk__39718_39723 = null;var count__39719_39724 = 0;var i__39720_39725 = 0;while(true){
if((i__39720_39725 < count__39719_39724))
{var node_39726 = chunk__39718_39723.cljs$core$IIndexed$_nth$arity$2(null,i__39720_39725);goog.dom.classes.set(node_39726,classes_39721__$1);
{
var G__39727 = seq__39717_39722;
var G__39728 = chunk__39718_39723;
var G__39729 = count__39719_39724;
var G__39730 = (i__39720_39725 + 1);
seq__39717_39722 = G__39727;
chunk__39718_39723 = G__39728;
count__39719_39724 = G__39729;
i__39720_39725 = G__39730;
continue;
}
} else
{var temp__4092__auto___39731 = cljs.core.seq(seq__39717_39722);if(temp__4092__auto___39731)
{var seq__39717_39732__$1 = temp__4092__auto___39731;if(cljs.core.chunked_seq_QMARK_(seq__39717_39732__$1))
{var c__4189__auto___39733 = cljs.core.chunk_first(seq__39717_39732__$1);{
var G__39734 = cljs.core.chunk_rest(seq__39717_39732__$1);
var G__39735 = c__4189__auto___39733;
var G__39736 = cljs.core.count(c__4189__auto___39733);
var G__39737 = 0;
seq__39717_39722 = G__39734;
chunk__39718_39723 = G__39735;
count__39719_39724 = G__39736;
i__39720_39725 = G__39737;
continue;
}
} else
{var node_39738 = cljs.core.first(seq__39717_39732__$1);goog.dom.classes.set(node_39738,classes_39721__$1);
{
var G__39739 = cljs.core.next(seq__39717_39732__$1);
var G__39740 = null;
var G__39741 = 0;
var G__39742 = 0;
seq__39717_39722 = G__39739;
chunk__39718_39723 = G__39740;
count__39719_39724 = G__39741;
i__39720_39725 = G__39742;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39747_39751 = cljs.core.seq(domina.nodes(content));var chunk__39748_39752 = null;var count__39749_39753 = 0;var i__39750_39754 = 0;while(true){
if((i__39750_39754 < count__39749_39753))
{var node_39755 = chunk__39748_39752.cljs$core$IIndexed$_nth$arity$2(null,i__39750_39754);goog.dom.setTextContent(node_39755,value);
{
var G__39756 = seq__39747_39751;
var G__39757 = chunk__39748_39752;
var G__39758 = count__39749_39753;
var G__39759 = (i__39750_39754 + 1);
seq__39747_39751 = G__39756;
chunk__39748_39752 = G__39757;
count__39749_39753 = G__39758;
i__39750_39754 = G__39759;
continue;
}
} else
{var temp__4092__auto___39760 = cljs.core.seq(seq__39747_39751);if(temp__4092__auto___39760)
{var seq__39747_39761__$1 = temp__4092__auto___39760;if(cljs.core.chunked_seq_QMARK_(seq__39747_39761__$1))
{var c__4189__auto___39762 = cljs.core.chunk_first(seq__39747_39761__$1);{
var G__39763 = cljs.core.chunk_rest(seq__39747_39761__$1);
var G__39764 = c__4189__auto___39762;
var G__39765 = cljs.core.count(c__4189__auto___39762);
var G__39766 = 0;
seq__39747_39751 = G__39763;
chunk__39748_39752 = G__39764;
count__39749_39753 = G__39765;
i__39750_39754 = G__39766;
continue;
}
} else
{var node_39767 = cljs.core.first(seq__39747_39761__$1);goog.dom.setTextContent(node_39767,value);
{
var G__39768 = cljs.core.next(seq__39747_39761__$1);
var G__39769 = null;
var G__39770 = 0;
var G__39771 = 0;
seq__39747_39751 = G__39768;
chunk__39748_39752 = G__39769;
count__39749_39753 = G__39770;
i__39750_39754 = G__39771;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39776_39780 = cljs.core.seq(domina.nodes(content));var chunk__39777_39781 = null;var count__39778_39782 = 0;var i__39779_39783 = 0;while(true){
if((i__39779_39783 < count__39778_39782))
{var node_39784 = chunk__39777_39781.cljs$core$IIndexed$_nth$arity$2(null,i__39779_39783);goog.dom.forms.setValue(node_39784,value);
{
var G__39785 = seq__39776_39780;
var G__39786 = chunk__39777_39781;
var G__39787 = count__39778_39782;
var G__39788 = (i__39779_39783 + 1);
seq__39776_39780 = G__39785;
chunk__39777_39781 = G__39786;
count__39778_39782 = G__39787;
i__39779_39783 = G__39788;
continue;
}
} else
{var temp__4092__auto___39789 = cljs.core.seq(seq__39776_39780);if(temp__4092__auto___39789)
{var seq__39776_39790__$1 = temp__4092__auto___39789;if(cljs.core.chunked_seq_QMARK_(seq__39776_39790__$1))
{var c__4189__auto___39791 = cljs.core.chunk_first(seq__39776_39790__$1);{
var G__39792 = cljs.core.chunk_rest(seq__39776_39790__$1);
var G__39793 = c__4189__auto___39791;
var G__39794 = cljs.core.count(c__4189__auto___39791);
var G__39795 = 0;
seq__39776_39780 = G__39792;
chunk__39777_39781 = G__39793;
count__39778_39782 = G__39794;
i__39779_39783 = G__39795;
continue;
}
} else
{var node_39796 = cljs.core.first(seq__39776_39790__$1);goog.dom.forms.setValue(node_39796,value);
{
var G__39797 = cljs.core.next(seq__39776_39790__$1);
var G__39798 = null;
var G__39799 = 0;
var G__39800 = 0;
seq__39776_39780 = G__39797;
chunk__39777_39781 = G__39798;
count__39778_39782 = G__39799;
i__39779_39783 = G__39800;
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
{var value_39811 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39807_39812 = cljs.core.seq(domina.nodes(content));var chunk__39808_39813 = null;var count__39809_39814 = 0;var i__39810_39815 = 0;while(true){
if((i__39810_39815 < count__39809_39814))
{var node_39816 = chunk__39808_39813.cljs$core$IIndexed$_nth$arity$2(null,i__39810_39815);node_39816.innerHTML = value_39811;
{
var G__39817 = seq__39807_39812;
var G__39818 = chunk__39808_39813;
var G__39819 = count__39809_39814;
var G__39820 = (i__39810_39815 + 1);
seq__39807_39812 = G__39817;
chunk__39808_39813 = G__39818;
count__39809_39814 = G__39819;
i__39810_39815 = G__39820;
continue;
}
} else
{var temp__4092__auto___39821 = cljs.core.seq(seq__39807_39812);if(temp__4092__auto___39821)
{var seq__39807_39822__$1 = temp__4092__auto___39821;if(cljs.core.chunked_seq_QMARK_(seq__39807_39822__$1))
{var c__4189__auto___39823 = cljs.core.chunk_first(seq__39807_39822__$1);{
var G__39824 = cljs.core.chunk_rest(seq__39807_39822__$1);
var G__39825 = c__4189__auto___39823;
var G__39826 = cljs.core.count(c__4189__auto___39823);
var G__39827 = 0;
seq__39807_39812 = G__39824;
chunk__39808_39813 = G__39825;
count__39809_39814 = G__39826;
i__39810_39815 = G__39827;
continue;
}
} else
{var node_39828 = cljs.core.first(seq__39807_39822__$1);node_39828.innerHTML = value_39811;
{
var G__39829 = cljs.core.next(seq__39807_39822__$1);
var G__39830 = null;
var G__39831 = 0;
var G__39832 = 0;
seq__39807_39812 = G__39829;
chunk__39808_39813 = G__39830;
count__39809_39814 = G__39831;
i__39810_39815 = G__39832;
continue;
}
}
} else
{}
}
break;
}
}catch (e39806){if((e39806 instanceof Error))
{var e_39833 = e39806;domina.replace_children_BANG_(content,value_39811);
} else
{if(cljs.core.constant$keyword$540)
{throw e39806;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39840_39844 = cljs.core.seq(children);var chunk__39841_39845 = null;var count__39842_39846 = 0;var i__39843_39847 = 0;while(true){
if((i__39843_39847 < count__39842_39846))
{var child_39848 = chunk__39841_39845.cljs$core$IIndexed$_nth$arity$2(null,i__39843_39847);frag.appendChild(child_39848);
{
var G__39849 = seq__39840_39844;
var G__39850 = chunk__39841_39845;
var G__39851 = count__39842_39846;
var G__39852 = (i__39843_39847 + 1);
seq__39840_39844 = G__39849;
chunk__39841_39845 = G__39850;
count__39842_39846 = G__39851;
i__39843_39847 = G__39852;
continue;
}
} else
{var temp__4092__auto___39853 = cljs.core.seq(seq__39840_39844);if(temp__4092__auto___39853)
{var seq__39840_39854__$1 = temp__4092__auto___39853;if(cljs.core.chunked_seq_QMARK_(seq__39840_39854__$1))
{var c__4189__auto___39855 = cljs.core.chunk_first(seq__39840_39854__$1);{
var G__39856 = cljs.core.chunk_rest(seq__39840_39854__$1);
var G__39857 = c__4189__auto___39855;
var G__39858 = cljs.core.count(c__4189__auto___39855);
var G__39859 = 0;
seq__39840_39844 = G__39856;
chunk__39841_39845 = G__39857;
count__39842_39846 = G__39858;
i__39843_39847 = G__39859;
continue;
}
} else
{var child_39860 = cljs.core.first(seq__39840_39854__$1);frag.appendChild(child_39860);
{
var G__39861 = cljs.core.next(seq__39840_39854__$1);
var G__39862 = null;
var G__39863 = 0;
var G__39864 = 0;
seq__39840_39844 = G__39861;
chunk__39841_39845 = G__39862;
count__39842_39846 = G__39863;
i__39843_39847 = G__39864;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__39834_SHARP_,p2__39835_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__39834_SHARP_,p2__39835_SHARP_) : f.call(null,p1__39834_SHARP_,p2__39835_SHARP_));
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
{if((function (){var G__39866 = list_thing;if(G__39866)
{var bit__4091__auto__ = (G__39866.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39866.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39866.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39866);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39866);
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
{if((function (){var G__39867 = content;if(G__39867)
{var bit__4091__auto__ = (G__39867.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39867.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39867);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39867);
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
{if((function (){var G__39868 = content;if(G__39868)
{var bit__4091__auto__ = (G__39868.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__39868.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39868.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__39868);
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
