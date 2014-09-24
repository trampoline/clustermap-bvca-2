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
var opt_wrapper_44564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44565 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_44566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$835,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_44566,opt_wrapper_44564,table_section_wrapper_44565,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_44564,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_44565,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_44565,cell_wrapper_44566,table_section_wrapper_44565,table_section_wrapper_44565]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__44571 = cljs.core.seq(tbody);var chunk__44572 = null;var count__44573 = (0);var i__44574 = (0);while(true){
if((i__44574 < count__44573))
{var child = chunk__44572.cljs$core$IIndexed$_nth$arity$2(null,i__44574);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44575 = seq__44571;
var G__44576 = chunk__44572;
var G__44577 = count__44573;
var G__44578 = (i__44574 + (1));
seq__44571 = G__44575;
chunk__44572 = G__44576;
count__44573 = G__44577;
i__44574 = G__44578;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44571);if(temp__4126__auto__)
{var seq__44571__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44571__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__44571__$1);{
var G__44579 = cljs.core.chunk_rest(seq__44571__$1);
var G__44580 = c__4314__auto__;
var G__44581 = cljs.core.count(c__4314__auto__);
var G__44582 = (0);
seq__44571 = G__44579;
chunk__44572 = G__44580;
count__44573 = G__44581;
i__44574 = G__44582;
continue;
}
} else
{var child = cljs.core.first(seq__44571__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44583 = cljs.core.next(seq__44571__$1);
var G__44584 = null;
var G__44585 = (0);
var G__44586 = (0);
seq__44571 = G__44583;
chunk__44572 = G__44584;
count__44573 = G__44585;
i__44574 = G__44586;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__44588 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44588,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__44589 = wrapper.lastChild;
var G__44590 = (level - (1));
wrapper = G__44589;
level = G__44590;
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
domina.DomContent = (function (){var obj44592 = {};return obj44592;
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
log_debug.cljs$lang$applyTo = (function (arglist__44593){
var mesg = cljs.core.seq(arglist__44593);
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
log.cljs$lang$applyTo = (function (arglist__44594){
var mesg = cljs.core.seq(arglist__44594);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44595){
var contents = cljs.core.seq(arglist__44595);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44596_SHARP_){return p1__44596_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44597_SHARP_,p2__44598_SHARP_){return goog.dom.insertChildAt(p1__44597_SHARP_,p2__44598_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__44597_SHARP_,p2__44598_SHARP_){return goog.dom.insertChildAt(p1__44597_SHARP_,p2__44598_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44600_SHARP_,p2__44599_SHARP_){return goog.dom.insertSiblingBefore(p2__44599_SHARP_,p1__44600_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44600_SHARP_,p2__44599_SHARP_){return goog.dom.insertSiblingBefore(p2__44599_SHARP_,p1__44600_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44602_SHARP_,p2__44601_SHARP_){return goog.dom.insertSiblingAfter(p2__44601_SHARP_,p1__44602_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44602_SHARP_,p2__44601_SHARP_){return goog.dom.insertSiblingAfter(p2__44601_SHARP_,p1__44602_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44604_SHARP_,p2__44603_SHARP_){return goog.dom.replaceNode(p2__44603_SHARP_,p1__44604_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44604_SHARP_,p2__44603_SHARP_){return goog.dom.replaceNode(p2__44603_SHARP_,p1__44604_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44609_44613 = cljs.core.seq(domina.nodes(content));var chunk__44610_44614 = null;var count__44611_44615 = (0);var i__44612_44616 = (0);while(true){
if((i__44612_44616 < count__44611_44615))
{var n_44617 = chunk__44610_44614.cljs$core$IIndexed$_nth$arity$2(null,i__44612_44616);goog.style.setStyle(n_44617,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44618 = seq__44609_44613;
var G__44619 = chunk__44610_44614;
var G__44620 = count__44611_44615;
var G__44621 = (i__44612_44616 + (1));
seq__44609_44613 = G__44618;
chunk__44610_44614 = G__44619;
count__44611_44615 = G__44620;
i__44612_44616 = G__44621;
continue;
}
} else
{var temp__4126__auto___44622 = cljs.core.seq(seq__44609_44613);if(temp__4126__auto___44622)
{var seq__44609_44623__$1 = temp__4126__auto___44622;if(cljs.core.chunked_seq_QMARK_(seq__44609_44623__$1))
{var c__4314__auto___44624 = cljs.core.chunk_first(seq__44609_44623__$1);{
var G__44625 = cljs.core.chunk_rest(seq__44609_44623__$1);
var G__44626 = c__4314__auto___44624;
var G__44627 = cljs.core.count(c__4314__auto___44624);
var G__44628 = (0);
seq__44609_44613 = G__44625;
chunk__44610_44614 = G__44626;
count__44611_44615 = G__44627;
i__44612_44616 = G__44628;
continue;
}
} else
{var n_44629 = cljs.core.first(seq__44609_44623__$1);goog.style.setStyle(n_44629,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44630 = cljs.core.next(seq__44609_44623__$1);
var G__44631 = null;
var G__44632 = (0);
var G__44633 = (0);
seq__44609_44613 = G__44630;
chunk__44610_44614 = G__44631;
count__44611_44615 = G__44632;
i__44612_44616 = G__44633;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44634){
var content = cljs.core.first(arglist__44634);
arglist__44634 = cljs.core.next(arglist__44634);
var name = cljs.core.first(arglist__44634);
var value = cljs.core.rest(arglist__44634);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44639_44643 = cljs.core.seq(domina.nodes(content));var chunk__44640_44644 = null;var count__44641_44645 = (0);var i__44642_44646 = (0);while(true){
if((i__44642_44646 < count__44641_44645))
{var n_44647 = chunk__44640_44644.cljs$core$IIndexed$_nth$arity$2(null,i__44642_44646);n_44647.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44648 = seq__44639_44643;
var G__44649 = chunk__44640_44644;
var G__44650 = count__44641_44645;
var G__44651 = (i__44642_44646 + (1));
seq__44639_44643 = G__44648;
chunk__44640_44644 = G__44649;
count__44641_44645 = G__44650;
i__44642_44646 = G__44651;
continue;
}
} else
{var temp__4126__auto___44652 = cljs.core.seq(seq__44639_44643);if(temp__4126__auto___44652)
{var seq__44639_44653__$1 = temp__4126__auto___44652;if(cljs.core.chunked_seq_QMARK_(seq__44639_44653__$1))
{var c__4314__auto___44654 = cljs.core.chunk_first(seq__44639_44653__$1);{
var G__44655 = cljs.core.chunk_rest(seq__44639_44653__$1);
var G__44656 = c__4314__auto___44654;
var G__44657 = cljs.core.count(c__4314__auto___44654);
var G__44658 = (0);
seq__44639_44643 = G__44655;
chunk__44640_44644 = G__44656;
count__44641_44645 = G__44657;
i__44642_44646 = G__44658;
continue;
}
} else
{var n_44659 = cljs.core.first(seq__44639_44653__$1);n_44659.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44660 = cljs.core.next(seq__44639_44653__$1);
var G__44661 = null;
var G__44662 = (0);
var G__44663 = (0);
seq__44639_44643 = G__44660;
chunk__44640_44644 = G__44661;
count__44641_44645 = G__44662;
i__44642_44646 = G__44663;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44664){
var content = cljs.core.first(arglist__44664);
arglist__44664 = cljs.core.next(arglist__44664);
var name = cljs.core.first(arglist__44664);
var value = cljs.core.rest(arglist__44664);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44669_44673 = cljs.core.seq(domina.nodes(content));var chunk__44670_44674 = null;var count__44671_44675 = (0);var i__44672_44676 = (0);while(true){
if((i__44672_44676 < count__44671_44675))
{var n_44677 = chunk__44670_44674.cljs$core$IIndexed$_nth$arity$2(null,i__44672_44676);n_44677.removeAttribute(cljs.core.name(name));
{
var G__44678 = seq__44669_44673;
var G__44679 = chunk__44670_44674;
var G__44680 = count__44671_44675;
var G__44681 = (i__44672_44676 + (1));
seq__44669_44673 = G__44678;
chunk__44670_44674 = G__44679;
count__44671_44675 = G__44680;
i__44672_44676 = G__44681;
continue;
}
} else
{var temp__4126__auto___44682 = cljs.core.seq(seq__44669_44673);if(temp__4126__auto___44682)
{var seq__44669_44683__$1 = temp__4126__auto___44682;if(cljs.core.chunked_seq_QMARK_(seq__44669_44683__$1))
{var c__4314__auto___44684 = cljs.core.chunk_first(seq__44669_44683__$1);{
var G__44685 = cljs.core.chunk_rest(seq__44669_44683__$1);
var G__44686 = c__4314__auto___44684;
var G__44687 = cljs.core.count(c__4314__auto___44684);
var G__44688 = (0);
seq__44669_44673 = G__44685;
chunk__44670_44674 = G__44686;
count__44671_44675 = G__44687;
i__44672_44676 = G__44688;
continue;
}
} else
{var n_44689 = cljs.core.first(seq__44669_44683__$1);n_44689.removeAttribute(cljs.core.name(name));
{
var G__44690 = cljs.core.next(seq__44669_44683__$1);
var G__44691 = null;
var G__44692 = (0);
var G__44693 = (0);
seq__44669_44673 = G__44690;
chunk__44670_44674 = G__44691;
count__44671_44675 = G__44692;
i__44672_44676 = G__44693;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__44695 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__44696_SHARP_){var attr = attrs__$1.item(p1__44696_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44703_44709 = cljs.core.seq(styles);var chunk__44704_44710 = null;var count__44705_44711 = (0);var i__44706_44712 = (0);while(true){
if((i__44706_44712 < count__44705_44711))
{var vec__44707_44713 = chunk__44704_44710.cljs$core$IIndexed$_nth$arity$2(null,i__44706_44712);var name_44714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44707_44713,(0),null);var value_44715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44707_44713,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44714,cljs.core.array_seq([value_44715], 0));
{
var G__44716 = seq__44703_44709;
var G__44717 = chunk__44704_44710;
var G__44718 = count__44705_44711;
var G__44719 = (i__44706_44712 + (1));
seq__44703_44709 = G__44716;
chunk__44704_44710 = G__44717;
count__44705_44711 = G__44718;
i__44706_44712 = G__44719;
continue;
}
} else
{var temp__4126__auto___44720 = cljs.core.seq(seq__44703_44709);if(temp__4126__auto___44720)
{var seq__44703_44721__$1 = temp__4126__auto___44720;if(cljs.core.chunked_seq_QMARK_(seq__44703_44721__$1))
{var c__4314__auto___44722 = cljs.core.chunk_first(seq__44703_44721__$1);{
var G__44723 = cljs.core.chunk_rest(seq__44703_44721__$1);
var G__44724 = c__4314__auto___44722;
var G__44725 = cljs.core.count(c__4314__auto___44722);
var G__44726 = (0);
seq__44703_44709 = G__44723;
chunk__44704_44710 = G__44724;
count__44705_44711 = G__44725;
i__44706_44712 = G__44726;
continue;
}
} else
{var vec__44708_44727 = cljs.core.first(seq__44703_44721__$1);var name_44728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44708_44727,(0),null);var value_44729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44708_44727,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44728,cljs.core.array_seq([value_44729], 0));
{
var G__44730 = cljs.core.next(seq__44703_44721__$1);
var G__44731 = null;
var G__44732 = (0);
var G__44733 = (0);
seq__44703_44709 = G__44730;
chunk__44704_44710 = G__44731;
count__44705_44711 = G__44732;
i__44706_44712 = G__44733;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44740_44746 = cljs.core.seq(attrs);var chunk__44741_44747 = null;var count__44742_44748 = (0);var i__44743_44749 = (0);while(true){
if((i__44743_44749 < count__44742_44748))
{var vec__44744_44750 = chunk__44741_44747.cljs$core$IIndexed$_nth$arity$2(null,i__44743_44749);var name_44751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44744_44750,(0),null);var value_44752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44744_44750,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44751,cljs.core.array_seq([value_44752], 0));
{
var G__44753 = seq__44740_44746;
var G__44754 = chunk__44741_44747;
var G__44755 = count__44742_44748;
var G__44756 = (i__44743_44749 + (1));
seq__44740_44746 = G__44753;
chunk__44741_44747 = G__44754;
count__44742_44748 = G__44755;
i__44743_44749 = G__44756;
continue;
}
} else
{var temp__4126__auto___44757 = cljs.core.seq(seq__44740_44746);if(temp__4126__auto___44757)
{var seq__44740_44758__$1 = temp__4126__auto___44757;if(cljs.core.chunked_seq_QMARK_(seq__44740_44758__$1))
{var c__4314__auto___44759 = cljs.core.chunk_first(seq__44740_44758__$1);{
var G__44760 = cljs.core.chunk_rest(seq__44740_44758__$1);
var G__44761 = c__4314__auto___44759;
var G__44762 = cljs.core.count(c__4314__auto___44759);
var G__44763 = (0);
seq__44740_44746 = G__44760;
chunk__44741_44747 = G__44761;
count__44742_44748 = G__44762;
i__44743_44749 = G__44763;
continue;
}
} else
{var vec__44745_44764 = cljs.core.first(seq__44740_44758__$1);var name_44765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745_44764,(0),null);var value_44766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745_44764,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44765,cljs.core.array_seq([value_44766], 0));
{
var G__44767 = cljs.core.next(seq__44740_44758__$1);
var G__44768 = null;
var G__44769 = (0);
var G__44770 = (0);
seq__44740_44746 = G__44767;
chunk__44741_44747 = G__44768;
count__44742_44748 = G__44769;
i__44743_44749 = G__44770;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44775_44779 = cljs.core.seq(domina.nodes(content));var chunk__44776_44780 = null;var count__44777_44781 = (0);var i__44778_44782 = (0);while(true){
if((i__44778_44782 < count__44777_44781))
{var node_44783 = chunk__44776_44780.cljs$core$IIndexed$_nth$arity$2(null,i__44778_44782);goog.dom.classes.add(node_44783,class$);
{
var G__44784 = seq__44775_44779;
var G__44785 = chunk__44776_44780;
var G__44786 = count__44777_44781;
var G__44787 = (i__44778_44782 + (1));
seq__44775_44779 = G__44784;
chunk__44776_44780 = G__44785;
count__44777_44781 = G__44786;
i__44778_44782 = G__44787;
continue;
}
} else
{var temp__4126__auto___44788 = cljs.core.seq(seq__44775_44779);if(temp__4126__auto___44788)
{var seq__44775_44789__$1 = temp__4126__auto___44788;if(cljs.core.chunked_seq_QMARK_(seq__44775_44789__$1))
{var c__4314__auto___44790 = cljs.core.chunk_first(seq__44775_44789__$1);{
var G__44791 = cljs.core.chunk_rest(seq__44775_44789__$1);
var G__44792 = c__4314__auto___44790;
var G__44793 = cljs.core.count(c__4314__auto___44790);
var G__44794 = (0);
seq__44775_44779 = G__44791;
chunk__44776_44780 = G__44792;
count__44777_44781 = G__44793;
i__44778_44782 = G__44794;
continue;
}
} else
{var node_44795 = cljs.core.first(seq__44775_44789__$1);goog.dom.classes.add(node_44795,class$);
{
var G__44796 = cljs.core.next(seq__44775_44789__$1);
var G__44797 = null;
var G__44798 = (0);
var G__44799 = (0);
seq__44775_44779 = G__44796;
chunk__44776_44780 = G__44797;
count__44777_44781 = G__44798;
i__44778_44782 = G__44799;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44804_44808 = cljs.core.seq(domina.nodes(content));var chunk__44805_44809 = null;var count__44806_44810 = (0);var i__44807_44811 = (0);while(true){
if((i__44807_44811 < count__44806_44810))
{var node_44812 = chunk__44805_44809.cljs$core$IIndexed$_nth$arity$2(null,i__44807_44811);goog.dom.classes.remove(node_44812,class$);
{
var G__44813 = seq__44804_44808;
var G__44814 = chunk__44805_44809;
var G__44815 = count__44806_44810;
var G__44816 = (i__44807_44811 + (1));
seq__44804_44808 = G__44813;
chunk__44805_44809 = G__44814;
count__44806_44810 = G__44815;
i__44807_44811 = G__44816;
continue;
}
} else
{var temp__4126__auto___44817 = cljs.core.seq(seq__44804_44808);if(temp__4126__auto___44817)
{var seq__44804_44818__$1 = temp__4126__auto___44817;if(cljs.core.chunked_seq_QMARK_(seq__44804_44818__$1))
{var c__4314__auto___44819 = cljs.core.chunk_first(seq__44804_44818__$1);{
var G__44820 = cljs.core.chunk_rest(seq__44804_44818__$1);
var G__44821 = c__4314__auto___44819;
var G__44822 = cljs.core.count(c__4314__auto___44819);
var G__44823 = (0);
seq__44804_44808 = G__44820;
chunk__44805_44809 = G__44821;
count__44806_44810 = G__44822;
i__44807_44811 = G__44823;
continue;
}
} else
{var node_44824 = cljs.core.first(seq__44804_44818__$1);goog.dom.classes.remove(node_44824,class$);
{
var G__44825 = cljs.core.next(seq__44804_44818__$1);
var G__44826 = null;
var G__44827 = (0);
var G__44828 = (0);
seq__44804_44808 = G__44825;
chunk__44805_44809 = G__44826;
count__44806_44810 = G__44827;
i__44807_44811 = G__44828;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44833_44837 = cljs.core.seq(domina.nodes(content));var chunk__44834_44838 = null;var count__44835_44839 = (0);var i__44836_44840 = (0);while(true){
if((i__44836_44840 < count__44835_44839))
{var node_44841 = chunk__44834_44838.cljs$core$IIndexed$_nth$arity$2(null,i__44836_44840);goog.dom.classes.toggle(node_44841,class$);
{
var G__44842 = seq__44833_44837;
var G__44843 = chunk__44834_44838;
var G__44844 = count__44835_44839;
var G__44845 = (i__44836_44840 + (1));
seq__44833_44837 = G__44842;
chunk__44834_44838 = G__44843;
count__44835_44839 = G__44844;
i__44836_44840 = G__44845;
continue;
}
} else
{var temp__4126__auto___44846 = cljs.core.seq(seq__44833_44837);if(temp__4126__auto___44846)
{var seq__44833_44847__$1 = temp__4126__auto___44846;if(cljs.core.chunked_seq_QMARK_(seq__44833_44847__$1))
{var c__4314__auto___44848 = cljs.core.chunk_first(seq__44833_44847__$1);{
var G__44849 = cljs.core.chunk_rest(seq__44833_44847__$1);
var G__44850 = c__4314__auto___44848;
var G__44851 = cljs.core.count(c__4314__auto___44848);
var G__44852 = (0);
seq__44833_44837 = G__44849;
chunk__44834_44838 = G__44850;
count__44835_44839 = G__44851;
i__44836_44840 = G__44852;
continue;
}
} else
{var node_44853 = cljs.core.first(seq__44833_44847__$1);goog.dom.classes.toggle(node_44853,class$);
{
var G__44854 = cljs.core.next(seq__44833_44847__$1);
var G__44855 = null;
var G__44856 = (0);
var G__44857 = (0);
seq__44833_44837 = G__44854;
chunk__44834_44838 = G__44855;
count__44835_44839 = G__44856;
i__44836_44840 = G__44857;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44866__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__44862_44867 = cljs.core.seq(domina.nodes(content));var chunk__44863_44868 = null;var count__44864_44869 = (0);var i__44865_44870 = (0);while(true){
if((i__44865_44870 < count__44864_44869))
{var node_44871 = chunk__44863_44868.cljs$core$IIndexed$_nth$arity$2(null,i__44865_44870);goog.dom.classes.set(node_44871,classes_44866__$1);
{
var G__44872 = seq__44862_44867;
var G__44873 = chunk__44863_44868;
var G__44874 = count__44864_44869;
var G__44875 = (i__44865_44870 + (1));
seq__44862_44867 = G__44872;
chunk__44863_44868 = G__44873;
count__44864_44869 = G__44874;
i__44865_44870 = G__44875;
continue;
}
} else
{var temp__4126__auto___44876 = cljs.core.seq(seq__44862_44867);if(temp__4126__auto___44876)
{var seq__44862_44877__$1 = temp__4126__auto___44876;if(cljs.core.chunked_seq_QMARK_(seq__44862_44877__$1))
{var c__4314__auto___44878 = cljs.core.chunk_first(seq__44862_44877__$1);{
var G__44879 = cljs.core.chunk_rest(seq__44862_44877__$1);
var G__44880 = c__4314__auto___44878;
var G__44881 = cljs.core.count(c__4314__auto___44878);
var G__44882 = (0);
seq__44862_44867 = G__44879;
chunk__44863_44868 = G__44880;
count__44864_44869 = G__44881;
i__44865_44870 = G__44882;
continue;
}
} else
{var node_44883 = cljs.core.first(seq__44862_44877__$1);goog.dom.classes.set(node_44883,classes_44866__$1);
{
var G__44884 = cljs.core.next(seq__44862_44877__$1);
var G__44885 = null;
var G__44886 = (0);
var G__44887 = (0);
seq__44862_44867 = G__44884;
chunk__44863_44868 = G__44885;
count__44864_44869 = G__44886;
i__44865_44870 = G__44887;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44892_44896 = cljs.core.seq(domina.nodes(content));var chunk__44893_44897 = null;var count__44894_44898 = (0);var i__44895_44899 = (0);while(true){
if((i__44895_44899 < count__44894_44898))
{var node_44900 = chunk__44893_44897.cljs$core$IIndexed$_nth$arity$2(null,i__44895_44899);goog.dom.setTextContent(node_44900,value);
{
var G__44901 = seq__44892_44896;
var G__44902 = chunk__44893_44897;
var G__44903 = count__44894_44898;
var G__44904 = (i__44895_44899 + (1));
seq__44892_44896 = G__44901;
chunk__44893_44897 = G__44902;
count__44894_44898 = G__44903;
i__44895_44899 = G__44904;
continue;
}
} else
{var temp__4126__auto___44905 = cljs.core.seq(seq__44892_44896);if(temp__4126__auto___44905)
{var seq__44892_44906__$1 = temp__4126__auto___44905;if(cljs.core.chunked_seq_QMARK_(seq__44892_44906__$1))
{var c__4314__auto___44907 = cljs.core.chunk_first(seq__44892_44906__$1);{
var G__44908 = cljs.core.chunk_rest(seq__44892_44906__$1);
var G__44909 = c__4314__auto___44907;
var G__44910 = cljs.core.count(c__4314__auto___44907);
var G__44911 = (0);
seq__44892_44896 = G__44908;
chunk__44893_44897 = G__44909;
count__44894_44898 = G__44910;
i__44895_44899 = G__44911;
continue;
}
} else
{var node_44912 = cljs.core.first(seq__44892_44906__$1);goog.dom.setTextContent(node_44912,value);
{
var G__44913 = cljs.core.next(seq__44892_44906__$1);
var G__44914 = null;
var G__44915 = (0);
var G__44916 = (0);
seq__44892_44896 = G__44913;
chunk__44893_44897 = G__44914;
count__44894_44898 = G__44915;
i__44895_44899 = G__44916;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44921_44925 = cljs.core.seq(domina.nodes(content));var chunk__44922_44926 = null;var count__44923_44927 = (0);var i__44924_44928 = (0);while(true){
if((i__44924_44928 < count__44923_44927))
{var node_44929 = chunk__44922_44926.cljs$core$IIndexed$_nth$arity$2(null,i__44924_44928);goog.dom.forms.setValue(node_44929,value);
{
var G__44930 = seq__44921_44925;
var G__44931 = chunk__44922_44926;
var G__44932 = count__44923_44927;
var G__44933 = (i__44924_44928 + (1));
seq__44921_44925 = G__44930;
chunk__44922_44926 = G__44931;
count__44923_44927 = G__44932;
i__44924_44928 = G__44933;
continue;
}
} else
{var temp__4126__auto___44934 = cljs.core.seq(seq__44921_44925);if(temp__4126__auto___44934)
{var seq__44921_44935__$1 = temp__4126__auto___44934;if(cljs.core.chunked_seq_QMARK_(seq__44921_44935__$1))
{var c__4314__auto___44936 = cljs.core.chunk_first(seq__44921_44935__$1);{
var G__44937 = cljs.core.chunk_rest(seq__44921_44935__$1);
var G__44938 = c__4314__auto___44936;
var G__44939 = cljs.core.count(c__4314__auto___44936);
var G__44940 = (0);
seq__44921_44925 = G__44937;
chunk__44922_44926 = G__44938;
count__44923_44927 = G__44939;
i__44924_44928 = G__44940;
continue;
}
} else
{var node_44941 = cljs.core.first(seq__44921_44935__$1);goog.dom.forms.setValue(node_44941,value);
{
var G__44942 = cljs.core.next(seq__44921_44935__$1);
var G__44943 = null;
var G__44944 = (0);
var G__44945 = (0);
seq__44921_44925 = G__44942;
chunk__44922_44926 = G__44943;
count__44923_44927 = G__44944;
i__44924_44928 = G__44945;
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
{var value_44956 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__44952_44957 = cljs.core.seq(domina.nodes(content));var chunk__44953_44958 = null;var count__44954_44959 = (0);var i__44955_44960 = (0);while(true){
if((i__44955_44960 < count__44954_44959))
{var node_44961 = chunk__44953_44958.cljs$core$IIndexed$_nth$arity$2(null,i__44955_44960);node_44961.innerHTML = value_44956;
{
var G__44962 = seq__44952_44957;
var G__44963 = chunk__44953_44958;
var G__44964 = count__44954_44959;
var G__44965 = (i__44955_44960 + (1));
seq__44952_44957 = G__44962;
chunk__44953_44958 = G__44963;
count__44954_44959 = G__44964;
i__44955_44960 = G__44965;
continue;
}
} else
{var temp__4126__auto___44966 = cljs.core.seq(seq__44952_44957);if(temp__4126__auto___44966)
{var seq__44952_44967__$1 = temp__4126__auto___44966;if(cljs.core.chunked_seq_QMARK_(seq__44952_44967__$1))
{var c__4314__auto___44968 = cljs.core.chunk_first(seq__44952_44967__$1);{
var G__44969 = cljs.core.chunk_rest(seq__44952_44967__$1);
var G__44970 = c__4314__auto___44968;
var G__44971 = cljs.core.count(c__4314__auto___44968);
var G__44972 = (0);
seq__44952_44957 = G__44969;
chunk__44953_44958 = G__44970;
count__44954_44959 = G__44971;
i__44955_44960 = G__44972;
continue;
}
} else
{var node_44973 = cljs.core.first(seq__44952_44967__$1);node_44973.innerHTML = value_44956;
{
var G__44974 = cljs.core.next(seq__44952_44967__$1);
var G__44975 = null;
var G__44976 = (0);
var G__44977 = (0);
seq__44952_44957 = G__44974;
chunk__44953_44958 = G__44975;
count__44954_44959 = G__44976;
i__44955_44960 = G__44977;
continue;
}
}
} else
{}
}
break;
}
}catch (e44951){if((e44951 instanceof Error))
{var e_44978 = e44951;domina.replace_children_BANG_(content,value_44956);
} else
{throw e44951;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__44985_44989 = cljs.core.seq(children);var chunk__44986_44990 = null;var count__44987_44991 = (0);var i__44988_44992 = (0);while(true){
if((i__44988_44992 < count__44987_44991))
{var child_44993 = chunk__44986_44990.cljs$core$IIndexed$_nth$arity$2(null,i__44988_44992);frag.appendChild(child_44993);
{
var G__44994 = seq__44985_44989;
var G__44995 = chunk__44986_44990;
var G__44996 = count__44987_44991;
var G__44997 = (i__44988_44992 + (1));
seq__44985_44989 = G__44994;
chunk__44986_44990 = G__44995;
count__44987_44991 = G__44996;
i__44988_44992 = G__44997;
continue;
}
} else
{var temp__4126__auto___44998 = cljs.core.seq(seq__44985_44989);if(temp__4126__auto___44998)
{var seq__44985_44999__$1 = temp__4126__auto___44998;if(cljs.core.chunked_seq_QMARK_(seq__44985_44999__$1))
{var c__4314__auto___45000 = cljs.core.chunk_first(seq__44985_44999__$1);{
var G__45001 = cljs.core.chunk_rest(seq__44985_44999__$1);
var G__45002 = c__4314__auto___45000;
var G__45003 = cljs.core.count(c__4314__auto___45000);
var G__45004 = (0);
seq__44985_44989 = G__45001;
chunk__44986_44990 = G__45002;
count__44987_44991 = G__45003;
i__44988_44992 = G__45004;
continue;
}
} else
{var child_45005 = cljs.core.first(seq__44985_44999__$1);frag.appendChild(child_45005);
{
var G__45006 = cljs.core.next(seq__44985_44999__$1);
var G__45007 = null;
var G__45008 = (0);
var G__45009 = (0);
seq__44985_44989 = G__45006;
chunk__44986_44990 = G__45007;
count__44987_44991 = G__45008;
i__44988_44992 = G__45009;
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
return (function (p1__44979_SHARP_,p2__44980_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__44979_SHARP_,p2__44980_SHARP_) : f.call(null,p1__44979_SHARP_,p2__44980_SHARP_));
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
{if((function (){var G__45011 = list_thing;if(G__45011)
{var bit__4208__auto__ = (G__45011.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__45011.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45011);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45011);
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
{if((function (){var G__45012 = content;if(G__45012)
{var bit__4208__auto__ = (G__45012.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__45012.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45012.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45012);
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
{if((function (){var G__45013 = content;if(G__45013)
{var bit__4208__auto__ = (G__45013.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__45013.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45013.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45013);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45013);
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
