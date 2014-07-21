// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_44602 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44603 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_44604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$765,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_44604,opt_wrapper_44602,table_section_wrapper_44603,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_44602,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_44603,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_44603,cell_wrapper_44604,table_section_wrapper_44603,table_section_wrapper_44603]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__44609 = cljs.core.seq(tbody);var chunk__44610 = null;var count__44611 = (0);var i__44612 = (0);while(true){
if((i__44612 < count__44611))
{var child = chunk__44610.cljs$core$IIndexed$_nth$arity$2(null,i__44612);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44613 = seq__44609;
var G__44614 = chunk__44610;
var G__44615 = count__44611;
var G__44616 = (i__44612 + (1));
seq__44609 = G__44613;
chunk__44610 = G__44614;
count__44611 = G__44615;
i__44612 = G__44616;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44609);if(temp__4126__auto__)
{var seq__44609__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44609__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44609__$1);{
var G__44617 = cljs.core.chunk_rest(seq__44609__$1);
var G__44618 = c__4299__auto__;
var G__44619 = cljs.core.count(c__4299__auto__);
var G__44620 = (0);
seq__44609 = G__44617;
chunk__44610 = G__44618;
count__44611 = G__44619;
i__44612 = G__44620;
continue;
}
} else
{var child = cljs.core.first(seq__44609__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44621 = cljs.core.next(seq__44609__$1);
var G__44622 = null;
var G__44623 = (0);
var G__44624 = (0);
seq__44609 = G__44621;
chunk__44610 = G__44622;
count__44611 = G__44623;
i__44612 = G__44624;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__44626 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$765.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__44627 = wrapper.lastChild;
var G__44628 = (level - (1));
wrapper = G__44627;
level = G__44628;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj44630 = {};return obj44630;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__44631){
var mesg = cljs.core.seq(arglist__44631);
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
log.cljs$lang$applyTo = (function (arglist__44632){
var mesg = cljs.core.seq(arglist__44632);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44633){
var contents = cljs.core.seq(arglist__44633);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44634_SHARP_){return p1__44634_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44635_SHARP_,p2__44636_SHARP_){return goog.dom.insertChildAt(p1__44635_SHARP_,p2__44636_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__44635_SHARP_,p2__44636_SHARP_){return goog.dom.insertChildAt(p1__44635_SHARP_,p2__44636_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44638_SHARP_,p2__44637_SHARP_){return goog.dom.insertSiblingBefore(p2__44637_SHARP_,p1__44638_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44638_SHARP_,p2__44637_SHARP_){return goog.dom.insertSiblingBefore(p2__44637_SHARP_,p1__44638_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44640_SHARP_,p2__44639_SHARP_){return goog.dom.insertSiblingAfter(p2__44639_SHARP_,p1__44640_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44640_SHARP_,p2__44639_SHARP_){return goog.dom.insertSiblingAfter(p2__44639_SHARP_,p1__44640_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44642_SHARP_,p2__44641_SHARP_){return goog.dom.replaceNode(p2__44641_SHARP_,p1__44642_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44642_SHARP_,p2__44641_SHARP_){return goog.dom.replaceNode(p2__44641_SHARP_,p1__44642_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44647_44651 = cljs.core.seq(domina.nodes(content));var chunk__44648_44652 = null;var count__44649_44653 = (0);var i__44650_44654 = (0);while(true){
if((i__44650_44654 < count__44649_44653))
{var n_44655 = chunk__44648_44652.cljs$core$IIndexed$_nth$arity$2(null,i__44650_44654);goog.style.setStyle(n_44655,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44656 = seq__44647_44651;
var G__44657 = chunk__44648_44652;
var G__44658 = count__44649_44653;
var G__44659 = (i__44650_44654 + (1));
seq__44647_44651 = G__44656;
chunk__44648_44652 = G__44657;
count__44649_44653 = G__44658;
i__44650_44654 = G__44659;
continue;
}
} else
{var temp__4126__auto___44660 = cljs.core.seq(seq__44647_44651);if(temp__4126__auto___44660)
{var seq__44647_44661__$1 = temp__4126__auto___44660;if(cljs.core.chunked_seq_QMARK_(seq__44647_44661__$1))
{var c__4299__auto___44662 = cljs.core.chunk_first(seq__44647_44661__$1);{
var G__44663 = cljs.core.chunk_rest(seq__44647_44661__$1);
var G__44664 = c__4299__auto___44662;
var G__44665 = cljs.core.count(c__4299__auto___44662);
var G__44666 = (0);
seq__44647_44651 = G__44663;
chunk__44648_44652 = G__44664;
count__44649_44653 = G__44665;
i__44650_44654 = G__44666;
continue;
}
} else
{var n_44667 = cljs.core.first(seq__44647_44661__$1);goog.style.setStyle(n_44667,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44668 = cljs.core.next(seq__44647_44661__$1);
var G__44669 = null;
var G__44670 = (0);
var G__44671 = (0);
seq__44647_44651 = G__44668;
chunk__44648_44652 = G__44669;
count__44649_44653 = G__44670;
i__44650_44654 = G__44671;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44672){
var content = cljs.core.first(arglist__44672);
arglist__44672 = cljs.core.next(arglist__44672);
var name = cljs.core.first(arglist__44672);
var value = cljs.core.rest(arglist__44672);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44677_44681 = cljs.core.seq(domina.nodes(content));var chunk__44678_44682 = null;var count__44679_44683 = (0);var i__44680_44684 = (0);while(true){
if((i__44680_44684 < count__44679_44683))
{var n_44685 = chunk__44678_44682.cljs$core$IIndexed$_nth$arity$2(null,i__44680_44684);n_44685.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44686 = seq__44677_44681;
var G__44687 = chunk__44678_44682;
var G__44688 = count__44679_44683;
var G__44689 = (i__44680_44684 + (1));
seq__44677_44681 = G__44686;
chunk__44678_44682 = G__44687;
count__44679_44683 = G__44688;
i__44680_44684 = G__44689;
continue;
}
} else
{var temp__4126__auto___44690 = cljs.core.seq(seq__44677_44681);if(temp__4126__auto___44690)
{var seq__44677_44691__$1 = temp__4126__auto___44690;if(cljs.core.chunked_seq_QMARK_(seq__44677_44691__$1))
{var c__4299__auto___44692 = cljs.core.chunk_first(seq__44677_44691__$1);{
var G__44693 = cljs.core.chunk_rest(seq__44677_44691__$1);
var G__44694 = c__4299__auto___44692;
var G__44695 = cljs.core.count(c__4299__auto___44692);
var G__44696 = (0);
seq__44677_44681 = G__44693;
chunk__44678_44682 = G__44694;
count__44679_44683 = G__44695;
i__44680_44684 = G__44696;
continue;
}
} else
{var n_44697 = cljs.core.first(seq__44677_44691__$1);n_44697.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44698 = cljs.core.next(seq__44677_44691__$1);
var G__44699 = null;
var G__44700 = (0);
var G__44701 = (0);
seq__44677_44681 = G__44698;
chunk__44678_44682 = G__44699;
count__44679_44683 = G__44700;
i__44680_44684 = G__44701;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44702){
var content = cljs.core.first(arglist__44702);
arglist__44702 = cljs.core.next(arglist__44702);
var name = cljs.core.first(arglist__44702);
var value = cljs.core.rest(arglist__44702);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44707_44711 = cljs.core.seq(domina.nodes(content));var chunk__44708_44712 = null;var count__44709_44713 = (0);var i__44710_44714 = (0);while(true){
if((i__44710_44714 < count__44709_44713))
{var n_44715 = chunk__44708_44712.cljs$core$IIndexed$_nth$arity$2(null,i__44710_44714);n_44715.removeAttribute(cljs.core.name(name));
{
var G__44716 = seq__44707_44711;
var G__44717 = chunk__44708_44712;
var G__44718 = count__44709_44713;
var G__44719 = (i__44710_44714 + (1));
seq__44707_44711 = G__44716;
chunk__44708_44712 = G__44717;
count__44709_44713 = G__44718;
i__44710_44714 = G__44719;
continue;
}
} else
{var temp__4126__auto___44720 = cljs.core.seq(seq__44707_44711);if(temp__4126__auto___44720)
{var seq__44707_44721__$1 = temp__4126__auto___44720;if(cljs.core.chunked_seq_QMARK_(seq__44707_44721__$1))
{var c__4299__auto___44722 = cljs.core.chunk_first(seq__44707_44721__$1);{
var G__44723 = cljs.core.chunk_rest(seq__44707_44721__$1);
var G__44724 = c__4299__auto___44722;
var G__44725 = cljs.core.count(c__4299__auto___44722);
var G__44726 = (0);
seq__44707_44711 = G__44723;
chunk__44708_44712 = G__44724;
count__44709_44713 = G__44725;
i__44710_44714 = G__44726;
continue;
}
} else
{var n_44727 = cljs.core.first(seq__44707_44721__$1);n_44727.removeAttribute(cljs.core.name(name));
{
var G__44728 = cljs.core.next(seq__44707_44721__$1);
var G__44729 = null;
var G__44730 = (0);
var G__44731 = (0);
seq__44707_44711 = G__44728;
chunk__44708_44712 = G__44729;
count__44709_44713 = G__44730;
i__44710_44714 = G__44731;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__44733 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44733,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44733,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(cljs.core.constant$keyword$764)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__44734_SHARP_){var attr = attrs__$1.item(p1__44734_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44741_44747 = cljs.core.seq(styles);var chunk__44742_44748 = null;var count__44743_44749 = (0);var i__44744_44750 = (0);while(true){
if((i__44744_44750 < count__44743_44749))
{var vec__44745_44751 = chunk__44742_44748.cljs$core$IIndexed$_nth$arity$2(null,i__44744_44750);var name_44752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745_44751,(0),null);var value_44753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44745_44751,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44752,cljs.core.array_seq([value_44753], 0));
{
var G__44754 = seq__44741_44747;
var G__44755 = chunk__44742_44748;
var G__44756 = count__44743_44749;
var G__44757 = (i__44744_44750 + (1));
seq__44741_44747 = G__44754;
chunk__44742_44748 = G__44755;
count__44743_44749 = G__44756;
i__44744_44750 = G__44757;
continue;
}
} else
{var temp__4126__auto___44758 = cljs.core.seq(seq__44741_44747);if(temp__4126__auto___44758)
{var seq__44741_44759__$1 = temp__4126__auto___44758;if(cljs.core.chunked_seq_QMARK_(seq__44741_44759__$1))
{var c__4299__auto___44760 = cljs.core.chunk_first(seq__44741_44759__$1);{
var G__44761 = cljs.core.chunk_rest(seq__44741_44759__$1);
var G__44762 = c__4299__auto___44760;
var G__44763 = cljs.core.count(c__4299__auto___44760);
var G__44764 = (0);
seq__44741_44747 = G__44761;
chunk__44742_44748 = G__44762;
count__44743_44749 = G__44763;
i__44744_44750 = G__44764;
continue;
}
} else
{var vec__44746_44765 = cljs.core.first(seq__44741_44759__$1);var name_44766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44746_44765,(0),null);var value_44767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44746_44765,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44766,cljs.core.array_seq([value_44767], 0));
{
var G__44768 = cljs.core.next(seq__44741_44759__$1);
var G__44769 = null;
var G__44770 = (0);
var G__44771 = (0);
seq__44741_44747 = G__44768;
chunk__44742_44748 = G__44769;
count__44743_44749 = G__44770;
i__44744_44750 = G__44771;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44778_44784 = cljs.core.seq(attrs);var chunk__44779_44785 = null;var count__44780_44786 = (0);var i__44781_44787 = (0);while(true){
if((i__44781_44787 < count__44780_44786))
{var vec__44782_44788 = chunk__44779_44785.cljs$core$IIndexed$_nth$arity$2(null,i__44781_44787);var name_44789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44782_44788,(0),null);var value_44790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44782_44788,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44789,cljs.core.array_seq([value_44790], 0));
{
var G__44791 = seq__44778_44784;
var G__44792 = chunk__44779_44785;
var G__44793 = count__44780_44786;
var G__44794 = (i__44781_44787 + (1));
seq__44778_44784 = G__44791;
chunk__44779_44785 = G__44792;
count__44780_44786 = G__44793;
i__44781_44787 = G__44794;
continue;
}
} else
{var temp__4126__auto___44795 = cljs.core.seq(seq__44778_44784);if(temp__4126__auto___44795)
{var seq__44778_44796__$1 = temp__4126__auto___44795;if(cljs.core.chunked_seq_QMARK_(seq__44778_44796__$1))
{var c__4299__auto___44797 = cljs.core.chunk_first(seq__44778_44796__$1);{
var G__44798 = cljs.core.chunk_rest(seq__44778_44796__$1);
var G__44799 = c__4299__auto___44797;
var G__44800 = cljs.core.count(c__4299__auto___44797);
var G__44801 = (0);
seq__44778_44784 = G__44798;
chunk__44779_44785 = G__44799;
count__44780_44786 = G__44800;
i__44781_44787 = G__44801;
continue;
}
} else
{var vec__44783_44802 = cljs.core.first(seq__44778_44796__$1);var name_44803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783_44802,(0),null);var value_44804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44783_44802,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44803,cljs.core.array_seq([value_44804], 0));
{
var G__44805 = cljs.core.next(seq__44778_44796__$1);
var G__44806 = null;
var G__44807 = (0);
var G__44808 = (0);
seq__44778_44784 = G__44805;
chunk__44779_44785 = G__44806;
count__44780_44786 = G__44807;
i__44781_44787 = G__44808;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44813_44817 = cljs.core.seq(domina.nodes(content));var chunk__44814_44818 = null;var count__44815_44819 = (0);var i__44816_44820 = (0);while(true){
if((i__44816_44820 < count__44815_44819))
{var node_44821 = chunk__44814_44818.cljs$core$IIndexed$_nth$arity$2(null,i__44816_44820);goog.dom.classes.add(node_44821,class$);
{
var G__44822 = seq__44813_44817;
var G__44823 = chunk__44814_44818;
var G__44824 = count__44815_44819;
var G__44825 = (i__44816_44820 + (1));
seq__44813_44817 = G__44822;
chunk__44814_44818 = G__44823;
count__44815_44819 = G__44824;
i__44816_44820 = G__44825;
continue;
}
} else
{var temp__4126__auto___44826 = cljs.core.seq(seq__44813_44817);if(temp__4126__auto___44826)
{var seq__44813_44827__$1 = temp__4126__auto___44826;if(cljs.core.chunked_seq_QMARK_(seq__44813_44827__$1))
{var c__4299__auto___44828 = cljs.core.chunk_first(seq__44813_44827__$1);{
var G__44829 = cljs.core.chunk_rest(seq__44813_44827__$1);
var G__44830 = c__4299__auto___44828;
var G__44831 = cljs.core.count(c__4299__auto___44828);
var G__44832 = (0);
seq__44813_44817 = G__44829;
chunk__44814_44818 = G__44830;
count__44815_44819 = G__44831;
i__44816_44820 = G__44832;
continue;
}
} else
{var node_44833 = cljs.core.first(seq__44813_44827__$1);goog.dom.classes.add(node_44833,class$);
{
var G__44834 = cljs.core.next(seq__44813_44827__$1);
var G__44835 = null;
var G__44836 = (0);
var G__44837 = (0);
seq__44813_44817 = G__44834;
chunk__44814_44818 = G__44835;
count__44815_44819 = G__44836;
i__44816_44820 = G__44837;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44842_44846 = cljs.core.seq(domina.nodes(content));var chunk__44843_44847 = null;var count__44844_44848 = (0);var i__44845_44849 = (0);while(true){
if((i__44845_44849 < count__44844_44848))
{var node_44850 = chunk__44843_44847.cljs$core$IIndexed$_nth$arity$2(null,i__44845_44849);goog.dom.classes.remove(node_44850,class$);
{
var G__44851 = seq__44842_44846;
var G__44852 = chunk__44843_44847;
var G__44853 = count__44844_44848;
var G__44854 = (i__44845_44849 + (1));
seq__44842_44846 = G__44851;
chunk__44843_44847 = G__44852;
count__44844_44848 = G__44853;
i__44845_44849 = G__44854;
continue;
}
} else
{var temp__4126__auto___44855 = cljs.core.seq(seq__44842_44846);if(temp__4126__auto___44855)
{var seq__44842_44856__$1 = temp__4126__auto___44855;if(cljs.core.chunked_seq_QMARK_(seq__44842_44856__$1))
{var c__4299__auto___44857 = cljs.core.chunk_first(seq__44842_44856__$1);{
var G__44858 = cljs.core.chunk_rest(seq__44842_44856__$1);
var G__44859 = c__4299__auto___44857;
var G__44860 = cljs.core.count(c__4299__auto___44857);
var G__44861 = (0);
seq__44842_44846 = G__44858;
chunk__44843_44847 = G__44859;
count__44844_44848 = G__44860;
i__44845_44849 = G__44861;
continue;
}
} else
{var node_44862 = cljs.core.first(seq__44842_44856__$1);goog.dom.classes.remove(node_44862,class$);
{
var G__44863 = cljs.core.next(seq__44842_44856__$1);
var G__44864 = null;
var G__44865 = (0);
var G__44866 = (0);
seq__44842_44846 = G__44863;
chunk__44843_44847 = G__44864;
count__44844_44848 = G__44865;
i__44845_44849 = G__44866;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44871_44875 = cljs.core.seq(domina.nodes(content));var chunk__44872_44876 = null;var count__44873_44877 = (0);var i__44874_44878 = (0);while(true){
if((i__44874_44878 < count__44873_44877))
{var node_44879 = chunk__44872_44876.cljs$core$IIndexed$_nth$arity$2(null,i__44874_44878);goog.dom.classes.toggle(node_44879,class$);
{
var G__44880 = seq__44871_44875;
var G__44881 = chunk__44872_44876;
var G__44882 = count__44873_44877;
var G__44883 = (i__44874_44878 + (1));
seq__44871_44875 = G__44880;
chunk__44872_44876 = G__44881;
count__44873_44877 = G__44882;
i__44874_44878 = G__44883;
continue;
}
} else
{var temp__4126__auto___44884 = cljs.core.seq(seq__44871_44875);if(temp__4126__auto___44884)
{var seq__44871_44885__$1 = temp__4126__auto___44884;if(cljs.core.chunked_seq_QMARK_(seq__44871_44885__$1))
{var c__4299__auto___44886 = cljs.core.chunk_first(seq__44871_44885__$1);{
var G__44887 = cljs.core.chunk_rest(seq__44871_44885__$1);
var G__44888 = c__4299__auto___44886;
var G__44889 = cljs.core.count(c__4299__auto___44886);
var G__44890 = (0);
seq__44871_44875 = G__44887;
chunk__44872_44876 = G__44888;
count__44873_44877 = G__44889;
i__44874_44878 = G__44890;
continue;
}
} else
{var node_44891 = cljs.core.first(seq__44871_44885__$1);goog.dom.classes.toggle(node_44891,class$);
{
var G__44892 = cljs.core.next(seq__44871_44885__$1);
var G__44893 = null;
var G__44894 = (0);
var G__44895 = (0);
seq__44871_44875 = G__44892;
chunk__44872_44876 = G__44893;
count__44873_44877 = G__44894;
i__44874_44878 = G__44895;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44904__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__44900_44905 = cljs.core.seq(domina.nodes(content));var chunk__44901_44906 = null;var count__44902_44907 = (0);var i__44903_44908 = (0);while(true){
if((i__44903_44908 < count__44902_44907))
{var node_44909 = chunk__44901_44906.cljs$core$IIndexed$_nth$arity$2(null,i__44903_44908);goog.dom.classes.set(node_44909,classes_44904__$1);
{
var G__44910 = seq__44900_44905;
var G__44911 = chunk__44901_44906;
var G__44912 = count__44902_44907;
var G__44913 = (i__44903_44908 + (1));
seq__44900_44905 = G__44910;
chunk__44901_44906 = G__44911;
count__44902_44907 = G__44912;
i__44903_44908 = G__44913;
continue;
}
} else
{var temp__4126__auto___44914 = cljs.core.seq(seq__44900_44905);if(temp__4126__auto___44914)
{var seq__44900_44915__$1 = temp__4126__auto___44914;if(cljs.core.chunked_seq_QMARK_(seq__44900_44915__$1))
{var c__4299__auto___44916 = cljs.core.chunk_first(seq__44900_44915__$1);{
var G__44917 = cljs.core.chunk_rest(seq__44900_44915__$1);
var G__44918 = c__4299__auto___44916;
var G__44919 = cljs.core.count(c__4299__auto___44916);
var G__44920 = (0);
seq__44900_44905 = G__44917;
chunk__44901_44906 = G__44918;
count__44902_44907 = G__44919;
i__44903_44908 = G__44920;
continue;
}
} else
{var node_44921 = cljs.core.first(seq__44900_44915__$1);goog.dom.classes.set(node_44921,classes_44904__$1);
{
var G__44922 = cljs.core.next(seq__44900_44915__$1);
var G__44923 = null;
var G__44924 = (0);
var G__44925 = (0);
seq__44900_44905 = G__44922;
chunk__44901_44906 = G__44923;
count__44902_44907 = G__44924;
i__44903_44908 = G__44925;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44930_44934 = cljs.core.seq(domina.nodes(content));var chunk__44931_44935 = null;var count__44932_44936 = (0);var i__44933_44937 = (0);while(true){
if((i__44933_44937 < count__44932_44936))
{var node_44938 = chunk__44931_44935.cljs$core$IIndexed$_nth$arity$2(null,i__44933_44937);goog.dom.setTextContent(node_44938,value);
{
var G__44939 = seq__44930_44934;
var G__44940 = chunk__44931_44935;
var G__44941 = count__44932_44936;
var G__44942 = (i__44933_44937 + (1));
seq__44930_44934 = G__44939;
chunk__44931_44935 = G__44940;
count__44932_44936 = G__44941;
i__44933_44937 = G__44942;
continue;
}
} else
{var temp__4126__auto___44943 = cljs.core.seq(seq__44930_44934);if(temp__4126__auto___44943)
{var seq__44930_44944__$1 = temp__4126__auto___44943;if(cljs.core.chunked_seq_QMARK_(seq__44930_44944__$1))
{var c__4299__auto___44945 = cljs.core.chunk_first(seq__44930_44944__$1);{
var G__44946 = cljs.core.chunk_rest(seq__44930_44944__$1);
var G__44947 = c__4299__auto___44945;
var G__44948 = cljs.core.count(c__4299__auto___44945);
var G__44949 = (0);
seq__44930_44934 = G__44946;
chunk__44931_44935 = G__44947;
count__44932_44936 = G__44948;
i__44933_44937 = G__44949;
continue;
}
} else
{var node_44950 = cljs.core.first(seq__44930_44944__$1);goog.dom.setTextContent(node_44950,value);
{
var G__44951 = cljs.core.next(seq__44930_44944__$1);
var G__44952 = null;
var G__44953 = (0);
var G__44954 = (0);
seq__44930_44934 = G__44951;
chunk__44931_44935 = G__44952;
count__44932_44936 = G__44953;
i__44933_44937 = G__44954;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44959_44963 = cljs.core.seq(domina.nodes(content));var chunk__44960_44964 = null;var count__44961_44965 = (0);var i__44962_44966 = (0);while(true){
if((i__44962_44966 < count__44961_44965))
{var node_44967 = chunk__44960_44964.cljs$core$IIndexed$_nth$arity$2(null,i__44962_44966);goog.dom.forms.setValue(node_44967,value);
{
var G__44968 = seq__44959_44963;
var G__44969 = chunk__44960_44964;
var G__44970 = count__44961_44965;
var G__44971 = (i__44962_44966 + (1));
seq__44959_44963 = G__44968;
chunk__44960_44964 = G__44969;
count__44961_44965 = G__44970;
i__44962_44966 = G__44971;
continue;
}
} else
{var temp__4126__auto___44972 = cljs.core.seq(seq__44959_44963);if(temp__4126__auto___44972)
{var seq__44959_44973__$1 = temp__4126__auto___44972;if(cljs.core.chunked_seq_QMARK_(seq__44959_44973__$1))
{var c__4299__auto___44974 = cljs.core.chunk_first(seq__44959_44973__$1);{
var G__44975 = cljs.core.chunk_rest(seq__44959_44973__$1);
var G__44976 = c__4299__auto___44974;
var G__44977 = cljs.core.count(c__4299__auto___44974);
var G__44978 = (0);
seq__44959_44963 = G__44975;
chunk__44960_44964 = G__44976;
count__44961_44965 = G__44977;
i__44962_44966 = G__44978;
continue;
}
} else
{var node_44979 = cljs.core.first(seq__44959_44973__$1);goog.dom.forms.setValue(node_44979,value);
{
var G__44980 = cljs.core.next(seq__44959_44973__$1);
var G__44981 = null;
var G__44982 = (0);
var G__44983 = (0);
seq__44959_44963 = G__44980;
chunk__44960_44964 = G__44981;
count__44961_44965 = G__44982;
i__44962_44966 = G__44983;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_44994 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__44990_44995 = cljs.core.seq(domina.nodes(content));var chunk__44991_44996 = null;var count__44992_44997 = (0);var i__44993_44998 = (0);while(true){
if((i__44993_44998 < count__44992_44997))
{var node_44999 = chunk__44991_44996.cljs$core$IIndexed$_nth$arity$2(null,i__44993_44998);node_44999.innerHTML = value_44994;
{
var G__45000 = seq__44990_44995;
var G__45001 = chunk__44991_44996;
var G__45002 = count__44992_44997;
var G__45003 = (i__44993_44998 + (1));
seq__44990_44995 = G__45000;
chunk__44991_44996 = G__45001;
count__44992_44997 = G__45002;
i__44993_44998 = G__45003;
continue;
}
} else
{var temp__4126__auto___45004 = cljs.core.seq(seq__44990_44995);if(temp__4126__auto___45004)
{var seq__44990_45005__$1 = temp__4126__auto___45004;if(cljs.core.chunked_seq_QMARK_(seq__44990_45005__$1))
{var c__4299__auto___45006 = cljs.core.chunk_first(seq__44990_45005__$1);{
var G__45007 = cljs.core.chunk_rest(seq__44990_45005__$1);
var G__45008 = c__4299__auto___45006;
var G__45009 = cljs.core.count(c__4299__auto___45006);
var G__45010 = (0);
seq__44990_44995 = G__45007;
chunk__44991_44996 = G__45008;
count__44992_44997 = G__45009;
i__44993_44998 = G__45010;
continue;
}
} else
{var node_45011 = cljs.core.first(seq__44990_45005__$1);node_45011.innerHTML = value_44994;
{
var G__45012 = cljs.core.next(seq__44990_45005__$1);
var G__45013 = null;
var G__45014 = (0);
var G__45015 = (0);
seq__44990_44995 = G__45012;
chunk__44991_44996 = G__45013;
count__44992_44997 = G__45014;
i__44993_44998 = G__45015;
continue;
}
}
} else
{}
}
break;
}
}catch (e44989){if((e44989 instanceof Error))
{var e_45016 = e44989;domina.replace_children_BANG_(content,value_44994);
} else
{if(cljs.core.constant$keyword$764)
{throw e44989;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__45023_45027 = cljs.core.seq(children);var chunk__45024_45028 = null;var count__45025_45029 = (0);var i__45026_45030 = (0);while(true){
if((i__45026_45030 < count__45025_45029))
{var child_45031 = chunk__45024_45028.cljs$core$IIndexed$_nth$arity$2(null,i__45026_45030);frag.appendChild(child_45031);
{
var G__45032 = seq__45023_45027;
var G__45033 = chunk__45024_45028;
var G__45034 = count__45025_45029;
var G__45035 = (i__45026_45030 + (1));
seq__45023_45027 = G__45032;
chunk__45024_45028 = G__45033;
count__45025_45029 = G__45034;
i__45026_45030 = G__45035;
continue;
}
} else
{var temp__4126__auto___45036 = cljs.core.seq(seq__45023_45027);if(temp__4126__auto___45036)
{var seq__45023_45037__$1 = temp__4126__auto___45036;if(cljs.core.chunked_seq_QMARK_(seq__45023_45037__$1))
{var c__4299__auto___45038 = cljs.core.chunk_first(seq__45023_45037__$1);{
var G__45039 = cljs.core.chunk_rest(seq__45023_45037__$1);
var G__45040 = c__4299__auto___45038;
var G__45041 = cljs.core.count(c__4299__auto___45038);
var G__45042 = (0);
seq__45023_45027 = G__45039;
chunk__45024_45028 = G__45040;
count__45025_45029 = G__45041;
i__45026_45030 = G__45042;
continue;
}
} else
{var child_45043 = cljs.core.first(seq__45023_45037__$1);frag.appendChild(child_45043);
{
var G__45044 = cljs.core.next(seq__45023_45037__$1);
var G__45045 = null;
var G__45046 = (0);
var G__45047 = (0);
seq__45023_45027 = G__45044;
chunk__45024_45028 = G__45045;
count__45025_45029 = G__45046;
i__45026_45030 = G__45047;
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
return (function (p1__45017_SHARP_,p2__45018_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45017_SHARP_,p2__45018_SHARP_) : f.call(null,p1__45017_SHARP_,p2__45018_SHARP_));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__45049 = list_thing;if(G__45049)
{var bit__4193__auto__ = (G__45049.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45049.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45049.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45049);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$765)
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
{if((function (){var G__45050 = content;if(G__45050)
{var bit__4193__auto__ = (G__45050.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45050.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45050.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45050);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45050);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$765)
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
{if((function (){var G__45051 = content;if(G__45051)
{var bit__4193__auto__ = (G__45051.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45051.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45051);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$765)
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
