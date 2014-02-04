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
var opt_wrapper_26712 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26713 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26714 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$200,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26713,table_section_wrapper_26713,opt_wrapper_26712,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26714,table_section_wrapper_26713,cell_wrapper_26714,opt_wrapper_26712,table_section_wrapper_26713,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26713]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26719 = cljs.core.seq(tbody);var chunk__26720 = null;var count__26721 = 0;var i__26722 = 0;while(true){
if((i__26722 < count__26721))
{var child = chunk__26720.cljs$core$IIndexed$_nth$arity$2(null,i__26722);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26723 = seq__26719;
var G__26724 = chunk__26720;
var G__26725 = count__26721;
var G__26726 = (i__26722 + 1);
seq__26719 = G__26723;
chunk__26720 = G__26724;
count__26721 = G__26725;
i__26722 = G__26726;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26719);if(temp__4092__auto__)
{var seq__26719__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26719__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26719__$1);{
var G__26727 = cljs.core.chunk_rest(seq__26719__$1);
var G__26728 = c__4148__auto__;
var G__26729 = cljs.core.count(c__4148__auto__);
var G__26730 = 0;
seq__26719 = G__26727;
chunk__26720 = G__26728;
count__26721 = G__26729;
i__26722 = G__26730;
continue;
}
} else
{var child = cljs.core.first(seq__26719__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26731 = cljs.core.next(seq__26719__$1);
var G__26732 = null;
var G__26733 = 0;
var G__26734 = 0;
seq__26719 = G__26731;
chunk__26720 = G__26732;
count__26721 = G__26733;
i__26722 = G__26734;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26736 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26736,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26736,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26736,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26737 = wrapper.lastChild;
var G__26738 = (level - 1);
wrapper = G__26737;
level = G__26738;
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
domina.DomContent = (function (){var obj26740 = {};return obj26740;
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
log_debug.cljs$lang$applyTo = (function (arglist__26741){
var mesg = cljs.core.seq(arglist__26741);
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
log.cljs$lang$applyTo = (function (arglist__26742){
var mesg = cljs.core.seq(arglist__26742);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26743){
var contents = cljs.core.seq(arglist__26743);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26744_SHARP_){return p1__26744_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26745_SHARP_,p2__26746_SHARP_){return goog.dom.insertChildAt(p1__26745_SHARP_,p2__26746_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26745_SHARP_,p2__26746_SHARP_){return goog.dom.insertChildAt(p1__26745_SHARP_,p2__26746_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26748_SHARP_,p2__26747_SHARP_){return goog.dom.insertSiblingBefore(p2__26747_SHARP_,p1__26748_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26748_SHARP_,p2__26747_SHARP_){return goog.dom.insertSiblingBefore(p2__26747_SHARP_,p1__26748_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26750_SHARP_,p2__26749_SHARP_){return goog.dom.insertSiblingAfter(p2__26749_SHARP_,p1__26750_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26750_SHARP_,p2__26749_SHARP_){return goog.dom.insertSiblingAfter(p2__26749_SHARP_,p1__26750_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26752_SHARP_,p2__26751_SHARP_){return goog.dom.replaceNode(p2__26751_SHARP_,p1__26752_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26752_SHARP_,p2__26751_SHARP_){return goog.dom.replaceNode(p2__26751_SHARP_,p1__26752_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26757_26761 = cljs.core.seq(domina.nodes(content));var chunk__26758_26762 = null;var count__26759_26763 = 0;var i__26760_26764 = 0;while(true){
if((i__26760_26764 < count__26759_26763))
{var n_26765 = chunk__26758_26762.cljs$core$IIndexed$_nth$arity$2(null,i__26760_26764);goog.style.setStyle(n_26765,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26766 = seq__26757_26761;
var G__26767 = chunk__26758_26762;
var G__26768 = count__26759_26763;
var G__26769 = (i__26760_26764 + 1);
seq__26757_26761 = G__26766;
chunk__26758_26762 = G__26767;
count__26759_26763 = G__26768;
i__26760_26764 = G__26769;
continue;
}
} else
{var temp__4092__auto___26770 = cljs.core.seq(seq__26757_26761);if(temp__4092__auto___26770)
{var seq__26757_26771__$1 = temp__4092__auto___26770;if(cljs.core.chunked_seq_QMARK_(seq__26757_26771__$1))
{var c__4148__auto___26772 = cljs.core.chunk_first(seq__26757_26771__$1);{
var G__26773 = cljs.core.chunk_rest(seq__26757_26771__$1);
var G__26774 = c__4148__auto___26772;
var G__26775 = cljs.core.count(c__4148__auto___26772);
var G__26776 = 0;
seq__26757_26761 = G__26773;
chunk__26758_26762 = G__26774;
count__26759_26763 = G__26775;
i__26760_26764 = G__26776;
continue;
}
} else
{var n_26777 = cljs.core.first(seq__26757_26771__$1);goog.style.setStyle(n_26777,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26778 = cljs.core.next(seq__26757_26771__$1);
var G__26779 = null;
var G__26780 = 0;
var G__26781 = 0;
seq__26757_26761 = G__26778;
chunk__26758_26762 = G__26779;
count__26759_26763 = G__26780;
i__26760_26764 = G__26781;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26782){
var content = cljs.core.first(arglist__26782);
arglist__26782 = cljs.core.next(arglist__26782);
var name = cljs.core.first(arglist__26782);
var value = cljs.core.rest(arglist__26782);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26787_26791 = cljs.core.seq(domina.nodes(content));var chunk__26788_26792 = null;var count__26789_26793 = 0;var i__26790_26794 = 0;while(true){
if((i__26790_26794 < count__26789_26793))
{var n_26795 = chunk__26788_26792.cljs$core$IIndexed$_nth$arity$2(null,i__26790_26794);n_26795.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26796 = seq__26787_26791;
var G__26797 = chunk__26788_26792;
var G__26798 = count__26789_26793;
var G__26799 = (i__26790_26794 + 1);
seq__26787_26791 = G__26796;
chunk__26788_26792 = G__26797;
count__26789_26793 = G__26798;
i__26790_26794 = G__26799;
continue;
}
} else
{var temp__4092__auto___26800 = cljs.core.seq(seq__26787_26791);if(temp__4092__auto___26800)
{var seq__26787_26801__$1 = temp__4092__auto___26800;if(cljs.core.chunked_seq_QMARK_(seq__26787_26801__$1))
{var c__4148__auto___26802 = cljs.core.chunk_first(seq__26787_26801__$1);{
var G__26803 = cljs.core.chunk_rest(seq__26787_26801__$1);
var G__26804 = c__4148__auto___26802;
var G__26805 = cljs.core.count(c__4148__auto___26802);
var G__26806 = 0;
seq__26787_26791 = G__26803;
chunk__26788_26792 = G__26804;
count__26789_26793 = G__26805;
i__26790_26794 = G__26806;
continue;
}
} else
{var n_26807 = cljs.core.first(seq__26787_26801__$1);n_26807.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26808 = cljs.core.next(seq__26787_26801__$1);
var G__26809 = null;
var G__26810 = 0;
var G__26811 = 0;
seq__26787_26791 = G__26808;
chunk__26788_26792 = G__26809;
count__26789_26793 = G__26810;
i__26790_26794 = G__26811;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26812){
var content = cljs.core.first(arglist__26812);
arglist__26812 = cljs.core.next(arglist__26812);
var name = cljs.core.first(arglist__26812);
var value = cljs.core.rest(arglist__26812);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26817_26821 = cljs.core.seq(domina.nodes(content));var chunk__26818_26822 = null;var count__26819_26823 = 0;var i__26820_26824 = 0;while(true){
if((i__26820_26824 < count__26819_26823))
{var n_26825 = chunk__26818_26822.cljs$core$IIndexed$_nth$arity$2(null,i__26820_26824);n_26825.removeAttribute(cljs.core.name(name));
{
var G__26826 = seq__26817_26821;
var G__26827 = chunk__26818_26822;
var G__26828 = count__26819_26823;
var G__26829 = (i__26820_26824 + 1);
seq__26817_26821 = G__26826;
chunk__26818_26822 = G__26827;
count__26819_26823 = G__26828;
i__26820_26824 = G__26829;
continue;
}
} else
{var temp__4092__auto___26830 = cljs.core.seq(seq__26817_26821);if(temp__4092__auto___26830)
{var seq__26817_26831__$1 = temp__4092__auto___26830;if(cljs.core.chunked_seq_QMARK_(seq__26817_26831__$1))
{var c__4148__auto___26832 = cljs.core.chunk_first(seq__26817_26831__$1);{
var G__26833 = cljs.core.chunk_rest(seq__26817_26831__$1);
var G__26834 = c__4148__auto___26832;
var G__26835 = cljs.core.count(c__4148__auto___26832);
var G__26836 = 0;
seq__26817_26821 = G__26833;
chunk__26818_26822 = G__26834;
count__26819_26823 = G__26835;
i__26820_26824 = G__26836;
continue;
}
} else
{var n_26837 = cljs.core.first(seq__26817_26831__$1);n_26837.removeAttribute(cljs.core.name(name));
{
var G__26838 = cljs.core.next(seq__26817_26831__$1);
var G__26839 = null;
var G__26840 = 0;
var G__26841 = 0;
seq__26817_26821 = G__26838;
chunk__26818_26822 = G__26839;
count__26819_26823 = G__26840;
i__26820_26824 = G__26841;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26843 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26844_SHARP_){var attr = attrs__$1.item(p1__26844_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26851_26857 = cljs.core.seq(styles);var chunk__26852_26858 = null;var count__26853_26859 = 0;var i__26854_26860 = 0;while(true){
if((i__26854_26860 < count__26853_26859))
{var vec__26855_26861 = chunk__26852_26858.cljs$core$IIndexed$_nth$arity$2(null,i__26854_26860);var name_26862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855_26861,0,null);var value_26863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26855_26861,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26862,cljs.core.array_seq([value_26863], 0));
{
var G__26864 = seq__26851_26857;
var G__26865 = chunk__26852_26858;
var G__26866 = count__26853_26859;
var G__26867 = (i__26854_26860 + 1);
seq__26851_26857 = G__26864;
chunk__26852_26858 = G__26865;
count__26853_26859 = G__26866;
i__26854_26860 = G__26867;
continue;
}
} else
{var temp__4092__auto___26868 = cljs.core.seq(seq__26851_26857);if(temp__4092__auto___26868)
{var seq__26851_26869__$1 = temp__4092__auto___26868;if(cljs.core.chunked_seq_QMARK_(seq__26851_26869__$1))
{var c__4148__auto___26870 = cljs.core.chunk_first(seq__26851_26869__$1);{
var G__26871 = cljs.core.chunk_rest(seq__26851_26869__$1);
var G__26872 = c__4148__auto___26870;
var G__26873 = cljs.core.count(c__4148__auto___26870);
var G__26874 = 0;
seq__26851_26857 = G__26871;
chunk__26852_26858 = G__26872;
count__26853_26859 = G__26873;
i__26854_26860 = G__26874;
continue;
}
} else
{var vec__26856_26875 = cljs.core.first(seq__26851_26869__$1);var name_26876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856_26875,0,null);var value_26877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26856_26875,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26876,cljs.core.array_seq([value_26877], 0));
{
var G__26878 = cljs.core.next(seq__26851_26869__$1);
var G__26879 = null;
var G__26880 = 0;
var G__26881 = 0;
seq__26851_26857 = G__26878;
chunk__26852_26858 = G__26879;
count__26853_26859 = G__26880;
i__26854_26860 = G__26881;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26888_26894 = cljs.core.seq(attrs);var chunk__26889_26895 = null;var count__26890_26896 = 0;var i__26891_26897 = 0;while(true){
if((i__26891_26897 < count__26890_26896))
{var vec__26892_26898 = chunk__26889_26895.cljs$core$IIndexed$_nth$arity$2(null,i__26891_26897);var name_26899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26892_26898,0,null);var value_26900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26892_26898,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26899,cljs.core.array_seq([value_26900], 0));
{
var G__26901 = seq__26888_26894;
var G__26902 = chunk__26889_26895;
var G__26903 = count__26890_26896;
var G__26904 = (i__26891_26897 + 1);
seq__26888_26894 = G__26901;
chunk__26889_26895 = G__26902;
count__26890_26896 = G__26903;
i__26891_26897 = G__26904;
continue;
}
} else
{var temp__4092__auto___26905 = cljs.core.seq(seq__26888_26894);if(temp__4092__auto___26905)
{var seq__26888_26906__$1 = temp__4092__auto___26905;if(cljs.core.chunked_seq_QMARK_(seq__26888_26906__$1))
{var c__4148__auto___26907 = cljs.core.chunk_first(seq__26888_26906__$1);{
var G__26908 = cljs.core.chunk_rest(seq__26888_26906__$1);
var G__26909 = c__4148__auto___26907;
var G__26910 = cljs.core.count(c__4148__auto___26907);
var G__26911 = 0;
seq__26888_26894 = G__26908;
chunk__26889_26895 = G__26909;
count__26890_26896 = G__26910;
i__26891_26897 = G__26911;
continue;
}
} else
{var vec__26893_26912 = cljs.core.first(seq__26888_26906__$1);var name_26913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893_26912,0,null);var value_26914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26893_26912,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26913,cljs.core.array_seq([value_26914], 0));
{
var G__26915 = cljs.core.next(seq__26888_26906__$1);
var G__26916 = null;
var G__26917 = 0;
var G__26918 = 0;
seq__26888_26894 = G__26915;
chunk__26889_26895 = G__26916;
count__26890_26896 = G__26917;
i__26891_26897 = G__26918;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26923_26927 = cljs.core.seq(domina.nodes(content));var chunk__26924_26928 = null;var count__26925_26929 = 0;var i__26926_26930 = 0;while(true){
if((i__26926_26930 < count__26925_26929))
{var node_26931 = chunk__26924_26928.cljs$core$IIndexed$_nth$arity$2(null,i__26926_26930);goog.dom.classes.add(node_26931,class$);
{
var G__26932 = seq__26923_26927;
var G__26933 = chunk__26924_26928;
var G__26934 = count__26925_26929;
var G__26935 = (i__26926_26930 + 1);
seq__26923_26927 = G__26932;
chunk__26924_26928 = G__26933;
count__26925_26929 = G__26934;
i__26926_26930 = G__26935;
continue;
}
} else
{var temp__4092__auto___26936 = cljs.core.seq(seq__26923_26927);if(temp__4092__auto___26936)
{var seq__26923_26937__$1 = temp__4092__auto___26936;if(cljs.core.chunked_seq_QMARK_(seq__26923_26937__$1))
{var c__4148__auto___26938 = cljs.core.chunk_first(seq__26923_26937__$1);{
var G__26939 = cljs.core.chunk_rest(seq__26923_26937__$1);
var G__26940 = c__4148__auto___26938;
var G__26941 = cljs.core.count(c__4148__auto___26938);
var G__26942 = 0;
seq__26923_26927 = G__26939;
chunk__26924_26928 = G__26940;
count__26925_26929 = G__26941;
i__26926_26930 = G__26942;
continue;
}
} else
{var node_26943 = cljs.core.first(seq__26923_26937__$1);goog.dom.classes.add(node_26943,class$);
{
var G__26944 = cljs.core.next(seq__26923_26937__$1);
var G__26945 = null;
var G__26946 = 0;
var G__26947 = 0;
seq__26923_26927 = G__26944;
chunk__26924_26928 = G__26945;
count__26925_26929 = G__26946;
i__26926_26930 = G__26947;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26952_26956 = cljs.core.seq(domina.nodes(content));var chunk__26953_26957 = null;var count__26954_26958 = 0;var i__26955_26959 = 0;while(true){
if((i__26955_26959 < count__26954_26958))
{var node_26960 = chunk__26953_26957.cljs$core$IIndexed$_nth$arity$2(null,i__26955_26959);goog.dom.classes.remove(node_26960,class$);
{
var G__26961 = seq__26952_26956;
var G__26962 = chunk__26953_26957;
var G__26963 = count__26954_26958;
var G__26964 = (i__26955_26959 + 1);
seq__26952_26956 = G__26961;
chunk__26953_26957 = G__26962;
count__26954_26958 = G__26963;
i__26955_26959 = G__26964;
continue;
}
} else
{var temp__4092__auto___26965 = cljs.core.seq(seq__26952_26956);if(temp__4092__auto___26965)
{var seq__26952_26966__$1 = temp__4092__auto___26965;if(cljs.core.chunked_seq_QMARK_(seq__26952_26966__$1))
{var c__4148__auto___26967 = cljs.core.chunk_first(seq__26952_26966__$1);{
var G__26968 = cljs.core.chunk_rest(seq__26952_26966__$1);
var G__26969 = c__4148__auto___26967;
var G__26970 = cljs.core.count(c__4148__auto___26967);
var G__26971 = 0;
seq__26952_26956 = G__26968;
chunk__26953_26957 = G__26969;
count__26954_26958 = G__26970;
i__26955_26959 = G__26971;
continue;
}
} else
{var node_26972 = cljs.core.first(seq__26952_26966__$1);goog.dom.classes.remove(node_26972,class$);
{
var G__26973 = cljs.core.next(seq__26952_26966__$1);
var G__26974 = null;
var G__26975 = 0;
var G__26976 = 0;
seq__26952_26956 = G__26973;
chunk__26953_26957 = G__26974;
count__26954_26958 = G__26975;
i__26955_26959 = G__26976;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26981_26985 = cljs.core.seq(domina.nodes(content));var chunk__26982_26986 = null;var count__26983_26987 = 0;var i__26984_26988 = 0;while(true){
if((i__26984_26988 < count__26983_26987))
{var node_26989 = chunk__26982_26986.cljs$core$IIndexed$_nth$arity$2(null,i__26984_26988);goog.dom.classes.toggle(node_26989,class$);
{
var G__26990 = seq__26981_26985;
var G__26991 = chunk__26982_26986;
var G__26992 = count__26983_26987;
var G__26993 = (i__26984_26988 + 1);
seq__26981_26985 = G__26990;
chunk__26982_26986 = G__26991;
count__26983_26987 = G__26992;
i__26984_26988 = G__26993;
continue;
}
} else
{var temp__4092__auto___26994 = cljs.core.seq(seq__26981_26985);if(temp__4092__auto___26994)
{var seq__26981_26995__$1 = temp__4092__auto___26994;if(cljs.core.chunked_seq_QMARK_(seq__26981_26995__$1))
{var c__4148__auto___26996 = cljs.core.chunk_first(seq__26981_26995__$1);{
var G__26997 = cljs.core.chunk_rest(seq__26981_26995__$1);
var G__26998 = c__4148__auto___26996;
var G__26999 = cljs.core.count(c__4148__auto___26996);
var G__27000 = 0;
seq__26981_26985 = G__26997;
chunk__26982_26986 = G__26998;
count__26983_26987 = G__26999;
i__26984_26988 = G__27000;
continue;
}
} else
{var node_27001 = cljs.core.first(seq__26981_26995__$1);goog.dom.classes.toggle(node_27001,class$);
{
var G__27002 = cljs.core.next(seq__26981_26995__$1);
var G__27003 = null;
var G__27004 = 0;
var G__27005 = 0;
seq__26981_26985 = G__27002;
chunk__26982_26986 = G__27003;
count__26983_26987 = G__27004;
i__26984_26988 = G__27005;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27014__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27010_27015 = cljs.core.seq(domina.nodes(content));var chunk__27011_27016 = null;var count__27012_27017 = 0;var i__27013_27018 = 0;while(true){
if((i__27013_27018 < count__27012_27017))
{var node_27019 = chunk__27011_27016.cljs$core$IIndexed$_nth$arity$2(null,i__27013_27018);goog.dom.classes.set(node_27019,classes_27014__$1);
{
var G__27020 = seq__27010_27015;
var G__27021 = chunk__27011_27016;
var G__27022 = count__27012_27017;
var G__27023 = (i__27013_27018 + 1);
seq__27010_27015 = G__27020;
chunk__27011_27016 = G__27021;
count__27012_27017 = G__27022;
i__27013_27018 = G__27023;
continue;
}
} else
{var temp__4092__auto___27024 = cljs.core.seq(seq__27010_27015);if(temp__4092__auto___27024)
{var seq__27010_27025__$1 = temp__4092__auto___27024;if(cljs.core.chunked_seq_QMARK_(seq__27010_27025__$1))
{var c__4148__auto___27026 = cljs.core.chunk_first(seq__27010_27025__$1);{
var G__27027 = cljs.core.chunk_rest(seq__27010_27025__$1);
var G__27028 = c__4148__auto___27026;
var G__27029 = cljs.core.count(c__4148__auto___27026);
var G__27030 = 0;
seq__27010_27015 = G__27027;
chunk__27011_27016 = G__27028;
count__27012_27017 = G__27029;
i__27013_27018 = G__27030;
continue;
}
} else
{var node_27031 = cljs.core.first(seq__27010_27025__$1);goog.dom.classes.set(node_27031,classes_27014__$1);
{
var G__27032 = cljs.core.next(seq__27010_27025__$1);
var G__27033 = null;
var G__27034 = 0;
var G__27035 = 0;
seq__27010_27015 = G__27032;
chunk__27011_27016 = G__27033;
count__27012_27017 = G__27034;
i__27013_27018 = G__27035;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27040_27044 = cljs.core.seq(domina.nodes(content));var chunk__27041_27045 = null;var count__27042_27046 = 0;var i__27043_27047 = 0;while(true){
if((i__27043_27047 < count__27042_27046))
{var node_27048 = chunk__27041_27045.cljs$core$IIndexed$_nth$arity$2(null,i__27043_27047);goog.dom.setTextContent(node_27048,value);
{
var G__27049 = seq__27040_27044;
var G__27050 = chunk__27041_27045;
var G__27051 = count__27042_27046;
var G__27052 = (i__27043_27047 + 1);
seq__27040_27044 = G__27049;
chunk__27041_27045 = G__27050;
count__27042_27046 = G__27051;
i__27043_27047 = G__27052;
continue;
}
} else
{var temp__4092__auto___27053 = cljs.core.seq(seq__27040_27044);if(temp__4092__auto___27053)
{var seq__27040_27054__$1 = temp__4092__auto___27053;if(cljs.core.chunked_seq_QMARK_(seq__27040_27054__$1))
{var c__4148__auto___27055 = cljs.core.chunk_first(seq__27040_27054__$1);{
var G__27056 = cljs.core.chunk_rest(seq__27040_27054__$1);
var G__27057 = c__4148__auto___27055;
var G__27058 = cljs.core.count(c__4148__auto___27055);
var G__27059 = 0;
seq__27040_27044 = G__27056;
chunk__27041_27045 = G__27057;
count__27042_27046 = G__27058;
i__27043_27047 = G__27059;
continue;
}
} else
{var node_27060 = cljs.core.first(seq__27040_27054__$1);goog.dom.setTextContent(node_27060,value);
{
var G__27061 = cljs.core.next(seq__27040_27054__$1);
var G__27062 = null;
var G__27063 = 0;
var G__27064 = 0;
seq__27040_27044 = G__27061;
chunk__27041_27045 = G__27062;
count__27042_27046 = G__27063;
i__27043_27047 = G__27064;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27069_27073 = cljs.core.seq(domina.nodes(content));var chunk__27070_27074 = null;var count__27071_27075 = 0;var i__27072_27076 = 0;while(true){
if((i__27072_27076 < count__27071_27075))
{var node_27077 = chunk__27070_27074.cljs$core$IIndexed$_nth$arity$2(null,i__27072_27076);goog.dom.forms.setValue(node_27077,value);
{
var G__27078 = seq__27069_27073;
var G__27079 = chunk__27070_27074;
var G__27080 = count__27071_27075;
var G__27081 = (i__27072_27076 + 1);
seq__27069_27073 = G__27078;
chunk__27070_27074 = G__27079;
count__27071_27075 = G__27080;
i__27072_27076 = G__27081;
continue;
}
} else
{var temp__4092__auto___27082 = cljs.core.seq(seq__27069_27073);if(temp__4092__auto___27082)
{var seq__27069_27083__$1 = temp__4092__auto___27082;if(cljs.core.chunked_seq_QMARK_(seq__27069_27083__$1))
{var c__4148__auto___27084 = cljs.core.chunk_first(seq__27069_27083__$1);{
var G__27085 = cljs.core.chunk_rest(seq__27069_27083__$1);
var G__27086 = c__4148__auto___27084;
var G__27087 = cljs.core.count(c__4148__auto___27084);
var G__27088 = 0;
seq__27069_27073 = G__27085;
chunk__27070_27074 = G__27086;
count__27071_27075 = G__27087;
i__27072_27076 = G__27088;
continue;
}
} else
{var node_27089 = cljs.core.first(seq__27069_27083__$1);goog.dom.forms.setValue(node_27089,value);
{
var G__27090 = cljs.core.next(seq__27069_27083__$1);
var G__27091 = null;
var G__27092 = 0;
var G__27093 = 0;
seq__27069_27073 = G__27090;
chunk__27070_27074 = G__27091;
count__27071_27075 = G__27092;
i__27072_27076 = G__27093;
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
{var value_27104 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27100_27105 = cljs.core.seq(domina.nodes(content));var chunk__27101_27106 = null;var count__27102_27107 = 0;var i__27103_27108 = 0;while(true){
if((i__27103_27108 < count__27102_27107))
{var node_27109 = chunk__27101_27106.cljs$core$IIndexed$_nth$arity$2(null,i__27103_27108);node_27109.innerHTML = value_27104;
{
var G__27110 = seq__27100_27105;
var G__27111 = chunk__27101_27106;
var G__27112 = count__27102_27107;
var G__27113 = (i__27103_27108 + 1);
seq__27100_27105 = G__27110;
chunk__27101_27106 = G__27111;
count__27102_27107 = G__27112;
i__27103_27108 = G__27113;
continue;
}
} else
{var temp__4092__auto___27114 = cljs.core.seq(seq__27100_27105);if(temp__4092__auto___27114)
{var seq__27100_27115__$1 = temp__4092__auto___27114;if(cljs.core.chunked_seq_QMARK_(seq__27100_27115__$1))
{var c__4148__auto___27116 = cljs.core.chunk_first(seq__27100_27115__$1);{
var G__27117 = cljs.core.chunk_rest(seq__27100_27115__$1);
var G__27118 = c__4148__auto___27116;
var G__27119 = cljs.core.count(c__4148__auto___27116);
var G__27120 = 0;
seq__27100_27105 = G__27117;
chunk__27101_27106 = G__27118;
count__27102_27107 = G__27119;
i__27103_27108 = G__27120;
continue;
}
} else
{var node_27121 = cljs.core.first(seq__27100_27115__$1);node_27121.innerHTML = value_27104;
{
var G__27122 = cljs.core.next(seq__27100_27115__$1);
var G__27123 = null;
var G__27124 = 0;
var G__27125 = 0;
seq__27100_27105 = G__27122;
chunk__27101_27106 = G__27123;
count__27102_27107 = G__27124;
i__27103_27108 = G__27125;
continue;
}
}
} else
{}
}
break;
}
}catch (e27099){if((e27099 instanceof Error))
{var e_27126 = e27099;domina.replace_children_BANG_(content,value_27104);
} else
{if(cljs.core.constant$keyword$199)
{throw e27099;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27133_27137 = cljs.core.seq(children);var chunk__27134_27138 = null;var count__27135_27139 = 0;var i__27136_27140 = 0;while(true){
if((i__27136_27140 < count__27135_27139))
{var child_27141 = chunk__27134_27138.cljs$core$IIndexed$_nth$arity$2(null,i__27136_27140);frag.appendChild(child_27141);
{
var G__27142 = seq__27133_27137;
var G__27143 = chunk__27134_27138;
var G__27144 = count__27135_27139;
var G__27145 = (i__27136_27140 + 1);
seq__27133_27137 = G__27142;
chunk__27134_27138 = G__27143;
count__27135_27139 = G__27144;
i__27136_27140 = G__27145;
continue;
}
} else
{var temp__4092__auto___27146 = cljs.core.seq(seq__27133_27137);if(temp__4092__auto___27146)
{var seq__27133_27147__$1 = temp__4092__auto___27146;if(cljs.core.chunked_seq_QMARK_(seq__27133_27147__$1))
{var c__4148__auto___27148 = cljs.core.chunk_first(seq__27133_27147__$1);{
var G__27149 = cljs.core.chunk_rest(seq__27133_27147__$1);
var G__27150 = c__4148__auto___27148;
var G__27151 = cljs.core.count(c__4148__auto___27148);
var G__27152 = 0;
seq__27133_27137 = G__27149;
chunk__27134_27138 = G__27150;
count__27135_27139 = G__27151;
i__27136_27140 = G__27152;
continue;
}
} else
{var child_27153 = cljs.core.first(seq__27133_27147__$1);frag.appendChild(child_27153);
{
var G__27154 = cljs.core.next(seq__27133_27147__$1);
var G__27155 = null;
var G__27156 = 0;
var G__27157 = 0;
seq__27133_27137 = G__27154;
chunk__27134_27138 = G__27155;
count__27135_27139 = G__27156;
i__27136_27140 = G__27157;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27127_SHARP_,p2__27128_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27127_SHARP_,p2__27128_SHARP_) : f.call(null,p1__27127_SHARP_,p2__27128_SHARP_));
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
{if((function (){var G__27159 = list_thing;if(G__27159)
{var bit__4050__auto__ = (G__27159.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27159.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27159);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27159);
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
{if((function (){var G__27160 = content;if(G__27160)
{var bit__4050__auto__ = (G__27160.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27160.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27160.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27160);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27160);
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
{if((function (){var G__27161 = content;if(G__27161)
{var bit__4050__auto__ = (G__27161.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27161.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27161.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27161);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27161);
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
