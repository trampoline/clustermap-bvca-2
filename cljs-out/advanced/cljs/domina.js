// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_46430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_46431 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_46432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$863,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_46432,opt_wrapper_46430,table_section_wrapper_46431,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_46430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_46431,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_46431,cell_wrapper_46432,table_section_wrapper_46431,table_section_wrapper_46431]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__46437 = cljs.core.seq(tbody);var chunk__46438 = null;var count__46439 = (0);var i__46440 = (0);while(true){
if((i__46440 < count__46439))
{var child = chunk__46438.cljs$core$IIndexed$_nth$arity$2(null,i__46440);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46441 = seq__46437;
var G__46442 = chunk__46438;
var G__46443 = count__46439;
var G__46444 = (i__46440 + (1));
seq__46437 = G__46441;
chunk__46438 = G__46442;
count__46439 = G__46443;
i__46440 = G__46444;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__46437);if(temp__4126__auto__)
{var seq__46437__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__46437__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__46437__$1);{
var G__46445 = cljs.core.chunk_rest(seq__46437__$1);
var G__46446 = c__4314__auto__;
var G__46447 = cljs.core.count(c__4314__auto__);
var G__46448 = (0);
seq__46437 = G__46445;
chunk__46438 = G__46446;
count__46439 = G__46447;
i__46440 = G__46448;
continue;
}
} else
{var child = cljs.core.first(seq__46437__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46449 = cljs.core.next(seq__46437__$1);
var G__46450 = null;
var G__46451 = (0);
var G__46452 = (0);
seq__46437 = G__46449;
chunk__46438 = G__46450;
count__46439 = G__46451;
i__46440 = G__46452;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__46454 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46454,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46454,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46454,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__46455 = wrapper.lastChild;
var G__46456 = (level - (1));
wrapper = G__46455;
level = G__46456;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj46458 = {};return obj46458;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__46459){
var mesg = cljs.core.seq(arglist__46459);
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
log.cljs$lang$applyTo = (function (arglist__46460){
var mesg = cljs.core.seq(arglist__46460);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__46461){
var contents = cljs.core.seq(arglist__46461);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46462_SHARP_){return p1__46462_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__46463_SHARP_,p2__46464_SHARP_){return goog.dom.insertChildAt(p1__46463_SHARP_,p2__46464_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__46463_SHARP_,p2__46464_SHARP_){return goog.dom.insertChildAt(p1__46463_SHARP_,p2__46464_SHARP_,idx);
}),parent_content,child_content));
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__46466_SHARP_,p2__46465_SHARP_){return goog.dom.insertSiblingBefore(p2__46465_SHARP_,p1__46466_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__46466_SHARP_,p2__46465_SHARP_){return goog.dom.insertSiblingBefore(p2__46465_SHARP_,p1__46466_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__46468_SHARP_,p2__46467_SHARP_){return goog.dom.insertSiblingAfter(p2__46467_SHARP_,p1__46468_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__46468_SHARP_,p2__46467_SHARP_){return goog.dom.insertSiblingAfter(p2__46467_SHARP_,p1__46468_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__46470_SHARP_,p2__46469_SHARP_){return goog.dom.replaceNode(p2__46469_SHARP_,p1__46470_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__46470_SHARP_,p2__46469_SHARP_){return goog.dom.replaceNode(p2__46469_SHARP_,p1__46470_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__46475_46479 = cljs.core.seq(domina.nodes(content));var chunk__46476_46480 = null;var count__46477_46481 = (0);var i__46478_46482 = (0);while(true){
if((i__46478_46482 < count__46477_46481))
{var n_46483 = chunk__46476_46480.cljs$core$IIndexed$_nth$arity$2(null,i__46478_46482);goog.style.setStyle(n_46483,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__46484 = seq__46475_46479;
var G__46485 = chunk__46476_46480;
var G__46486 = count__46477_46481;
var G__46487 = (i__46478_46482 + (1));
seq__46475_46479 = G__46484;
chunk__46476_46480 = G__46485;
count__46477_46481 = G__46486;
i__46478_46482 = G__46487;
continue;
}
} else
{var temp__4126__auto___46488 = cljs.core.seq(seq__46475_46479);if(temp__4126__auto___46488)
{var seq__46475_46489__$1 = temp__4126__auto___46488;if(cljs.core.chunked_seq_QMARK_(seq__46475_46489__$1))
{var c__4314__auto___46490 = cljs.core.chunk_first(seq__46475_46489__$1);{
var G__46491 = cljs.core.chunk_rest(seq__46475_46489__$1);
var G__46492 = c__4314__auto___46490;
var G__46493 = cljs.core.count(c__4314__auto___46490);
var G__46494 = (0);
seq__46475_46479 = G__46491;
chunk__46476_46480 = G__46492;
count__46477_46481 = G__46493;
i__46478_46482 = G__46494;
continue;
}
} else
{var n_46495 = cljs.core.first(seq__46475_46489__$1);goog.style.setStyle(n_46495,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__46496 = cljs.core.next(seq__46475_46489__$1);
var G__46497 = null;
var G__46498 = (0);
var G__46499 = (0);
seq__46475_46479 = G__46496;
chunk__46476_46480 = G__46497;
count__46477_46481 = G__46498;
i__46478_46482 = G__46499;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__46500){
var content = cljs.core.first(arglist__46500);
arglist__46500 = cljs.core.next(arglist__46500);
var name = cljs.core.first(arglist__46500);
var value = cljs.core.rest(arglist__46500);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__46505_46509 = cljs.core.seq(domina.nodes(content));var chunk__46506_46510 = null;var count__46507_46511 = (0);var i__46508_46512 = (0);while(true){
if((i__46508_46512 < count__46507_46511))
{var n_46513 = chunk__46506_46510.cljs$core$IIndexed$_nth$arity$2(null,i__46508_46512);n_46513.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__46514 = seq__46505_46509;
var G__46515 = chunk__46506_46510;
var G__46516 = count__46507_46511;
var G__46517 = (i__46508_46512 + (1));
seq__46505_46509 = G__46514;
chunk__46506_46510 = G__46515;
count__46507_46511 = G__46516;
i__46508_46512 = G__46517;
continue;
}
} else
{var temp__4126__auto___46518 = cljs.core.seq(seq__46505_46509);if(temp__4126__auto___46518)
{var seq__46505_46519__$1 = temp__4126__auto___46518;if(cljs.core.chunked_seq_QMARK_(seq__46505_46519__$1))
{var c__4314__auto___46520 = cljs.core.chunk_first(seq__46505_46519__$1);{
var G__46521 = cljs.core.chunk_rest(seq__46505_46519__$1);
var G__46522 = c__4314__auto___46520;
var G__46523 = cljs.core.count(c__4314__auto___46520);
var G__46524 = (0);
seq__46505_46509 = G__46521;
chunk__46506_46510 = G__46522;
count__46507_46511 = G__46523;
i__46508_46512 = G__46524;
continue;
}
} else
{var n_46525 = cljs.core.first(seq__46505_46519__$1);n_46525.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__46526 = cljs.core.next(seq__46505_46519__$1);
var G__46527 = null;
var G__46528 = (0);
var G__46529 = (0);
seq__46505_46509 = G__46526;
chunk__46506_46510 = G__46527;
count__46507_46511 = G__46528;
i__46508_46512 = G__46529;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__46530){
var content = cljs.core.first(arglist__46530);
arglist__46530 = cljs.core.next(arglist__46530);
var name = cljs.core.first(arglist__46530);
var value = cljs.core.rest(arglist__46530);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__46535_46539 = cljs.core.seq(domina.nodes(content));var chunk__46536_46540 = null;var count__46537_46541 = (0);var i__46538_46542 = (0);while(true){
if((i__46538_46542 < count__46537_46541))
{var n_46543 = chunk__46536_46540.cljs$core$IIndexed$_nth$arity$2(null,i__46538_46542);n_46543.removeAttribute(cljs.core.name(name));
{
var G__46544 = seq__46535_46539;
var G__46545 = chunk__46536_46540;
var G__46546 = count__46537_46541;
var G__46547 = (i__46538_46542 + (1));
seq__46535_46539 = G__46544;
chunk__46536_46540 = G__46545;
count__46537_46541 = G__46546;
i__46538_46542 = G__46547;
continue;
}
} else
{var temp__4126__auto___46548 = cljs.core.seq(seq__46535_46539);if(temp__4126__auto___46548)
{var seq__46535_46549__$1 = temp__4126__auto___46548;if(cljs.core.chunked_seq_QMARK_(seq__46535_46549__$1))
{var c__4314__auto___46550 = cljs.core.chunk_first(seq__46535_46549__$1);{
var G__46551 = cljs.core.chunk_rest(seq__46535_46549__$1);
var G__46552 = c__4314__auto___46550;
var G__46553 = cljs.core.count(c__4314__auto___46550);
var G__46554 = (0);
seq__46535_46539 = G__46551;
chunk__46536_46540 = G__46552;
count__46537_46541 = G__46553;
i__46538_46542 = G__46554;
continue;
}
} else
{var n_46555 = cljs.core.first(seq__46535_46549__$1);n_46555.removeAttribute(cljs.core.name(name));
{
var G__46556 = cljs.core.next(seq__46535_46549__$1);
var G__46557 = null;
var G__46558 = (0);
var G__46559 = (0);
seq__46535_46539 = G__46556;
chunk__46536_46540 = G__46557;
count__46537_46541 = G__46558;
i__46538_46542 = G__46559;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__46561 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
return (function (p1__46562_SHARP_){var attr = attrs__$1.item(p1__46562_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__46569_46575 = cljs.core.seq(styles);var chunk__46570_46576 = null;var count__46571_46577 = (0);var i__46572_46578 = (0);while(true){
if((i__46572_46578 < count__46571_46577))
{var vec__46573_46579 = chunk__46570_46576.cljs$core$IIndexed$_nth$arity$2(null,i__46572_46578);var name_46580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46573_46579,(0),null);var value_46581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46573_46579,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_46580,cljs.core.array_seq([value_46581], 0));
{
var G__46582 = seq__46569_46575;
var G__46583 = chunk__46570_46576;
var G__46584 = count__46571_46577;
var G__46585 = (i__46572_46578 + (1));
seq__46569_46575 = G__46582;
chunk__46570_46576 = G__46583;
count__46571_46577 = G__46584;
i__46572_46578 = G__46585;
continue;
}
} else
{var temp__4126__auto___46586 = cljs.core.seq(seq__46569_46575);if(temp__4126__auto___46586)
{var seq__46569_46587__$1 = temp__4126__auto___46586;if(cljs.core.chunked_seq_QMARK_(seq__46569_46587__$1))
{var c__4314__auto___46588 = cljs.core.chunk_first(seq__46569_46587__$1);{
var G__46589 = cljs.core.chunk_rest(seq__46569_46587__$1);
var G__46590 = c__4314__auto___46588;
var G__46591 = cljs.core.count(c__4314__auto___46588);
var G__46592 = (0);
seq__46569_46575 = G__46589;
chunk__46570_46576 = G__46590;
count__46571_46577 = G__46591;
i__46572_46578 = G__46592;
continue;
}
} else
{var vec__46574_46593 = cljs.core.first(seq__46569_46587__$1);var name_46594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574_46593,(0),null);var value_46595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574_46593,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_46594,cljs.core.array_seq([value_46595], 0));
{
var G__46596 = cljs.core.next(seq__46569_46587__$1);
var G__46597 = null;
var G__46598 = (0);
var G__46599 = (0);
seq__46569_46575 = G__46596;
chunk__46570_46576 = G__46597;
count__46571_46577 = G__46598;
i__46572_46578 = G__46599;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__46606_46612 = cljs.core.seq(attrs);var chunk__46607_46613 = null;var count__46608_46614 = (0);var i__46609_46615 = (0);while(true){
if((i__46609_46615 < count__46608_46614))
{var vec__46610_46616 = chunk__46607_46613.cljs$core$IIndexed$_nth$arity$2(null,i__46609_46615);var name_46617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610_46616,(0),null);var value_46618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610_46616,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_46617,cljs.core.array_seq([value_46618], 0));
{
var G__46619 = seq__46606_46612;
var G__46620 = chunk__46607_46613;
var G__46621 = count__46608_46614;
var G__46622 = (i__46609_46615 + (1));
seq__46606_46612 = G__46619;
chunk__46607_46613 = G__46620;
count__46608_46614 = G__46621;
i__46609_46615 = G__46622;
continue;
}
} else
{var temp__4126__auto___46623 = cljs.core.seq(seq__46606_46612);if(temp__4126__auto___46623)
{var seq__46606_46624__$1 = temp__4126__auto___46623;if(cljs.core.chunked_seq_QMARK_(seq__46606_46624__$1))
{var c__4314__auto___46625 = cljs.core.chunk_first(seq__46606_46624__$1);{
var G__46626 = cljs.core.chunk_rest(seq__46606_46624__$1);
var G__46627 = c__4314__auto___46625;
var G__46628 = cljs.core.count(c__4314__auto___46625);
var G__46629 = (0);
seq__46606_46612 = G__46626;
chunk__46607_46613 = G__46627;
count__46608_46614 = G__46628;
i__46609_46615 = G__46629;
continue;
}
} else
{var vec__46611_46630 = cljs.core.first(seq__46606_46624__$1);var name_46631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46611_46630,(0),null);var value_46632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46611_46630,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_46631,cljs.core.array_seq([value_46632], 0));
{
var G__46633 = cljs.core.next(seq__46606_46624__$1);
var G__46634 = null;
var G__46635 = (0);
var G__46636 = (0);
seq__46606_46612 = G__46633;
chunk__46607_46613 = G__46634;
count__46608_46614 = G__46635;
i__46609_46615 = G__46636;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__46641_46645 = cljs.core.seq(domina.nodes(content));var chunk__46642_46646 = null;var count__46643_46647 = (0);var i__46644_46648 = (0);while(true){
if((i__46644_46648 < count__46643_46647))
{var node_46649 = chunk__46642_46646.cljs$core$IIndexed$_nth$arity$2(null,i__46644_46648);goog.dom.classes.add(node_46649,class$);
{
var G__46650 = seq__46641_46645;
var G__46651 = chunk__46642_46646;
var G__46652 = count__46643_46647;
var G__46653 = (i__46644_46648 + (1));
seq__46641_46645 = G__46650;
chunk__46642_46646 = G__46651;
count__46643_46647 = G__46652;
i__46644_46648 = G__46653;
continue;
}
} else
{var temp__4126__auto___46654 = cljs.core.seq(seq__46641_46645);if(temp__4126__auto___46654)
{var seq__46641_46655__$1 = temp__4126__auto___46654;if(cljs.core.chunked_seq_QMARK_(seq__46641_46655__$1))
{var c__4314__auto___46656 = cljs.core.chunk_first(seq__46641_46655__$1);{
var G__46657 = cljs.core.chunk_rest(seq__46641_46655__$1);
var G__46658 = c__4314__auto___46656;
var G__46659 = cljs.core.count(c__4314__auto___46656);
var G__46660 = (0);
seq__46641_46645 = G__46657;
chunk__46642_46646 = G__46658;
count__46643_46647 = G__46659;
i__46644_46648 = G__46660;
continue;
}
} else
{var node_46661 = cljs.core.first(seq__46641_46655__$1);goog.dom.classes.add(node_46661,class$);
{
var G__46662 = cljs.core.next(seq__46641_46655__$1);
var G__46663 = null;
var G__46664 = (0);
var G__46665 = (0);
seq__46641_46645 = G__46662;
chunk__46642_46646 = G__46663;
count__46643_46647 = G__46664;
i__46644_46648 = G__46665;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__46670_46674 = cljs.core.seq(domina.nodes(content));var chunk__46671_46675 = null;var count__46672_46676 = (0);var i__46673_46677 = (0);while(true){
if((i__46673_46677 < count__46672_46676))
{var node_46678 = chunk__46671_46675.cljs$core$IIndexed$_nth$arity$2(null,i__46673_46677);goog.dom.classes.remove(node_46678,class$);
{
var G__46679 = seq__46670_46674;
var G__46680 = chunk__46671_46675;
var G__46681 = count__46672_46676;
var G__46682 = (i__46673_46677 + (1));
seq__46670_46674 = G__46679;
chunk__46671_46675 = G__46680;
count__46672_46676 = G__46681;
i__46673_46677 = G__46682;
continue;
}
} else
{var temp__4126__auto___46683 = cljs.core.seq(seq__46670_46674);if(temp__4126__auto___46683)
{var seq__46670_46684__$1 = temp__4126__auto___46683;if(cljs.core.chunked_seq_QMARK_(seq__46670_46684__$1))
{var c__4314__auto___46685 = cljs.core.chunk_first(seq__46670_46684__$1);{
var G__46686 = cljs.core.chunk_rest(seq__46670_46684__$1);
var G__46687 = c__4314__auto___46685;
var G__46688 = cljs.core.count(c__4314__auto___46685);
var G__46689 = (0);
seq__46670_46674 = G__46686;
chunk__46671_46675 = G__46687;
count__46672_46676 = G__46688;
i__46673_46677 = G__46689;
continue;
}
} else
{var node_46690 = cljs.core.first(seq__46670_46684__$1);goog.dom.classes.remove(node_46690,class$);
{
var G__46691 = cljs.core.next(seq__46670_46684__$1);
var G__46692 = null;
var G__46693 = (0);
var G__46694 = (0);
seq__46670_46674 = G__46691;
chunk__46671_46675 = G__46692;
count__46672_46676 = G__46693;
i__46673_46677 = G__46694;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__46699_46703 = cljs.core.seq(domina.nodes(content));var chunk__46700_46704 = null;var count__46701_46705 = (0);var i__46702_46706 = (0);while(true){
if((i__46702_46706 < count__46701_46705))
{var node_46707 = chunk__46700_46704.cljs$core$IIndexed$_nth$arity$2(null,i__46702_46706);goog.dom.classes.toggle(node_46707,class$);
{
var G__46708 = seq__46699_46703;
var G__46709 = chunk__46700_46704;
var G__46710 = count__46701_46705;
var G__46711 = (i__46702_46706 + (1));
seq__46699_46703 = G__46708;
chunk__46700_46704 = G__46709;
count__46701_46705 = G__46710;
i__46702_46706 = G__46711;
continue;
}
} else
{var temp__4126__auto___46712 = cljs.core.seq(seq__46699_46703);if(temp__4126__auto___46712)
{var seq__46699_46713__$1 = temp__4126__auto___46712;if(cljs.core.chunked_seq_QMARK_(seq__46699_46713__$1))
{var c__4314__auto___46714 = cljs.core.chunk_first(seq__46699_46713__$1);{
var G__46715 = cljs.core.chunk_rest(seq__46699_46713__$1);
var G__46716 = c__4314__auto___46714;
var G__46717 = cljs.core.count(c__4314__auto___46714);
var G__46718 = (0);
seq__46699_46703 = G__46715;
chunk__46700_46704 = G__46716;
count__46701_46705 = G__46717;
i__46702_46706 = G__46718;
continue;
}
} else
{var node_46719 = cljs.core.first(seq__46699_46713__$1);goog.dom.classes.toggle(node_46719,class$);
{
var G__46720 = cljs.core.next(seq__46699_46713__$1);
var G__46721 = null;
var G__46722 = (0);
var G__46723 = (0);
seq__46699_46703 = G__46720;
chunk__46700_46704 = G__46721;
count__46701_46705 = G__46722;
i__46702_46706 = G__46723;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_46732__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__46728_46733 = cljs.core.seq(domina.nodes(content));var chunk__46729_46734 = null;var count__46730_46735 = (0);var i__46731_46736 = (0);while(true){
if((i__46731_46736 < count__46730_46735))
{var node_46737 = chunk__46729_46734.cljs$core$IIndexed$_nth$arity$2(null,i__46731_46736);goog.dom.classes.set(node_46737,classes_46732__$1);
{
var G__46738 = seq__46728_46733;
var G__46739 = chunk__46729_46734;
var G__46740 = count__46730_46735;
var G__46741 = (i__46731_46736 + (1));
seq__46728_46733 = G__46738;
chunk__46729_46734 = G__46739;
count__46730_46735 = G__46740;
i__46731_46736 = G__46741;
continue;
}
} else
{var temp__4126__auto___46742 = cljs.core.seq(seq__46728_46733);if(temp__4126__auto___46742)
{var seq__46728_46743__$1 = temp__4126__auto___46742;if(cljs.core.chunked_seq_QMARK_(seq__46728_46743__$1))
{var c__4314__auto___46744 = cljs.core.chunk_first(seq__46728_46743__$1);{
var G__46745 = cljs.core.chunk_rest(seq__46728_46743__$1);
var G__46746 = c__4314__auto___46744;
var G__46747 = cljs.core.count(c__4314__auto___46744);
var G__46748 = (0);
seq__46728_46733 = G__46745;
chunk__46729_46734 = G__46746;
count__46730_46735 = G__46747;
i__46731_46736 = G__46748;
continue;
}
} else
{var node_46749 = cljs.core.first(seq__46728_46743__$1);goog.dom.classes.set(node_46749,classes_46732__$1);
{
var G__46750 = cljs.core.next(seq__46728_46743__$1);
var G__46751 = null;
var G__46752 = (0);
var G__46753 = (0);
seq__46728_46733 = G__46750;
chunk__46729_46734 = G__46751;
count__46730_46735 = G__46752;
i__46731_46736 = G__46753;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__46758_46762 = cljs.core.seq(domina.nodes(content));var chunk__46759_46763 = null;var count__46760_46764 = (0);var i__46761_46765 = (0);while(true){
if((i__46761_46765 < count__46760_46764))
{var node_46766 = chunk__46759_46763.cljs$core$IIndexed$_nth$arity$2(null,i__46761_46765);goog.dom.setTextContent(node_46766,value);
{
var G__46767 = seq__46758_46762;
var G__46768 = chunk__46759_46763;
var G__46769 = count__46760_46764;
var G__46770 = (i__46761_46765 + (1));
seq__46758_46762 = G__46767;
chunk__46759_46763 = G__46768;
count__46760_46764 = G__46769;
i__46761_46765 = G__46770;
continue;
}
} else
{var temp__4126__auto___46771 = cljs.core.seq(seq__46758_46762);if(temp__4126__auto___46771)
{var seq__46758_46772__$1 = temp__4126__auto___46771;if(cljs.core.chunked_seq_QMARK_(seq__46758_46772__$1))
{var c__4314__auto___46773 = cljs.core.chunk_first(seq__46758_46772__$1);{
var G__46774 = cljs.core.chunk_rest(seq__46758_46772__$1);
var G__46775 = c__4314__auto___46773;
var G__46776 = cljs.core.count(c__4314__auto___46773);
var G__46777 = (0);
seq__46758_46762 = G__46774;
chunk__46759_46763 = G__46775;
count__46760_46764 = G__46776;
i__46761_46765 = G__46777;
continue;
}
} else
{var node_46778 = cljs.core.first(seq__46758_46772__$1);goog.dom.setTextContent(node_46778,value);
{
var G__46779 = cljs.core.next(seq__46758_46772__$1);
var G__46780 = null;
var G__46781 = (0);
var G__46782 = (0);
seq__46758_46762 = G__46779;
chunk__46759_46763 = G__46780;
count__46760_46764 = G__46781;
i__46761_46765 = G__46782;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__46787_46791 = cljs.core.seq(domina.nodes(content));var chunk__46788_46792 = null;var count__46789_46793 = (0);var i__46790_46794 = (0);while(true){
if((i__46790_46794 < count__46789_46793))
{var node_46795 = chunk__46788_46792.cljs$core$IIndexed$_nth$arity$2(null,i__46790_46794);goog.dom.forms.setValue(node_46795,value);
{
var G__46796 = seq__46787_46791;
var G__46797 = chunk__46788_46792;
var G__46798 = count__46789_46793;
var G__46799 = (i__46790_46794 + (1));
seq__46787_46791 = G__46796;
chunk__46788_46792 = G__46797;
count__46789_46793 = G__46798;
i__46790_46794 = G__46799;
continue;
}
} else
{var temp__4126__auto___46800 = cljs.core.seq(seq__46787_46791);if(temp__4126__auto___46800)
{var seq__46787_46801__$1 = temp__4126__auto___46800;if(cljs.core.chunked_seq_QMARK_(seq__46787_46801__$1))
{var c__4314__auto___46802 = cljs.core.chunk_first(seq__46787_46801__$1);{
var G__46803 = cljs.core.chunk_rest(seq__46787_46801__$1);
var G__46804 = c__4314__auto___46802;
var G__46805 = cljs.core.count(c__4314__auto___46802);
var G__46806 = (0);
seq__46787_46791 = G__46803;
chunk__46788_46792 = G__46804;
count__46789_46793 = G__46805;
i__46790_46794 = G__46806;
continue;
}
} else
{var node_46807 = cljs.core.first(seq__46787_46801__$1);goog.dom.forms.setValue(node_46807,value);
{
var G__46808 = cljs.core.next(seq__46787_46801__$1);
var G__46809 = null;
var G__46810 = (0);
var G__46811 = (0);
seq__46787_46791 = G__46808;
chunk__46788_46792 = G__46809;
count__46789_46793 = G__46810;
i__46790_46794 = G__46811;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_46822 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__46818_46823 = cljs.core.seq(domina.nodes(content));var chunk__46819_46824 = null;var count__46820_46825 = (0);var i__46821_46826 = (0);while(true){
if((i__46821_46826 < count__46820_46825))
{var node_46827 = chunk__46819_46824.cljs$core$IIndexed$_nth$arity$2(null,i__46821_46826);node_46827.innerHTML = value_46822;
{
var G__46828 = seq__46818_46823;
var G__46829 = chunk__46819_46824;
var G__46830 = count__46820_46825;
var G__46831 = (i__46821_46826 + (1));
seq__46818_46823 = G__46828;
chunk__46819_46824 = G__46829;
count__46820_46825 = G__46830;
i__46821_46826 = G__46831;
continue;
}
} else
{var temp__4126__auto___46832 = cljs.core.seq(seq__46818_46823);if(temp__4126__auto___46832)
{var seq__46818_46833__$1 = temp__4126__auto___46832;if(cljs.core.chunked_seq_QMARK_(seq__46818_46833__$1))
{var c__4314__auto___46834 = cljs.core.chunk_first(seq__46818_46833__$1);{
var G__46835 = cljs.core.chunk_rest(seq__46818_46833__$1);
var G__46836 = c__4314__auto___46834;
var G__46837 = cljs.core.count(c__4314__auto___46834);
var G__46838 = (0);
seq__46818_46823 = G__46835;
chunk__46819_46824 = G__46836;
count__46820_46825 = G__46837;
i__46821_46826 = G__46838;
continue;
}
} else
{var node_46839 = cljs.core.first(seq__46818_46833__$1);node_46839.innerHTML = value_46822;
{
var G__46840 = cljs.core.next(seq__46818_46833__$1);
var G__46841 = null;
var G__46842 = (0);
var G__46843 = (0);
seq__46818_46823 = G__46840;
chunk__46819_46824 = G__46841;
count__46820_46825 = G__46842;
i__46821_46826 = G__46843;
continue;
}
}
} else
{}
}
break;
}
}catch (e46817){if((e46817 instanceof Error))
{var e_46844 = e46817;domina.replace_children_BANG_(content,value_46822);
} else
{throw e46817;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__46851_46855 = cljs.core.seq(children);var chunk__46852_46856 = null;var count__46853_46857 = (0);var i__46854_46858 = (0);while(true){
if((i__46854_46858 < count__46853_46857))
{var child_46859 = chunk__46852_46856.cljs$core$IIndexed$_nth$arity$2(null,i__46854_46858);frag.appendChild(child_46859);
{
var G__46860 = seq__46851_46855;
var G__46861 = chunk__46852_46856;
var G__46862 = count__46853_46857;
var G__46863 = (i__46854_46858 + (1));
seq__46851_46855 = G__46860;
chunk__46852_46856 = G__46861;
count__46853_46857 = G__46862;
i__46854_46858 = G__46863;
continue;
}
} else
{var temp__4126__auto___46864 = cljs.core.seq(seq__46851_46855);if(temp__4126__auto___46864)
{var seq__46851_46865__$1 = temp__4126__auto___46864;if(cljs.core.chunked_seq_QMARK_(seq__46851_46865__$1))
{var c__4314__auto___46866 = cljs.core.chunk_first(seq__46851_46865__$1);{
var G__46867 = cljs.core.chunk_rest(seq__46851_46865__$1);
var G__46868 = c__4314__auto___46866;
var G__46869 = cljs.core.count(c__4314__auto___46866);
var G__46870 = (0);
seq__46851_46855 = G__46867;
chunk__46852_46856 = G__46868;
count__46853_46857 = G__46869;
i__46854_46858 = G__46870;
continue;
}
} else
{var child_46871 = cljs.core.first(seq__46851_46865__$1);frag.appendChild(child_46871);
{
var G__46872 = cljs.core.next(seq__46851_46865__$1);
var G__46873 = null;
var G__46874 = (0);
var G__46875 = (0);
seq__46851_46855 = G__46872;
chunk__46852_46856 = G__46873;
count__46853_46857 = G__46874;
i__46854_46858 = G__46875;
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
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__46845_SHARP_,p2__46846_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__46845_SHARP_,p2__46846_SHARP_) : f.call(null,p1__46845_SHARP_,p2__46846_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not(obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__46877 = list_thing;if(G__46877)
{var bit__4208__auto__ = (G__46877.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46877.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46877.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46877);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46877);
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
{if((function (){var G__46878 = content;if(G__46878)
{var bit__4208__auto__ = (G__46878.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46878.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46878.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46878);
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
{if((function (){var G__46879 = content;if(G__46879)
{var bit__4208__auto__ = (G__46879.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46879.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46879);
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
