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
var opt_wrapper_26670 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26671 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$200,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26671,table_section_wrapper_26671,opt_wrapper_26670,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26672,table_section_wrapper_26671,cell_wrapper_26672,opt_wrapper_26670,table_section_wrapper_26671,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26671]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26677 = cljs.core.seq(tbody);var chunk__26678 = null;var count__26679 = 0;var i__26680 = 0;while(true){
if((i__26680 < count__26679))
{var child = chunk__26678.cljs$core$IIndexed$_nth$arity$2(null,i__26680);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26681 = seq__26677;
var G__26682 = chunk__26678;
var G__26683 = count__26679;
var G__26684 = (i__26680 + 1);
seq__26677 = G__26681;
chunk__26678 = G__26682;
count__26679 = G__26683;
i__26680 = G__26684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26677);if(temp__4092__auto__)
{var seq__26677__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26677__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26677__$1);{
var G__26685 = cljs.core.chunk_rest(seq__26677__$1);
var G__26686 = c__4148__auto__;
var G__26687 = cljs.core.count(c__4148__auto__);
var G__26688 = 0;
seq__26677 = G__26685;
chunk__26678 = G__26686;
count__26679 = G__26687;
i__26680 = G__26688;
continue;
}
} else
{var child = cljs.core.first(seq__26677__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26689 = cljs.core.next(seq__26677__$1);
var G__26690 = null;
var G__26691 = 0;
var G__26692 = 0;
seq__26677 = G__26689;
chunk__26678 = G__26690;
count__26679 = G__26691;
i__26680 = G__26692;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26694 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26695 = wrapper.lastChild;
var G__26696 = (level - 1);
wrapper = G__26695;
level = G__26696;
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
domina.DomContent = (function (){var obj26698 = {};return obj26698;
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
log_debug.cljs$lang$applyTo = (function (arglist__26699){
var mesg = cljs.core.seq(arglist__26699);
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
log.cljs$lang$applyTo = (function (arglist__26700){
var mesg = cljs.core.seq(arglist__26700);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26701){
var contents = cljs.core.seq(arglist__26701);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26702_SHARP_){return p1__26702_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26703_SHARP_,p2__26704_SHARP_){return goog.dom.insertChildAt(p1__26703_SHARP_,p2__26704_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26703_SHARP_,p2__26704_SHARP_){return goog.dom.insertChildAt(p1__26703_SHARP_,p2__26704_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26706_SHARP_,p2__26705_SHARP_){return goog.dom.insertSiblingBefore(p2__26705_SHARP_,p1__26706_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26706_SHARP_,p2__26705_SHARP_){return goog.dom.insertSiblingBefore(p2__26705_SHARP_,p1__26706_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26708_SHARP_,p2__26707_SHARP_){return goog.dom.insertSiblingAfter(p2__26707_SHARP_,p1__26708_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26708_SHARP_,p2__26707_SHARP_){return goog.dom.insertSiblingAfter(p2__26707_SHARP_,p1__26708_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26710_SHARP_,p2__26709_SHARP_){return goog.dom.replaceNode(p2__26709_SHARP_,p1__26710_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26710_SHARP_,p2__26709_SHARP_){return goog.dom.replaceNode(p2__26709_SHARP_,p1__26710_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26715_26719 = cljs.core.seq(domina.nodes(content));var chunk__26716_26720 = null;var count__26717_26721 = 0;var i__26718_26722 = 0;while(true){
if((i__26718_26722 < count__26717_26721))
{var n_26723 = chunk__26716_26720.cljs$core$IIndexed$_nth$arity$2(null,i__26718_26722);goog.style.setStyle(n_26723,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26724 = seq__26715_26719;
var G__26725 = chunk__26716_26720;
var G__26726 = count__26717_26721;
var G__26727 = (i__26718_26722 + 1);
seq__26715_26719 = G__26724;
chunk__26716_26720 = G__26725;
count__26717_26721 = G__26726;
i__26718_26722 = G__26727;
continue;
}
} else
{var temp__4092__auto___26728 = cljs.core.seq(seq__26715_26719);if(temp__4092__auto___26728)
{var seq__26715_26729__$1 = temp__4092__auto___26728;if(cljs.core.chunked_seq_QMARK_(seq__26715_26729__$1))
{var c__4148__auto___26730 = cljs.core.chunk_first(seq__26715_26729__$1);{
var G__26731 = cljs.core.chunk_rest(seq__26715_26729__$1);
var G__26732 = c__4148__auto___26730;
var G__26733 = cljs.core.count(c__4148__auto___26730);
var G__26734 = 0;
seq__26715_26719 = G__26731;
chunk__26716_26720 = G__26732;
count__26717_26721 = G__26733;
i__26718_26722 = G__26734;
continue;
}
} else
{var n_26735 = cljs.core.first(seq__26715_26729__$1);goog.style.setStyle(n_26735,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26736 = cljs.core.next(seq__26715_26729__$1);
var G__26737 = null;
var G__26738 = 0;
var G__26739 = 0;
seq__26715_26719 = G__26736;
chunk__26716_26720 = G__26737;
count__26717_26721 = G__26738;
i__26718_26722 = G__26739;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26740){
var content = cljs.core.first(arglist__26740);
arglist__26740 = cljs.core.next(arglist__26740);
var name = cljs.core.first(arglist__26740);
var value = cljs.core.rest(arglist__26740);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26745_26749 = cljs.core.seq(domina.nodes(content));var chunk__26746_26750 = null;var count__26747_26751 = 0;var i__26748_26752 = 0;while(true){
if((i__26748_26752 < count__26747_26751))
{var n_26753 = chunk__26746_26750.cljs$core$IIndexed$_nth$arity$2(null,i__26748_26752);n_26753.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26754 = seq__26745_26749;
var G__26755 = chunk__26746_26750;
var G__26756 = count__26747_26751;
var G__26757 = (i__26748_26752 + 1);
seq__26745_26749 = G__26754;
chunk__26746_26750 = G__26755;
count__26747_26751 = G__26756;
i__26748_26752 = G__26757;
continue;
}
} else
{var temp__4092__auto___26758 = cljs.core.seq(seq__26745_26749);if(temp__4092__auto___26758)
{var seq__26745_26759__$1 = temp__4092__auto___26758;if(cljs.core.chunked_seq_QMARK_(seq__26745_26759__$1))
{var c__4148__auto___26760 = cljs.core.chunk_first(seq__26745_26759__$1);{
var G__26761 = cljs.core.chunk_rest(seq__26745_26759__$1);
var G__26762 = c__4148__auto___26760;
var G__26763 = cljs.core.count(c__4148__auto___26760);
var G__26764 = 0;
seq__26745_26749 = G__26761;
chunk__26746_26750 = G__26762;
count__26747_26751 = G__26763;
i__26748_26752 = G__26764;
continue;
}
} else
{var n_26765 = cljs.core.first(seq__26745_26759__$1);n_26765.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26766 = cljs.core.next(seq__26745_26759__$1);
var G__26767 = null;
var G__26768 = 0;
var G__26769 = 0;
seq__26745_26749 = G__26766;
chunk__26746_26750 = G__26767;
count__26747_26751 = G__26768;
i__26748_26752 = G__26769;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26770){
var content = cljs.core.first(arglist__26770);
arglist__26770 = cljs.core.next(arglist__26770);
var name = cljs.core.first(arglist__26770);
var value = cljs.core.rest(arglist__26770);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26775_26779 = cljs.core.seq(domina.nodes(content));var chunk__26776_26780 = null;var count__26777_26781 = 0;var i__26778_26782 = 0;while(true){
if((i__26778_26782 < count__26777_26781))
{var n_26783 = chunk__26776_26780.cljs$core$IIndexed$_nth$arity$2(null,i__26778_26782);n_26783.removeAttribute(cljs.core.name(name));
{
var G__26784 = seq__26775_26779;
var G__26785 = chunk__26776_26780;
var G__26786 = count__26777_26781;
var G__26787 = (i__26778_26782 + 1);
seq__26775_26779 = G__26784;
chunk__26776_26780 = G__26785;
count__26777_26781 = G__26786;
i__26778_26782 = G__26787;
continue;
}
} else
{var temp__4092__auto___26788 = cljs.core.seq(seq__26775_26779);if(temp__4092__auto___26788)
{var seq__26775_26789__$1 = temp__4092__auto___26788;if(cljs.core.chunked_seq_QMARK_(seq__26775_26789__$1))
{var c__4148__auto___26790 = cljs.core.chunk_first(seq__26775_26789__$1);{
var G__26791 = cljs.core.chunk_rest(seq__26775_26789__$1);
var G__26792 = c__4148__auto___26790;
var G__26793 = cljs.core.count(c__4148__auto___26790);
var G__26794 = 0;
seq__26775_26779 = G__26791;
chunk__26776_26780 = G__26792;
count__26777_26781 = G__26793;
i__26778_26782 = G__26794;
continue;
}
} else
{var n_26795 = cljs.core.first(seq__26775_26789__$1);n_26795.removeAttribute(cljs.core.name(name));
{
var G__26796 = cljs.core.next(seq__26775_26789__$1);
var G__26797 = null;
var G__26798 = 0;
var G__26799 = 0;
seq__26775_26779 = G__26796;
chunk__26776_26780 = G__26797;
count__26777_26781 = G__26798;
i__26778_26782 = G__26799;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26801 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$199)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26802_SHARP_){var attr = attrs__$1.item(p1__26802_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26809_26815 = cljs.core.seq(styles);var chunk__26810_26816 = null;var count__26811_26817 = 0;var i__26812_26818 = 0;while(true){
if((i__26812_26818 < count__26811_26817))
{var vec__26813_26819 = chunk__26810_26816.cljs$core$IIndexed$_nth$arity$2(null,i__26812_26818);var name_26820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813_26819,0,null);var value_26821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26813_26819,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26820,cljs.core.array_seq([value_26821], 0));
{
var G__26822 = seq__26809_26815;
var G__26823 = chunk__26810_26816;
var G__26824 = count__26811_26817;
var G__26825 = (i__26812_26818 + 1);
seq__26809_26815 = G__26822;
chunk__26810_26816 = G__26823;
count__26811_26817 = G__26824;
i__26812_26818 = G__26825;
continue;
}
} else
{var temp__4092__auto___26826 = cljs.core.seq(seq__26809_26815);if(temp__4092__auto___26826)
{var seq__26809_26827__$1 = temp__4092__auto___26826;if(cljs.core.chunked_seq_QMARK_(seq__26809_26827__$1))
{var c__4148__auto___26828 = cljs.core.chunk_first(seq__26809_26827__$1);{
var G__26829 = cljs.core.chunk_rest(seq__26809_26827__$1);
var G__26830 = c__4148__auto___26828;
var G__26831 = cljs.core.count(c__4148__auto___26828);
var G__26832 = 0;
seq__26809_26815 = G__26829;
chunk__26810_26816 = G__26830;
count__26811_26817 = G__26831;
i__26812_26818 = G__26832;
continue;
}
} else
{var vec__26814_26833 = cljs.core.first(seq__26809_26827__$1);var name_26834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26814_26833,0,null);var value_26835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26814_26833,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26834,cljs.core.array_seq([value_26835], 0));
{
var G__26836 = cljs.core.next(seq__26809_26827__$1);
var G__26837 = null;
var G__26838 = 0;
var G__26839 = 0;
seq__26809_26815 = G__26836;
chunk__26810_26816 = G__26837;
count__26811_26817 = G__26838;
i__26812_26818 = G__26839;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26846_26852 = cljs.core.seq(attrs);var chunk__26847_26853 = null;var count__26848_26854 = 0;var i__26849_26855 = 0;while(true){
if((i__26849_26855 < count__26848_26854))
{var vec__26850_26856 = chunk__26847_26853.cljs$core$IIndexed$_nth$arity$2(null,i__26849_26855);var name_26857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26850_26856,0,null);var value_26858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26850_26856,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26857,cljs.core.array_seq([value_26858], 0));
{
var G__26859 = seq__26846_26852;
var G__26860 = chunk__26847_26853;
var G__26861 = count__26848_26854;
var G__26862 = (i__26849_26855 + 1);
seq__26846_26852 = G__26859;
chunk__26847_26853 = G__26860;
count__26848_26854 = G__26861;
i__26849_26855 = G__26862;
continue;
}
} else
{var temp__4092__auto___26863 = cljs.core.seq(seq__26846_26852);if(temp__4092__auto___26863)
{var seq__26846_26864__$1 = temp__4092__auto___26863;if(cljs.core.chunked_seq_QMARK_(seq__26846_26864__$1))
{var c__4148__auto___26865 = cljs.core.chunk_first(seq__26846_26864__$1);{
var G__26866 = cljs.core.chunk_rest(seq__26846_26864__$1);
var G__26867 = c__4148__auto___26865;
var G__26868 = cljs.core.count(c__4148__auto___26865);
var G__26869 = 0;
seq__26846_26852 = G__26866;
chunk__26847_26853 = G__26867;
count__26848_26854 = G__26868;
i__26849_26855 = G__26869;
continue;
}
} else
{var vec__26851_26870 = cljs.core.first(seq__26846_26864__$1);var name_26871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851_26870,0,null);var value_26872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26851_26870,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26871,cljs.core.array_seq([value_26872], 0));
{
var G__26873 = cljs.core.next(seq__26846_26864__$1);
var G__26874 = null;
var G__26875 = 0;
var G__26876 = 0;
seq__26846_26852 = G__26873;
chunk__26847_26853 = G__26874;
count__26848_26854 = G__26875;
i__26849_26855 = G__26876;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26881_26885 = cljs.core.seq(domina.nodes(content));var chunk__26882_26886 = null;var count__26883_26887 = 0;var i__26884_26888 = 0;while(true){
if((i__26884_26888 < count__26883_26887))
{var node_26889 = chunk__26882_26886.cljs$core$IIndexed$_nth$arity$2(null,i__26884_26888);goog.dom.classes.add(node_26889,class$);
{
var G__26890 = seq__26881_26885;
var G__26891 = chunk__26882_26886;
var G__26892 = count__26883_26887;
var G__26893 = (i__26884_26888 + 1);
seq__26881_26885 = G__26890;
chunk__26882_26886 = G__26891;
count__26883_26887 = G__26892;
i__26884_26888 = G__26893;
continue;
}
} else
{var temp__4092__auto___26894 = cljs.core.seq(seq__26881_26885);if(temp__4092__auto___26894)
{var seq__26881_26895__$1 = temp__4092__auto___26894;if(cljs.core.chunked_seq_QMARK_(seq__26881_26895__$1))
{var c__4148__auto___26896 = cljs.core.chunk_first(seq__26881_26895__$1);{
var G__26897 = cljs.core.chunk_rest(seq__26881_26895__$1);
var G__26898 = c__4148__auto___26896;
var G__26899 = cljs.core.count(c__4148__auto___26896);
var G__26900 = 0;
seq__26881_26885 = G__26897;
chunk__26882_26886 = G__26898;
count__26883_26887 = G__26899;
i__26884_26888 = G__26900;
continue;
}
} else
{var node_26901 = cljs.core.first(seq__26881_26895__$1);goog.dom.classes.add(node_26901,class$);
{
var G__26902 = cljs.core.next(seq__26881_26895__$1);
var G__26903 = null;
var G__26904 = 0;
var G__26905 = 0;
seq__26881_26885 = G__26902;
chunk__26882_26886 = G__26903;
count__26883_26887 = G__26904;
i__26884_26888 = G__26905;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26910_26914 = cljs.core.seq(domina.nodes(content));var chunk__26911_26915 = null;var count__26912_26916 = 0;var i__26913_26917 = 0;while(true){
if((i__26913_26917 < count__26912_26916))
{var node_26918 = chunk__26911_26915.cljs$core$IIndexed$_nth$arity$2(null,i__26913_26917);goog.dom.classes.remove(node_26918,class$);
{
var G__26919 = seq__26910_26914;
var G__26920 = chunk__26911_26915;
var G__26921 = count__26912_26916;
var G__26922 = (i__26913_26917 + 1);
seq__26910_26914 = G__26919;
chunk__26911_26915 = G__26920;
count__26912_26916 = G__26921;
i__26913_26917 = G__26922;
continue;
}
} else
{var temp__4092__auto___26923 = cljs.core.seq(seq__26910_26914);if(temp__4092__auto___26923)
{var seq__26910_26924__$1 = temp__4092__auto___26923;if(cljs.core.chunked_seq_QMARK_(seq__26910_26924__$1))
{var c__4148__auto___26925 = cljs.core.chunk_first(seq__26910_26924__$1);{
var G__26926 = cljs.core.chunk_rest(seq__26910_26924__$1);
var G__26927 = c__4148__auto___26925;
var G__26928 = cljs.core.count(c__4148__auto___26925);
var G__26929 = 0;
seq__26910_26914 = G__26926;
chunk__26911_26915 = G__26927;
count__26912_26916 = G__26928;
i__26913_26917 = G__26929;
continue;
}
} else
{var node_26930 = cljs.core.first(seq__26910_26924__$1);goog.dom.classes.remove(node_26930,class$);
{
var G__26931 = cljs.core.next(seq__26910_26924__$1);
var G__26932 = null;
var G__26933 = 0;
var G__26934 = 0;
seq__26910_26914 = G__26931;
chunk__26911_26915 = G__26932;
count__26912_26916 = G__26933;
i__26913_26917 = G__26934;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26939_26943 = cljs.core.seq(domina.nodes(content));var chunk__26940_26944 = null;var count__26941_26945 = 0;var i__26942_26946 = 0;while(true){
if((i__26942_26946 < count__26941_26945))
{var node_26947 = chunk__26940_26944.cljs$core$IIndexed$_nth$arity$2(null,i__26942_26946);goog.dom.classes.toggle(node_26947,class$);
{
var G__26948 = seq__26939_26943;
var G__26949 = chunk__26940_26944;
var G__26950 = count__26941_26945;
var G__26951 = (i__26942_26946 + 1);
seq__26939_26943 = G__26948;
chunk__26940_26944 = G__26949;
count__26941_26945 = G__26950;
i__26942_26946 = G__26951;
continue;
}
} else
{var temp__4092__auto___26952 = cljs.core.seq(seq__26939_26943);if(temp__4092__auto___26952)
{var seq__26939_26953__$1 = temp__4092__auto___26952;if(cljs.core.chunked_seq_QMARK_(seq__26939_26953__$1))
{var c__4148__auto___26954 = cljs.core.chunk_first(seq__26939_26953__$1);{
var G__26955 = cljs.core.chunk_rest(seq__26939_26953__$1);
var G__26956 = c__4148__auto___26954;
var G__26957 = cljs.core.count(c__4148__auto___26954);
var G__26958 = 0;
seq__26939_26943 = G__26955;
chunk__26940_26944 = G__26956;
count__26941_26945 = G__26957;
i__26942_26946 = G__26958;
continue;
}
} else
{var node_26959 = cljs.core.first(seq__26939_26953__$1);goog.dom.classes.toggle(node_26959,class$);
{
var G__26960 = cljs.core.next(seq__26939_26953__$1);
var G__26961 = null;
var G__26962 = 0;
var G__26963 = 0;
seq__26939_26943 = G__26960;
chunk__26940_26944 = G__26961;
count__26941_26945 = G__26962;
i__26942_26946 = G__26963;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26972__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__26968_26973 = cljs.core.seq(domina.nodes(content));var chunk__26969_26974 = null;var count__26970_26975 = 0;var i__26971_26976 = 0;while(true){
if((i__26971_26976 < count__26970_26975))
{var node_26977 = chunk__26969_26974.cljs$core$IIndexed$_nth$arity$2(null,i__26971_26976);goog.dom.classes.set(node_26977,classes_26972__$1);
{
var G__26978 = seq__26968_26973;
var G__26979 = chunk__26969_26974;
var G__26980 = count__26970_26975;
var G__26981 = (i__26971_26976 + 1);
seq__26968_26973 = G__26978;
chunk__26969_26974 = G__26979;
count__26970_26975 = G__26980;
i__26971_26976 = G__26981;
continue;
}
} else
{var temp__4092__auto___26982 = cljs.core.seq(seq__26968_26973);if(temp__4092__auto___26982)
{var seq__26968_26983__$1 = temp__4092__auto___26982;if(cljs.core.chunked_seq_QMARK_(seq__26968_26983__$1))
{var c__4148__auto___26984 = cljs.core.chunk_first(seq__26968_26983__$1);{
var G__26985 = cljs.core.chunk_rest(seq__26968_26983__$1);
var G__26986 = c__4148__auto___26984;
var G__26987 = cljs.core.count(c__4148__auto___26984);
var G__26988 = 0;
seq__26968_26973 = G__26985;
chunk__26969_26974 = G__26986;
count__26970_26975 = G__26987;
i__26971_26976 = G__26988;
continue;
}
} else
{var node_26989 = cljs.core.first(seq__26968_26983__$1);goog.dom.classes.set(node_26989,classes_26972__$1);
{
var G__26990 = cljs.core.next(seq__26968_26983__$1);
var G__26991 = null;
var G__26992 = 0;
var G__26993 = 0;
seq__26968_26973 = G__26990;
chunk__26969_26974 = G__26991;
count__26970_26975 = G__26992;
i__26971_26976 = G__26993;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26998_27002 = cljs.core.seq(domina.nodes(content));var chunk__26999_27003 = null;var count__27000_27004 = 0;var i__27001_27005 = 0;while(true){
if((i__27001_27005 < count__27000_27004))
{var node_27006 = chunk__26999_27003.cljs$core$IIndexed$_nth$arity$2(null,i__27001_27005);goog.dom.setTextContent(node_27006,value);
{
var G__27007 = seq__26998_27002;
var G__27008 = chunk__26999_27003;
var G__27009 = count__27000_27004;
var G__27010 = (i__27001_27005 + 1);
seq__26998_27002 = G__27007;
chunk__26999_27003 = G__27008;
count__27000_27004 = G__27009;
i__27001_27005 = G__27010;
continue;
}
} else
{var temp__4092__auto___27011 = cljs.core.seq(seq__26998_27002);if(temp__4092__auto___27011)
{var seq__26998_27012__$1 = temp__4092__auto___27011;if(cljs.core.chunked_seq_QMARK_(seq__26998_27012__$1))
{var c__4148__auto___27013 = cljs.core.chunk_first(seq__26998_27012__$1);{
var G__27014 = cljs.core.chunk_rest(seq__26998_27012__$1);
var G__27015 = c__4148__auto___27013;
var G__27016 = cljs.core.count(c__4148__auto___27013);
var G__27017 = 0;
seq__26998_27002 = G__27014;
chunk__26999_27003 = G__27015;
count__27000_27004 = G__27016;
i__27001_27005 = G__27017;
continue;
}
} else
{var node_27018 = cljs.core.first(seq__26998_27012__$1);goog.dom.setTextContent(node_27018,value);
{
var G__27019 = cljs.core.next(seq__26998_27012__$1);
var G__27020 = null;
var G__27021 = 0;
var G__27022 = 0;
seq__26998_27002 = G__27019;
chunk__26999_27003 = G__27020;
count__27000_27004 = G__27021;
i__27001_27005 = G__27022;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27027_27031 = cljs.core.seq(domina.nodes(content));var chunk__27028_27032 = null;var count__27029_27033 = 0;var i__27030_27034 = 0;while(true){
if((i__27030_27034 < count__27029_27033))
{var node_27035 = chunk__27028_27032.cljs$core$IIndexed$_nth$arity$2(null,i__27030_27034);goog.dom.forms.setValue(node_27035,value);
{
var G__27036 = seq__27027_27031;
var G__27037 = chunk__27028_27032;
var G__27038 = count__27029_27033;
var G__27039 = (i__27030_27034 + 1);
seq__27027_27031 = G__27036;
chunk__27028_27032 = G__27037;
count__27029_27033 = G__27038;
i__27030_27034 = G__27039;
continue;
}
} else
{var temp__4092__auto___27040 = cljs.core.seq(seq__27027_27031);if(temp__4092__auto___27040)
{var seq__27027_27041__$1 = temp__4092__auto___27040;if(cljs.core.chunked_seq_QMARK_(seq__27027_27041__$1))
{var c__4148__auto___27042 = cljs.core.chunk_first(seq__27027_27041__$1);{
var G__27043 = cljs.core.chunk_rest(seq__27027_27041__$1);
var G__27044 = c__4148__auto___27042;
var G__27045 = cljs.core.count(c__4148__auto___27042);
var G__27046 = 0;
seq__27027_27031 = G__27043;
chunk__27028_27032 = G__27044;
count__27029_27033 = G__27045;
i__27030_27034 = G__27046;
continue;
}
} else
{var node_27047 = cljs.core.first(seq__27027_27041__$1);goog.dom.forms.setValue(node_27047,value);
{
var G__27048 = cljs.core.next(seq__27027_27041__$1);
var G__27049 = null;
var G__27050 = 0;
var G__27051 = 0;
seq__27027_27031 = G__27048;
chunk__27028_27032 = G__27049;
count__27029_27033 = G__27050;
i__27030_27034 = G__27051;
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
{var value_27062 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27058_27063 = cljs.core.seq(domina.nodes(content));var chunk__27059_27064 = null;var count__27060_27065 = 0;var i__27061_27066 = 0;while(true){
if((i__27061_27066 < count__27060_27065))
{var node_27067 = chunk__27059_27064.cljs$core$IIndexed$_nth$arity$2(null,i__27061_27066);node_27067.innerHTML = value_27062;
{
var G__27068 = seq__27058_27063;
var G__27069 = chunk__27059_27064;
var G__27070 = count__27060_27065;
var G__27071 = (i__27061_27066 + 1);
seq__27058_27063 = G__27068;
chunk__27059_27064 = G__27069;
count__27060_27065 = G__27070;
i__27061_27066 = G__27071;
continue;
}
} else
{var temp__4092__auto___27072 = cljs.core.seq(seq__27058_27063);if(temp__4092__auto___27072)
{var seq__27058_27073__$1 = temp__4092__auto___27072;if(cljs.core.chunked_seq_QMARK_(seq__27058_27073__$1))
{var c__4148__auto___27074 = cljs.core.chunk_first(seq__27058_27073__$1);{
var G__27075 = cljs.core.chunk_rest(seq__27058_27073__$1);
var G__27076 = c__4148__auto___27074;
var G__27077 = cljs.core.count(c__4148__auto___27074);
var G__27078 = 0;
seq__27058_27063 = G__27075;
chunk__27059_27064 = G__27076;
count__27060_27065 = G__27077;
i__27061_27066 = G__27078;
continue;
}
} else
{var node_27079 = cljs.core.first(seq__27058_27073__$1);node_27079.innerHTML = value_27062;
{
var G__27080 = cljs.core.next(seq__27058_27073__$1);
var G__27081 = null;
var G__27082 = 0;
var G__27083 = 0;
seq__27058_27063 = G__27080;
chunk__27059_27064 = G__27081;
count__27060_27065 = G__27082;
i__27061_27066 = G__27083;
continue;
}
}
} else
{}
}
break;
}
}catch (e27057){if((e27057 instanceof Error))
{var e_27084 = e27057;domina.replace_children_BANG_(content,value_27062);
} else
{if(cljs.core.constant$keyword$199)
{throw e27057;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27091_27095 = cljs.core.seq(children);var chunk__27092_27096 = null;var count__27093_27097 = 0;var i__27094_27098 = 0;while(true){
if((i__27094_27098 < count__27093_27097))
{var child_27099 = chunk__27092_27096.cljs$core$IIndexed$_nth$arity$2(null,i__27094_27098);frag.appendChild(child_27099);
{
var G__27100 = seq__27091_27095;
var G__27101 = chunk__27092_27096;
var G__27102 = count__27093_27097;
var G__27103 = (i__27094_27098 + 1);
seq__27091_27095 = G__27100;
chunk__27092_27096 = G__27101;
count__27093_27097 = G__27102;
i__27094_27098 = G__27103;
continue;
}
} else
{var temp__4092__auto___27104 = cljs.core.seq(seq__27091_27095);if(temp__4092__auto___27104)
{var seq__27091_27105__$1 = temp__4092__auto___27104;if(cljs.core.chunked_seq_QMARK_(seq__27091_27105__$1))
{var c__4148__auto___27106 = cljs.core.chunk_first(seq__27091_27105__$1);{
var G__27107 = cljs.core.chunk_rest(seq__27091_27105__$1);
var G__27108 = c__4148__auto___27106;
var G__27109 = cljs.core.count(c__4148__auto___27106);
var G__27110 = 0;
seq__27091_27095 = G__27107;
chunk__27092_27096 = G__27108;
count__27093_27097 = G__27109;
i__27094_27098 = G__27110;
continue;
}
} else
{var child_27111 = cljs.core.first(seq__27091_27105__$1);frag.appendChild(child_27111);
{
var G__27112 = cljs.core.next(seq__27091_27105__$1);
var G__27113 = null;
var G__27114 = 0;
var G__27115 = 0;
seq__27091_27095 = G__27112;
chunk__27092_27096 = G__27113;
count__27093_27097 = G__27114;
i__27094_27098 = G__27115;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27085_SHARP_,p2__27086_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27085_SHARP_,p2__27086_SHARP_) : f.call(null,p1__27085_SHARP_,p2__27086_SHARP_));
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
{if((function (){var G__27117 = list_thing;if(G__27117)
{var bit__4050__auto__ = (G__27117.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27117.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27117.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27117);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27117);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$200)
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
{if((function (){var G__27118 = content;if(G__27118)
{var bit__4050__auto__ = (G__27118.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27118.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27118);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27118);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$200)
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
{if((function (){var G__27119 = content;if(G__27119)
{var bit__4050__auto__ = (G__27119.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27119.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27119.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27119);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27119);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$200)
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
