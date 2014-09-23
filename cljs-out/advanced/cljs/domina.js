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
var opt_wrapper_44492 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44493 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_44494 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$827,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_44494,opt_wrapper_44492,table_section_wrapper_44493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_44492,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_44493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_44493,cell_wrapper_44494,table_section_wrapper_44493,table_section_wrapper_44493]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__44499 = cljs.core.seq(tbody);var chunk__44500 = null;var count__44501 = (0);var i__44502 = (0);while(true){
if((i__44502 < count__44501))
{var child = chunk__44500.cljs$core$IIndexed$_nth$arity$2(null,i__44502);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44503 = seq__44499;
var G__44504 = chunk__44500;
var G__44505 = count__44501;
var G__44506 = (i__44502 + (1));
seq__44499 = G__44503;
chunk__44500 = G__44504;
count__44501 = G__44505;
i__44502 = G__44506;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44499);if(temp__4126__auto__)
{var seq__44499__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44499__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44499__$1);{
var G__44507 = cljs.core.chunk_rest(seq__44499__$1);
var G__44508 = c__4314__auto__;
var G__44509 = cljs.core.count(c__4314__auto__);
var G__44510 = (0);
seq__44499 = G__44507;
chunk__44500 = G__44508;
count__44501 = G__44509;
i__44502 = G__44510;
continue;
}
} else
{var child = cljs.core.first(seq__44499__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44511 = cljs.core.next(seq__44499__$1);
var G__44512 = null;
var G__44513 = (0);
var G__44514 = (0);
seq__44499 = G__44511;
chunk__44500 = G__44512;
count__44501 = G__44513;
i__44502 = G__44514;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__44516 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44516,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44516,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44516,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__44517 = wrapper.lastChild;
var G__44518 = (level - (1));
wrapper = G__44517;
level = G__44518;
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
domina.DomContent = (function (){var obj44520 = {};return obj44520;
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
log_debug.cljs$lang$applyTo = (function (arglist__44521){
var mesg = cljs.core.seq(arglist__44521);
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
log.cljs$lang$applyTo = (function (arglist__44522){
var mesg = cljs.core.seq(arglist__44522);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44523){
var contents = cljs.core.seq(arglist__44523);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44524_SHARP_){return p1__44524_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44525_SHARP_,p2__44526_SHARP_){return goog.dom.insertChildAt(p1__44525_SHARP_,p2__44526_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__44525_SHARP_,p2__44526_SHARP_){return goog.dom.insertChildAt(p1__44525_SHARP_,p2__44526_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44528_SHARP_,p2__44527_SHARP_){return goog.dom.insertSiblingBefore(p2__44527_SHARP_,p1__44528_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44528_SHARP_,p2__44527_SHARP_){return goog.dom.insertSiblingBefore(p2__44527_SHARP_,p1__44528_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44530_SHARP_,p2__44529_SHARP_){return goog.dom.insertSiblingAfter(p2__44529_SHARP_,p1__44530_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44530_SHARP_,p2__44529_SHARP_){return goog.dom.insertSiblingAfter(p2__44529_SHARP_,p1__44530_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44532_SHARP_,p2__44531_SHARP_){return goog.dom.replaceNode(p2__44531_SHARP_,p1__44532_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44532_SHARP_,p2__44531_SHARP_){return goog.dom.replaceNode(p2__44531_SHARP_,p1__44532_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44537_44541 = cljs.core.seq(domina.nodes(content));var chunk__44538_44542 = null;var count__44539_44543 = (0);var i__44540_44544 = (0);while(true){
if((i__44540_44544 < count__44539_44543))
{var n_44545 = chunk__44538_44542.cljs$core$IIndexed$_nth$arity$2(null,i__44540_44544);goog.style.setStyle(n_44545,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44546 = seq__44537_44541;
var G__44547 = chunk__44538_44542;
var G__44548 = count__44539_44543;
var G__44549 = (i__44540_44544 + (1));
seq__44537_44541 = G__44546;
chunk__44538_44542 = G__44547;
count__44539_44543 = G__44548;
i__44540_44544 = G__44549;
continue;
}
} else
{var temp__4126__auto___44550 = cljs.core.seq(seq__44537_44541);if(temp__4126__auto___44550)
{var seq__44537_44551__$1 = temp__4126__auto___44550;if(cljs.core.chunked_seq_QMARK_(seq__44537_44551__$1))
{var c__4314__auto___44552 = cljs.core.chunk_first(seq__44537_44551__$1);{
var G__44553 = cljs.core.chunk_rest(seq__44537_44551__$1);
var G__44554 = c__4314__auto___44552;
var G__44555 = cljs.core.count(c__4314__auto___44552);
var G__44556 = (0);
seq__44537_44541 = G__44553;
chunk__44538_44542 = G__44554;
count__44539_44543 = G__44555;
i__44540_44544 = G__44556;
continue;
}
} else
{var n_44557 = cljs.core.first(seq__44537_44551__$1);goog.style.setStyle(n_44557,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44558 = cljs.core.next(seq__44537_44551__$1);
var G__44559 = null;
var G__44560 = (0);
var G__44561 = (0);
seq__44537_44541 = G__44558;
chunk__44538_44542 = G__44559;
count__44539_44543 = G__44560;
i__44540_44544 = G__44561;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44562){
var content = cljs.core.first(arglist__44562);
arglist__44562 = cljs.core.next(arglist__44562);
var name = cljs.core.first(arglist__44562);
var value = cljs.core.rest(arglist__44562);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44567_44571 = cljs.core.seq(domina.nodes(content));var chunk__44568_44572 = null;var count__44569_44573 = (0);var i__44570_44574 = (0);while(true){
if((i__44570_44574 < count__44569_44573))
{var n_44575 = chunk__44568_44572.cljs$core$IIndexed$_nth$arity$2(null,i__44570_44574);n_44575.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44576 = seq__44567_44571;
var G__44577 = chunk__44568_44572;
var G__44578 = count__44569_44573;
var G__44579 = (i__44570_44574 + (1));
seq__44567_44571 = G__44576;
chunk__44568_44572 = G__44577;
count__44569_44573 = G__44578;
i__44570_44574 = G__44579;
continue;
}
} else
{var temp__4126__auto___44580 = cljs.core.seq(seq__44567_44571);if(temp__4126__auto___44580)
{var seq__44567_44581__$1 = temp__4126__auto___44580;if(cljs.core.chunked_seq_QMARK_(seq__44567_44581__$1))
{var c__4314__auto___44582 = cljs.core.chunk_first(seq__44567_44581__$1);{
var G__44583 = cljs.core.chunk_rest(seq__44567_44581__$1);
var G__44584 = c__4314__auto___44582;
var G__44585 = cljs.core.count(c__4314__auto___44582);
var G__44586 = (0);
seq__44567_44571 = G__44583;
chunk__44568_44572 = G__44584;
count__44569_44573 = G__44585;
i__44570_44574 = G__44586;
continue;
}
} else
{var n_44587 = cljs.core.first(seq__44567_44581__$1);n_44587.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44588 = cljs.core.next(seq__44567_44581__$1);
var G__44589 = null;
var G__44590 = (0);
var G__44591 = (0);
seq__44567_44571 = G__44588;
chunk__44568_44572 = G__44589;
count__44569_44573 = G__44590;
i__44570_44574 = G__44591;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44592){
var content = cljs.core.first(arglist__44592);
arglist__44592 = cljs.core.next(arglist__44592);
var name = cljs.core.first(arglist__44592);
var value = cljs.core.rest(arglist__44592);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44597_44601 = cljs.core.seq(domina.nodes(content));var chunk__44598_44602 = null;var count__44599_44603 = (0);var i__44600_44604 = (0);while(true){
if((i__44600_44604 < count__44599_44603))
{var n_44605 = chunk__44598_44602.cljs$core$IIndexed$_nth$arity$2(null,i__44600_44604);n_44605.removeAttribute(cljs.core.name(name));
{
var G__44606 = seq__44597_44601;
var G__44607 = chunk__44598_44602;
var G__44608 = count__44599_44603;
var G__44609 = (i__44600_44604 + (1));
seq__44597_44601 = G__44606;
chunk__44598_44602 = G__44607;
count__44599_44603 = G__44608;
i__44600_44604 = G__44609;
continue;
}
} else
{var temp__4126__auto___44610 = cljs.core.seq(seq__44597_44601);if(temp__4126__auto___44610)
{var seq__44597_44611__$1 = temp__4126__auto___44610;if(cljs.core.chunked_seq_QMARK_(seq__44597_44611__$1))
{var c__4314__auto___44612 = cljs.core.chunk_first(seq__44597_44611__$1);{
var G__44613 = cljs.core.chunk_rest(seq__44597_44611__$1);
var G__44614 = c__4314__auto___44612;
var G__44615 = cljs.core.count(c__4314__auto___44612);
var G__44616 = (0);
seq__44597_44601 = G__44613;
chunk__44598_44602 = G__44614;
count__44599_44603 = G__44615;
i__44600_44604 = G__44616;
continue;
}
} else
{var n_44617 = cljs.core.first(seq__44597_44611__$1);n_44617.removeAttribute(cljs.core.name(name));
{
var G__44618 = cljs.core.next(seq__44597_44611__$1);
var G__44619 = null;
var G__44620 = (0);
var G__44621 = (0);
seq__44597_44601 = G__44618;
chunk__44598_44602 = G__44619;
count__44599_44603 = G__44620;
i__44600_44604 = G__44621;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__44623 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44623,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44623,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__44624_SHARP_){var attr = attrs__$1.item(p1__44624_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44631_44637 = cljs.core.seq(styles);var chunk__44632_44638 = null;var count__44633_44639 = (0);var i__44634_44640 = (0);while(true){
if((i__44634_44640 < count__44633_44639))
{var vec__44635_44641 = chunk__44632_44638.cljs$core$IIndexed$_nth$arity$2(null,i__44634_44640);var name_44642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44635_44641,(0),null);var value_44643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44635_44641,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44642,cljs.core.array_seq([value_44643], 0));
{
var G__44644 = seq__44631_44637;
var G__44645 = chunk__44632_44638;
var G__44646 = count__44633_44639;
var G__44647 = (i__44634_44640 + (1));
seq__44631_44637 = G__44644;
chunk__44632_44638 = G__44645;
count__44633_44639 = G__44646;
i__44634_44640 = G__44647;
continue;
}
} else
{var temp__4126__auto___44648 = cljs.core.seq(seq__44631_44637);if(temp__4126__auto___44648)
{var seq__44631_44649__$1 = temp__4126__auto___44648;if(cljs.core.chunked_seq_QMARK_(seq__44631_44649__$1))
{var c__4314__auto___44650 = cljs.core.chunk_first(seq__44631_44649__$1);{
var G__44651 = cljs.core.chunk_rest(seq__44631_44649__$1);
var G__44652 = c__4314__auto___44650;
var G__44653 = cljs.core.count(c__4314__auto___44650);
var G__44654 = (0);
seq__44631_44637 = G__44651;
chunk__44632_44638 = G__44652;
count__44633_44639 = G__44653;
i__44634_44640 = G__44654;
continue;
}
} else
{var vec__44636_44655 = cljs.core.first(seq__44631_44649__$1);var name_44656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44636_44655,(0),null);var value_44657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44636_44655,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44656,cljs.core.array_seq([value_44657], 0));
{
var G__44658 = cljs.core.next(seq__44631_44649__$1);
var G__44659 = null;
var G__44660 = (0);
var G__44661 = (0);
seq__44631_44637 = G__44658;
chunk__44632_44638 = G__44659;
count__44633_44639 = G__44660;
i__44634_44640 = G__44661;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44668_44674 = cljs.core.seq(attrs);var chunk__44669_44675 = null;var count__44670_44676 = (0);var i__44671_44677 = (0);while(true){
if((i__44671_44677 < count__44670_44676))
{var vec__44672_44678 = chunk__44669_44675.cljs$core$IIndexed$_nth$arity$2(null,i__44671_44677);var name_44679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672_44678,(0),null);var value_44680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44672_44678,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44679,cljs.core.array_seq([value_44680], 0));
{
var G__44681 = seq__44668_44674;
var G__44682 = chunk__44669_44675;
var G__44683 = count__44670_44676;
var G__44684 = (i__44671_44677 + (1));
seq__44668_44674 = G__44681;
chunk__44669_44675 = G__44682;
count__44670_44676 = G__44683;
i__44671_44677 = G__44684;
continue;
}
} else
{var temp__4126__auto___44685 = cljs.core.seq(seq__44668_44674);if(temp__4126__auto___44685)
{var seq__44668_44686__$1 = temp__4126__auto___44685;if(cljs.core.chunked_seq_QMARK_(seq__44668_44686__$1))
{var c__4314__auto___44687 = cljs.core.chunk_first(seq__44668_44686__$1);{
var G__44688 = cljs.core.chunk_rest(seq__44668_44686__$1);
var G__44689 = c__4314__auto___44687;
var G__44690 = cljs.core.count(c__4314__auto___44687);
var G__44691 = (0);
seq__44668_44674 = G__44688;
chunk__44669_44675 = G__44689;
count__44670_44676 = G__44690;
i__44671_44677 = G__44691;
continue;
}
} else
{var vec__44673_44692 = cljs.core.first(seq__44668_44686__$1);var name_44693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44673_44692,(0),null);var value_44694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44673_44692,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44693,cljs.core.array_seq([value_44694], 0));
{
var G__44695 = cljs.core.next(seq__44668_44686__$1);
var G__44696 = null;
var G__44697 = (0);
var G__44698 = (0);
seq__44668_44674 = G__44695;
chunk__44669_44675 = G__44696;
count__44670_44676 = G__44697;
i__44671_44677 = G__44698;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44703_44707 = cljs.core.seq(domina.nodes(content));var chunk__44704_44708 = null;var count__44705_44709 = (0);var i__44706_44710 = (0);while(true){
if((i__44706_44710 < count__44705_44709))
{var node_44711 = chunk__44704_44708.cljs$core$IIndexed$_nth$arity$2(null,i__44706_44710);goog.dom.classes.add(node_44711,class$);
{
var G__44712 = seq__44703_44707;
var G__44713 = chunk__44704_44708;
var G__44714 = count__44705_44709;
var G__44715 = (i__44706_44710 + (1));
seq__44703_44707 = G__44712;
chunk__44704_44708 = G__44713;
count__44705_44709 = G__44714;
i__44706_44710 = G__44715;
continue;
}
} else
{var temp__4126__auto___44716 = cljs.core.seq(seq__44703_44707);if(temp__4126__auto___44716)
{var seq__44703_44717__$1 = temp__4126__auto___44716;if(cljs.core.chunked_seq_QMARK_(seq__44703_44717__$1))
{var c__4314__auto___44718 = cljs.core.chunk_first(seq__44703_44717__$1);{
var G__44719 = cljs.core.chunk_rest(seq__44703_44717__$1);
var G__44720 = c__4314__auto___44718;
var G__44721 = cljs.core.count(c__4314__auto___44718);
var G__44722 = (0);
seq__44703_44707 = G__44719;
chunk__44704_44708 = G__44720;
count__44705_44709 = G__44721;
i__44706_44710 = G__44722;
continue;
}
} else
{var node_44723 = cljs.core.first(seq__44703_44717__$1);goog.dom.classes.add(node_44723,class$);
{
var G__44724 = cljs.core.next(seq__44703_44717__$1);
var G__44725 = null;
var G__44726 = (0);
var G__44727 = (0);
seq__44703_44707 = G__44724;
chunk__44704_44708 = G__44725;
count__44705_44709 = G__44726;
i__44706_44710 = G__44727;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44732_44736 = cljs.core.seq(domina.nodes(content));var chunk__44733_44737 = null;var count__44734_44738 = (0);var i__44735_44739 = (0);while(true){
if((i__44735_44739 < count__44734_44738))
{var node_44740 = chunk__44733_44737.cljs$core$IIndexed$_nth$arity$2(null,i__44735_44739);goog.dom.classes.remove(node_44740,class$);
{
var G__44741 = seq__44732_44736;
var G__44742 = chunk__44733_44737;
var G__44743 = count__44734_44738;
var G__44744 = (i__44735_44739 + (1));
seq__44732_44736 = G__44741;
chunk__44733_44737 = G__44742;
count__44734_44738 = G__44743;
i__44735_44739 = G__44744;
continue;
}
} else
{var temp__4126__auto___44745 = cljs.core.seq(seq__44732_44736);if(temp__4126__auto___44745)
{var seq__44732_44746__$1 = temp__4126__auto___44745;if(cljs.core.chunked_seq_QMARK_(seq__44732_44746__$1))
{var c__4314__auto___44747 = cljs.core.chunk_first(seq__44732_44746__$1);{
var G__44748 = cljs.core.chunk_rest(seq__44732_44746__$1);
var G__44749 = c__4314__auto___44747;
var G__44750 = cljs.core.count(c__4314__auto___44747);
var G__44751 = (0);
seq__44732_44736 = G__44748;
chunk__44733_44737 = G__44749;
count__44734_44738 = G__44750;
i__44735_44739 = G__44751;
continue;
}
} else
{var node_44752 = cljs.core.first(seq__44732_44746__$1);goog.dom.classes.remove(node_44752,class$);
{
var G__44753 = cljs.core.next(seq__44732_44746__$1);
var G__44754 = null;
var G__44755 = (0);
var G__44756 = (0);
seq__44732_44736 = G__44753;
chunk__44733_44737 = G__44754;
count__44734_44738 = G__44755;
i__44735_44739 = G__44756;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44761_44765 = cljs.core.seq(domina.nodes(content));var chunk__44762_44766 = null;var count__44763_44767 = (0);var i__44764_44768 = (0);while(true){
if((i__44764_44768 < count__44763_44767))
{var node_44769 = chunk__44762_44766.cljs$core$IIndexed$_nth$arity$2(null,i__44764_44768);goog.dom.classes.toggle(node_44769,class$);
{
var G__44770 = seq__44761_44765;
var G__44771 = chunk__44762_44766;
var G__44772 = count__44763_44767;
var G__44773 = (i__44764_44768 + (1));
seq__44761_44765 = G__44770;
chunk__44762_44766 = G__44771;
count__44763_44767 = G__44772;
i__44764_44768 = G__44773;
continue;
}
} else
{var temp__4126__auto___44774 = cljs.core.seq(seq__44761_44765);if(temp__4126__auto___44774)
{var seq__44761_44775__$1 = temp__4126__auto___44774;if(cljs.core.chunked_seq_QMARK_(seq__44761_44775__$1))
{var c__4314__auto___44776 = cljs.core.chunk_first(seq__44761_44775__$1);{
var G__44777 = cljs.core.chunk_rest(seq__44761_44775__$1);
var G__44778 = c__4314__auto___44776;
var G__44779 = cljs.core.count(c__4314__auto___44776);
var G__44780 = (0);
seq__44761_44765 = G__44777;
chunk__44762_44766 = G__44778;
count__44763_44767 = G__44779;
i__44764_44768 = G__44780;
continue;
}
} else
{var node_44781 = cljs.core.first(seq__44761_44775__$1);goog.dom.classes.toggle(node_44781,class$);
{
var G__44782 = cljs.core.next(seq__44761_44775__$1);
var G__44783 = null;
var G__44784 = (0);
var G__44785 = (0);
seq__44761_44765 = G__44782;
chunk__44762_44766 = G__44783;
count__44763_44767 = G__44784;
i__44764_44768 = G__44785;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44794__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__44790_44795 = cljs.core.seq(domina.nodes(content));var chunk__44791_44796 = null;var count__44792_44797 = (0);var i__44793_44798 = (0);while(true){
if((i__44793_44798 < count__44792_44797))
{var node_44799 = chunk__44791_44796.cljs$core$IIndexed$_nth$arity$2(null,i__44793_44798);goog.dom.classes.set(node_44799,classes_44794__$1);
{
var G__44800 = seq__44790_44795;
var G__44801 = chunk__44791_44796;
var G__44802 = count__44792_44797;
var G__44803 = (i__44793_44798 + (1));
seq__44790_44795 = G__44800;
chunk__44791_44796 = G__44801;
count__44792_44797 = G__44802;
i__44793_44798 = G__44803;
continue;
}
} else
{var temp__4126__auto___44804 = cljs.core.seq(seq__44790_44795);if(temp__4126__auto___44804)
{var seq__44790_44805__$1 = temp__4126__auto___44804;if(cljs.core.chunked_seq_QMARK_(seq__44790_44805__$1))
{var c__4314__auto___44806 = cljs.core.chunk_first(seq__44790_44805__$1);{
var G__44807 = cljs.core.chunk_rest(seq__44790_44805__$1);
var G__44808 = c__4314__auto___44806;
var G__44809 = cljs.core.count(c__4314__auto___44806);
var G__44810 = (0);
seq__44790_44795 = G__44807;
chunk__44791_44796 = G__44808;
count__44792_44797 = G__44809;
i__44793_44798 = G__44810;
continue;
}
} else
{var node_44811 = cljs.core.first(seq__44790_44805__$1);goog.dom.classes.set(node_44811,classes_44794__$1);
{
var G__44812 = cljs.core.next(seq__44790_44805__$1);
var G__44813 = null;
var G__44814 = (0);
var G__44815 = (0);
seq__44790_44795 = G__44812;
chunk__44791_44796 = G__44813;
count__44792_44797 = G__44814;
i__44793_44798 = G__44815;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44820_44824 = cljs.core.seq(domina.nodes(content));var chunk__44821_44825 = null;var count__44822_44826 = (0);var i__44823_44827 = (0);while(true){
if((i__44823_44827 < count__44822_44826))
{var node_44828 = chunk__44821_44825.cljs$core$IIndexed$_nth$arity$2(null,i__44823_44827);goog.dom.setTextContent(node_44828,value);
{
var G__44829 = seq__44820_44824;
var G__44830 = chunk__44821_44825;
var G__44831 = count__44822_44826;
var G__44832 = (i__44823_44827 + (1));
seq__44820_44824 = G__44829;
chunk__44821_44825 = G__44830;
count__44822_44826 = G__44831;
i__44823_44827 = G__44832;
continue;
}
} else
{var temp__4126__auto___44833 = cljs.core.seq(seq__44820_44824);if(temp__4126__auto___44833)
{var seq__44820_44834__$1 = temp__4126__auto___44833;if(cljs.core.chunked_seq_QMARK_(seq__44820_44834__$1))
{var c__4314__auto___44835 = cljs.core.chunk_first(seq__44820_44834__$1);{
var G__44836 = cljs.core.chunk_rest(seq__44820_44834__$1);
var G__44837 = c__4314__auto___44835;
var G__44838 = cljs.core.count(c__4314__auto___44835);
var G__44839 = (0);
seq__44820_44824 = G__44836;
chunk__44821_44825 = G__44837;
count__44822_44826 = G__44838;
i__44823_44827 = G__44839;
continue;
}
} else
{var node_44840 = cljs.core.first(seq__44820_44834__$1);goog.dom.setTextContent(node_44840,value);
{
var G__44841 = cljs.core.next(seq__44820_44834__$1);
var G__44842 = null;
var G__44843 = (0);
var G__44844 = (0);
seq__44820_44824 = G__44841;
chunk__44821_44825 = G__44842;
count__44822_44826 = G__44843;
i__44823_44827 = G__44844;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44849_44853 = cljs.core.seq(domina.nodes(content));var chunk__44850_44854 = null;var count__44851_44855 = (0);var i__44852_44856 = (0);while(true){
if((i__44852_44856 < count__44851_44855))
{var node_44857 = chunk__44850_44854.cljs$core$IIndexed$_nth$arity$2(null,i__44852_44856);goog.dom.forms.setValue(node_44857,value);
{
var G__44858 = seq__44849_44853;
var G__44859 = chunk__44850_44854;
var G__44860 = count__44851_44855;
var G__44861 = (i__44852_44856 + (1));
seq__44849_44853 = G__44858;
chunk__44850_44854 = G__44859;
count__44851_44855 = G__44860;
i__44852_44856 = G__44861;
continue;
}
} else
{var temp__4126__auto___44862 = cljs.core.seq(seq__44849_44853);if(temp__4126__auto___44862)
{var seq__44849_44863__$1 = temp__4126__auto___44862;if(cljs.core.chunked_seq_QMARK_(seq__44849_44863__$1))
{var c__4314__auto___44864 = cljs.core.chunk_first(seq__44849_44863__$1);{
var G__44865 = cljs.core.chunk_rest(seq__44849_44863__$1);
var G__44866 = c__4314__auto___44864;
var G__44867 = cljs.core.count(c__4314__auto___44864);
var G__44868 = (0);
seq__44849_44853 = G__44865;
chunk__44850_44854 = G__44866;
count__44851_44855 = G__44867;
i__44852_44856 = G__44868;
continue;
}
} else
{var node_44869 = cljs.core.first(seq__44849_44863__$1);goog.dom.forms.setValue(node_44869,value);
{
var G__44870 = cljs.core.next(seq__44849_44863__$1);
var G__44871 = null;
var G__44872 = (0);
var G__44873 = (0);
seq__44849_44853 = G__44870;
chunk__44850_44854 = G__44871;
count__44851_44855 = G__44872;
i__44852_44856 = G__44873;
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
{var value_44884 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__44880_44885 = cljs.core.seq(domina.nodes(content));var chunk__44881_44886 = null;var count__44882_44887 = (0);var i__44883_44888 = (0);while(true){
if((i__44883_44888 < count__44882_44887))
{var node_44889 = chunk__44881_44886.cljs$core$IIndexed$_nth$arity$2(null,i__44883_44888);node_44889.innerHTML = value_44884;
{
var G__44890 = seq__44880_44885;
var G__44891 = chunk__44881_44886;
var G__44892 = count__44882_44887;
var G__44893 = (i__44883_44888 + (1));
seq__44880_44885 = G__44890;
chunk__44881_44886 = G__44891;
count__44882_44887 = G__44892;
i__44883_44888 = G__44893;
continue;
}
} else
{var temp__4126__auto___44894 = cljs.core.seq(seq__44880_44885);if(temp__4126__auto___44894)
{var seq__44880_44895__$1 = temp__4126__auto___44894;if(cljs.core.chunked_seq_QMARK_(seq__44880_44895__$1))
{var c__4314__auto___44896 = cljs.core.chunk_first(seq__44880_44895__$1);{
var G__44897 = cljs.core.chunk_rest(seq__44880_44895__$1);
var G__44898 = c__4314__auto___44896;
var G__44899 = cljs.core.count(c__4314__auto___44896);
var G__44900 = (0);
seq__44880_44885 = G__44897;
chunk__44881_44886 = G__44898;
count__44882_44887 = G__44899;
i__44883_44888 = G__44900;
continue;
}
} else
{var node_44901 = cljs.core.first(seq__44880_44895__$1);node_44901.innerHTML = value_44884;
{
var G__44902 = cljs.core.next(seq__44880_44895__$1);
var G__44903 = null;
var G__44904 = (0);
var G__44905 = (0);
seq__44880_44885 = G__44902;
chunk__44881_44886 = G__44903;
count__44882_44887 = G__44904;
i__44883_44888 = G__44905;
continue;
}
}
} else
{}
}
break;
}
}catch (e44879){if((e44879 instanceof Error))
{var e_44906 = e44879;domina.replace_children_BANG_(content,value_44884);
} else
{throw e44879;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__44913_44917 = cljs.core.seq(children);var chunk__44914_44918 = null;var count__44915_44919 = (0);var i__44916_44920 = (0);while(true){
if((i__44916_44920 < count__44915_44919))
{var child_44921 = chunk__44914_44918.cljs$core$IIndexed$_nth$arity$2(null,i__44916_44920);frag.appendChild(child_44921);
{
var G__44922 = seq__44913_44917;
var G__44923 = chunk__44914_44918;
var G__44924 = count__44915_44919;
var G__44925 = (i__44916_44920 + (1));
seq__44913_44917 = G__44922;
chunk__44914_44918 = G__44923;
count__44915_44919 = G__44924;
i__44916_44920 = G__44925;
continue;
}
} else
{var temp__4126__auto___44926 = cljs.core.seq(seq__44913_44917);if(temp__4126__auto___44926)
{var seq__44913_44927__$1 = temp__4126__auto___44926;if(cljs.core.chunked_seq_QMARK_(seq__44913_44927__$1))
{var c__4314__auto___44928 = cljs.core.chunk_first(seq__44913_44927__$1);{
var G__44929 = cljs.core.chunk_rest(seq__44913_44927__$1);
var G__44930 = c__4314__auto___44928;
var G__44931 = cljs.core.count(c__4314__auto___44928);
var G__44932 = (0);
seq__44913_44917 = G__44929;
chunk__44914_44918 = G__44930;
count__44915_44919 = G__44931;
i__44916_44920 = G__44932;
continue;
}
} else
{var child_44933 = cljs.core.first(seq__44913_44927__$1);frag.appendChild(child_44933);
{
var G__44934 = cljs.core.next(seq__44913_44927__$1);
var G__44935 = null;
var G__44936 = (0);
var G__44937 = (0);
seq__44913_44917 = G__44934;
chunk__44914_44918 = G__44935;
count__44915_44919 = G__44936;
i__44916_44920 = G__44937;
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
return (function (p1__44907_SHARP_,p2__44908_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__44907_SHARP_,p2__44908_SHARP_) : f.call(null,p1__44907_SHARP_,p2__44908_SHARP_));
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
{if((function (){var G__44939 = list_thing;if(G__44939)
{var bit__4208__auto__ = (G__44939.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__44939.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44939);
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
{if((function (){var G__44940 = content;if(G__44940)
{var bit__4208__auto__ = (G__44940.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__44940.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44940.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44940);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44940);
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
{if((function (){var G__44941 = content;if(G__44941)
{var bit__4208__auto__ = (G__44941.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__44941.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44941.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44941);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44941);
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
