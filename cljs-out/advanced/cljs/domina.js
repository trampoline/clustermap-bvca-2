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
var opt_wrapper_26710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26711 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26712 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$199,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26711,table_section_wrapper_26711,opt_wrapper_26710,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26712,table_section_wrapper_26711,cell_wrapper_26712,opt_wrapper_26710,table_section_wrapper_26711,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26711]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26717 = cljs.core.seq(tbody);var chunk__26718 = null;var count__26719 = 0;var i__26720 = 0;while(true){
if((i__26720 < count__26719))
{var child = chunk__26718.cljs$core$IIndexed$_nth$arity$2(null,i__26720);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26721 = seq__26717;
var G__26722 = chunk__26718;
var G__26723 = count__26719;
var G__26724 = (i__26720 + 1);
seq__26717 = G__26721;
chunk__26718 = G__26722;
count__26719 = G__26723;
i__26720 = G__26724;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26717);if(temp__4092__auto__)
{var seq__26717__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26717__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26717__$1);{
var G__26725 = cljs.core.chunk_rest(seq__26717__$1);
var G__26726 = c__4148__auto__;
var G__26727 = cljs.core.count(c__4148__auto__);
var G__26728 = 0;
seq__26717 = G__26725;
chunk__26718 = G__26726;
count__26719 = G__26727;
i__26720 = G__26728;
continue;
}
} else
{var child = cljs.core.first(seq__26717__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26729 = cljs.core.next(seq__26717__$1);
var G__26730 = null;
var G__26731 = 0;
var G__26732 = 0;
seq__26717 = G__26729;
chunk__26718 = G__26730;
count__26719 = G__26731;
i__26720 = G__26732;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26734 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26735 = wrapper.lastChild;
var G__26736 = (level - 1);
wrapper = G__26735;
level = G__26736;
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
domina.DomContent = (function (){var obj26738 = {};return obj26738;
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
log_debug.cljs$lang$applyTo = (function (arglist__26739){
var mesg = cljs.core.seq(arglist__26739);
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
log.cljs$lang$applyTo = (function (arglist__26740){
var mesg = cljs.core.seq(arglist__26740);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26741){
var contents = cljs.core.seq(arglist__26741);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26742_SHARP_){return p1__26742_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26743_SHARP_,p2__26744_SHARP_){return goog.dom.insertChildAt(p1__26743_SHARP_,p2__26744_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26743_SHARP_,p2__26744_SHARP_){return goog.dom.insertChildAt(p1__26743_SHARP_,p2__26744_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26746_SHARP_,p2__26745_SHARP_){return goog.dom.insertSiblingBefore(p2__26745_SHARP_,p1__26746_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26746_SHARP_,p2__26745_SHARP_){return goog.dom.insertSiblingBefore(p2__26745_SHARP_,p1__26746_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26748_SHARP_,p2__26747_SHARP_){return goog.dom.insertSiblingAfter(p2__26747_SHARP_,p1__26748_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26748_SHARP_,p2__26747_SHARP_){return goog.dom.insertSiblingAfter(p2__26747_SHARP_,p1__26748_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26750_SHARP_,p2__26749_SHARP_){return goog.dom.replaceNode(p2__26749_SHARP_,p1__26750_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26750_SHARP_,p2__26749_SHARP_){return goog.dom.replaceNode(p2__26749_SHARP_,p1__26750_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26755_26759 = cljs.core.seq(domina.nodes(content));var chunk__26756_26760 = null;var count__26757_26761 = 0;var i__26758_26762 = 0;while(true){
if((i__26758_26762 < count__26757_26761))
{var n_26763 = chunk__26756_26760.cljs$core$IIndexed$_nth$arity$2(null,i__26758_26762);goog.style.setStyle(n_26763,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26764 = seq__26755_26759;
var G__26765 = chunk__26756_26760;
var G__26766 = count__26757_26761;
var G__26767 = (i__26758_26762 + 1);
seq__26755_26759 = G__26764;
chunk__26756_26760 = G__26765;
count__26757_26761 = G__26766;
i__26758_26762 = G__26767;
continue;
}
} else
{var temp__4092__auto___26768 = cljs.core.seq(seq__26755_26759);if(temp__4092__auto___26768)
{var seq__26755_26769__$1 = temp__4092__auto___26768;if(cljs.core.chunked_seq_QMARK_(seq__26755_26769__$1))
{var c__4148__auto___26770 = cljs.core.chunk_first(seq__26755_26769__$1);{
var G__26771 = cljs.core.chunk_rest(seq__26755_26769__$1);
var G__26772 = c__4148__auto___26770;
var G__26773 = cljs.core.count(c__4148__auto___26770);
var G__26774 = 0;
seq__26755_26759 = G__26771;
chunk__26756_26760 = G__26772;
count__26757_26761 = G__26773;
i__26758_26762 = G__26774;
continue;
}
} else
{var n_26775 = cljs.core.first(seq__26755_26769__$1);goog.style.setStyle(n_26775,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26776 = cljs.core.next(seq__26755_26769__$1);
var G__26777 = null;
var G__26778 = 0;
var G__26779 = 0;
seq__26755_26759 = G__26776;
chunk__26756_26760 = G__26777;
count__26757_26761 = G__26778;
i__26758_26762 = G__26779;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26780){
var content = cljs.core.first(arglist__26780);
arglist__26780 = cljs.core.next(arglist__26780);
var name = cljs.core.first(arglist__26780);
var value = cljs.core.rest(arglist__26780);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26785_26789 = cljs.core.seq(domina.nodes(content));var chunk__26786_26790 = null;var count__26787_26791 = 0;var i__26788_26792 = 0;while(true){
if((i__26788_26792 < count__26787_26791))
{var n_26793 = chunk__26786_26790.cljs$core$IIndexed$_nth$arity$2(null,i__26788_26792);n_26793.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26794 = seq__26785_26789;
var G__26795 = chunk__26786_26790;
var G__26796 = count__26787_26791;
var G__26797 = (i__26788_26792 + 1);
seq__26785_26789 = G__26794;
chunk__26786_26790 = G__26795;
count__26787_26791 = G__26796;
i__26788_26792 = G__26797;
continue;
}
} else
{var temp__4092__auto___26798 = cljs.core.seq(seq__26785_26789);if(temp__4092__auto___26798)
{var seq__26785_26799__$1 = temp__4092__auto___26798;if(cljs.core.chunked_seq_QMARK_(seq__26785_26799__$1))
{var c__4148__auto___26800 = cljs.core.chunk_first(seq__26785_26799__$1);{
var G__26801 = cljs.core.chunk_rest(seq__26785_26799__$1);
var G__26802 = c__4148__auto___26800;
var G__26803 = cljs.core.count(c__4148__auto___26800);
var G__26804 = 0;
seq__26785_26789 = G__26801;
chunk__26786_26790 = G__26802;
count__26787_26791 = G__26803;
i__26788_26792 = G__26804;
continue;
}
} else
{var n_26805 = cljs.core.first(seq__26785_26799__$1);n_26805.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26806 = cljs.core.next(seq__26785_26799__$1);
var G__26807 = null;
var G__26808 = 0;
var G__26809 = 0;
seq__26785_26789 = G__26806;
chunk__26786_26790 = G__26807;
count__26787_26791 = G__26808;
i__26788_26792 = G__26809;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26810){
var content = cljs.core.first(arglist__26810);
arglist__26810 = cljs.core.next(arglist__26810);
var name = cljs.core.first(arglist__26810);
var value = cljs.core.rest(arglist__26810);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26815_26819 = cljs.core.seq(domina.nodes(content));var chunk__26816_26820 = null;var count__26817_26821 = 0;var i__26818_26822 = 0;while(true){
if((i__26818_26822 < count__26817_26821))
{var n_26823 = chunk__26816_26820.cljs$core$IIndexed$_nth$arity$2(null,i__26818_26822);n_26823.removeAttribute(cljs.core.name(name));
{
var G__26824 = seq__26815_26819;
var G__26825 = chunk__26816_26820;
var G__26826 = count__26817_26821;
var G__26827 = (i__26818_26822 + 1);
seq__26815_26819 = G__26824;
chunk__26816_26820 = G__26825;
count__26817_26821 = G__26826;
i__26818_26822 = G__26827;
continue;
}
} else
{var temp__4092__auto___26828 = cljs.core.seq(seq__26815_26819);if(temp__4092__auto___26828)
{var seq__26815_26829__$1 = temp__4092__auto___26828;if(cljs.core.chunked_seq_QMARK_(seq__26815_26829__$1))
{var c__4148__auto___26830 = cljs.core.chunk_first(seq__26815_26829__$1);{
var G__26831 = cljs.core.chunk_rest(seq__26815_26829__$1);
var G__26832 = c__4148__auto___26830;
var G__26833 = cljs.core.count(c__4148__auto___26830);
var G__26834 = 0;
seq__26815_26819 = G__26831;
chunk__26816_26820 = G__26832;
count__26817_26821 = G__26833;
i__26818_26822 = G__26834;
continue;
}
} else
{var n_26835 = cljs.core.first(seq__26815_26829__$1);n_26835.removeAttribute(cljs.core.name(name));
{
var G__26836 = cljs.core.next(seq__26815_26829__$1);
var G__26837 = null;
var G__26838 = 0;
var G__26839 = 0;
seq__26815_26819 = G__26836;
chunk__26816_26820 = G__26837;
count__26817_26821 = G__26838;
i__26818_26822 = G__26839;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26841 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26841,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26841,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$198)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26842_SHARP_){var attr = attrs__$1.item(p1__26842_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26849_26855 = cljs.core.seq(styles);var chunk__26850_26856 = null;var count__26851_26857 = 0;var i__26852_26858 = 0;while(true){
if((i__26852_26858 < count__26851_26857))
{var vec__26853_26859 = chunk__26850_26856.cljs$core$IIndexed$_nth$arity$2(null,i__26852_26858);var name_26860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_26859,0,null);var value_26861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_26859,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26860,cljs.core.array_seq([value_26861], 0));
{
var G__26862 = seq__26849_26855;
var G__26863 = chunk__26850_26856;
var G__26864 = count__26851_26857;
var G__26865 = (i__26852_26858 + 1);
seq__26849_26855 = G__26862;
chunk__26850_26856 = G__26863;
count__26851_26857 = G__26864;
i__26852_26858 = G__26865;
continue;
}
} else
{var temp__4092__auto___26866 = cljs.core.seq(seq__26849_26855);if(temp__4092__auto___26866)
{var seq__26849_26867__$1 = temp__4092__auto___26866;if(cljs.core.chunked_seq_QMARK_(seq__26849_26867__$1))
{var c__4148__auto___26868 = cljs.core.chunk_first(seq__26849_26867__$1);{
var G__26869 = cljs.core.chunk_rest(seq__26849_26867__$1);
var G__26870 = c__4148__auto___26868;
var G__26871 = cljs.core.count(c__4148__auto___26868);
var G__26872 = 0;
seq__26849_26855 = G__26869;
chunk__26850_26856 = G__26870;
count__26851_26857 = G__26871;
i__26852_26858 = G__26872;
continue;
}
} else
{var vec__26854_26873 = cljs.core.first(seq__26849_26867__$1);var name_26874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854_26873,0,null);var value_26875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26854_26873,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26874,cljs.core.array_seq([value_26875], 0));
{
var G__26876 = cljs.core.next(seq__26849_26867__$1);
var G__26877 = null;
var G__26878 = 0;
var G__26879 = 0;
seq__26849_26855 = G__26876;
chunk__26850_26856 = G__26877;
count__26851_26857 = G__26878;
i__26852_26858 = G__26879;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26886_26892 = cljs.core.seq(attrs);var chunk__26887_26893 = null;var count__26888_26894 = 0;var i__26889_26895 = 0;while(true){
if((i__26889_26895 < count__26888_26894))
{var vec__26890_26896 = chunk__26887_26893.cljs$core$IIndexed$_nth$arity$2(null,i__26889_26895);var name_26897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26890_26896,0,null);var value_26898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26890_26896,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26897,cljs.core.array_seq([value_26898], 0));
{
var G__26899 = seq__26886_26892;
var G__26900 = chunk__26887_26893;
var G__26901 = count__26888_26894;
var G__26902 = (i__26889_26895 + 1);
seq__26886_26892 = G__26899;
chunk__26887_26893 = G__26900;
count__26888_26894 = G__26901;
i__26889_26895 = G__26902;
continue;
}
} else
{var temp__4092__auto___26903 = cljs.core.seq(seq__26886_26892);if(temp__4092__auto___26903)
{var seq__26886_26904__$1 = temp__4092__auto___26903;if(cljs.core.chunked_seq_QMARK_(seq__26886_26904__$1))
{var c__4148__auto___26905 = cljs.core.chunk_first(seq__26886_26904__$1);{
var G__26906 = cljs.core.chunk_rest(seq__26886_26904__$1);
var G__26907 = c__4148__auto___26905;
var G__26908 = cljs.core.count(c__4148__auto___26905);
var G__26909 = 0;
seq__26886_26892 = G__26906;
chunk__26887_26893 = G__26907;
count__26888_26894 = G__26908;
i__26889_26895 = G__26909;
continue;
}
} else
{var vec__26891_26910 = cljs.core.first(seq__26886_26904__$1);var name_26911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26891_26910,0,null);var value_26912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26891_26910,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26911,cljs.core.array_seq([value_26912], 0));
{
var G__26913 = cljs.core.next(seq__26886_26904__$1);
var G__26914 = null;
var G__26915 = 0;
var G__26916 = 0;
seq__26886_26892 = G__26913;
chunk__26887_26893 = G__26914;
count__26888_26894 = G__26915;
i__26889_26895 = G__26916;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26921_26925 = cljs.core.seq(domina.nodes(content));var chunk__26922_26926 = null;var count__26923_26927 = 0;var i__26924_26928 = 0;while(true){
if((i__26924_26928 < count__26923_26927))
{var node_26929 = chunk__26922_26926.cljs$core$IIndexed$_nth$arity$2(null,i__26924_26928);goog.dom.classes.add(node_26929,class$);
{
var G__26930 = seq__26921_26925;
var G__26931 = chunk__26922_26926;
var G__26932 = count__26923_26927;
var G__26933 = (i__26924_26928 + 1);
seq__26921_26925 = G__26930;
chunk__26922_26926 = G__26931;
count__26923_26927 = G__26932;
i__26924_26928 = G__26933;
continue;
}
} else
{var temp__4092__auto___26934 = cljs.core.seq(seq__26921_26925);if(temp__4092__auto___26934)
{var seq__26921_26935__$1 = temp__4092__auto___26934;if(cljs.core.chunked_seq_QMARK_(seq__26921_26935__$1))
{var c__4148__auto___26936 = cljs.core.chunk_first(seq__26921_26935__$1);{
var G__26937 = cljs.core.chunk_rest(seq__26921_26935__$1);
var G__26938 = c__4148__auto___26936;
var G__26939 = cljs.core.count(c__4148__auto___26936);
var G__26940 = 0;
seq__26921_26925 = G__26937;
chunk__26922_26926 = G__26938;
count__26923_26927 = G__26939;
i__26924_26928 = G__26940;
continue;
}
} else
{var node_26941 = cljs.core.first(seq__26921_26935__$1);goog.dom.classes.add(node_26941,class$);
{
var G__26942 = cljs.core.next(seq__26921_26935__$1);
var G__26943 = null;
var G__26944 = 0;
var G__26945 = 0;
seq__26921_26925 = G__26942;
chunk__26922_26926 = G__26943;
count__26923_26927 = G__26944;
i__26924_26928 = G__26945;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26950_26954 = cljs.core.seq(domina.nodes(content));var chunk__26951_26955 = null;var count__26952_26956 = 0;var i__26953_26957 = 0;while(true){
if((i__26953_26957 < count__26952_26956))
{var node_26958 = chunk__26951_26955.cljs$core$IIndexed$_nth$arity$2(null,i__26953_26957);goog.dom.classes.remove(node_26958,class$);
{
var G__26959 = seq__26950_26954;
var G__26960 = chunk__26951_26955;
var G__26961 = count__26952_26956;
var G__26962 = (i__26953_26957 + 1);
seq__26950_26954 = G__26959;
chunk__26951_26955 = G__26960;
count__26952_26956 = G__26961;
i__26953_26957 = G__26962;
continue;
}
} else
{var temp__4092__auto___26963 = cljs.core.seq(seq__26950_26954);if(temp__4092__auto___26963)
{var seq__26950_26964__$1 = temp__4092__auto___26963;if(cljs.core.chunked_seq_QMARK_(seq__26950_26964__$1))
{var c__4148__auto___26965 = cljs.core.chunk_first(seq__26950_26964__$1);{
var G__26966 = cljs.core.chunk_rest(seq__26950_26964__$1);
var G__26967 = c__4148__auto___26965;
var G__26968 = cljs.core.count(c__4148__auto___26965);
var G__26969 = 0;
seq__26950_26954 = G__26966;
chunk__26951_26955 = G__26967;
count__26952_26956 = G__26968;
i__26953_26957 = G__26969;
continue;
}
} else
{var node_26970 = cljs.core.first(seq__26950_26964__$1);goog.dom.classes.remove(node_26970,class$);
{
var G__26971 = cljs.core.next(seq__26950_26964__$1);
var G__26972 = null;
var G__26973 = 0;
var G__26974 = 0;
seq__26950_26954 = G__26971;
chunk__26951_26955 = G__26972;
count__26952_26956 = G__26973;
i__26953_26957 = G__26974;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26979_26983 = cljs.core.seq(domina.nodes(content));var chunk__26980_26984 = null;var count__26981_26985 = 0;var i__26982_26986 = 0;while(true){
if((i__26982_26986 < count__26981_26985))
{var node_26987 = chunk__26980_26984.cljs$core$IIndexed$_nth$arity$2(null,i__26982_26986);goog.dom.classes.toggle(node_26987,class$);
{
var G__26988 = seq__26979_26983;
var G__26989 = chunk__26980_26984;
var G__26990 = count__26981_26985;
var G__26991 = (i__26982_26986 + 1);
seq__26979_26983 = G__26988;
chunk__26980_26984 = G__26989;
count__26981_26985 = G__26990;
i__26982_26986 = G__26991;
continue;
}
} else
{var temp__4092__auto___26992 = cljs.core.seq(seq__26979_26983);if(temp__4092__auto___26992)
{var seq__26979_26993__$1 = temp__4092__auto___26992;if(cljs.core.chunked_seq_QMARK_(seq__26979_26993__$1))
{var c__4148__auto___26994 = cljs.core.chunk_first(seq__26979_26993__$1);{
var G__26995 = cljs.core.chunk_rest(seq__26979_26993__$1);
var G__26996 = c__4148__auto___26994;
var G__26997 = cljs.core.count(c__4148__auto___26994);
var G__26998 = 0;
seq__26979_26983 = G__26995;
chunk__26980_26984 = G__26996;
count__26981_26985 = G__26997;
i__26982_26986 = G__26998;
continue;
}
} else
{var node_26999 = cljs.core.first(seq__26979_26993__$1);goog.dom.classes.toggle(node_26999,class$);
{
var G__27000 = cljs.core.next(seq__26979_26993__$1);
var G__27001 = null;
var G__27002 = 0;
var G__27003 = 0;
seq__26979_26983 = G__27000;
chunk__26980_26984 = G__27001;
count__26981_26985 = G__27002;
i__26982_26986 = G__27003;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27012__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27008_27013 = cljs.core.seq(domina.nodes(content));var chunk__27009_27014 = null;var count__27010_27015 = 0;var i__27011_27016 = 0;while(true){
if((i__27011_27016 < count__27010_27015))
{var node_27017 = chunk__27009_27014.cljs$core$IIndexed$_nth$arity$2(null,i__27011_27016);goog.dom.classes.set(node_27017,classes_27012__$1);
{
var G__27018 = seq__27008_27013;
var G__27019 = chunk__27009_27014;
var G__27020 = count__27010_27015;
var G__27021 = (i__27011_27016 + 1);
seq__27008_27013 = G__27018;
chunk__27009_27014 = G__27019;
count__27010_27015 = G__27020;
i__27011_27016 = G__27021;
continue;
}
} else
{var temp__4092__auto___27022 = cljs.core.seq(seq__27008_27013);if(temp__4092__auto___27022)
{var seq__27008_27023__$1 = temp__4092__auto___27022;if(cljs.core.chunked_seq_QMARK_(seq__27008_27023__$1))
{var c__4148__auto___27024 = cljs.core.chunk_first(seq__27008_27023__$1);{
var G__27025 = cljs.core.chunk_rest(seq__27008_27023__$1);
var G__27026 = c__4148__auto___27024;
var G__27027 = cljs.core.count(c__4148__auto___27024);
var G__27028 = 0;
seq__27008_27013 = G__27025;
chunk__27009_27014 = G__27026;
count__27010_27015 = G__27027;
i__27011_27016 = G__27028;
continue;
}
} else
{var node_27029 = cljs.core.first(seq__27008_27023__$1);goog.dom.classes.set(node_27029,classes_27012__$1);
{
var G__27030 = cljs.core.next(seq__27008_27023__$1);
var G__27031 = null;
var G__27032 = 0;
var G__27033 = 0;
seq__27008_27013 = G__27030;
chunk__27009_27014 = G__27031;
count__27010_27015 = G__27032;
i__27011_27016 = G__27033;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27038_27042 = cljs.core.seq(domina.nodes(content));var chunk__27039_27043 = null;var count__27040_27044 = 0;var i__27041_27045 = 0;while(true){
if((i__27041_27045 < count__27040_27044))
{var node_27046 = chunk__27039_27043.cljs$core$IIndexed$_nth$arity$2(null,i__27041_27045);goog.dom.setTextContent(node_27046,value);
{
var G__27047 = seq__27038_27042;
var G__27048 = chunk__27039_27043;
var G__27049 = count__27040_27044;
var G__27050 = (i__27041_27045 + 1);
seq__27038_27042 = G__27047;
chunk__27039_27043 = G__27048;
count__27040_27044 = G__27049;
i__27041_27045 = G__27050;
continue;
}
} else
{var temp__4092__auto___27051 = cljs.core.seq(seq__27038_27042);if(temp__4092__auto___27051)
{var seq__27038_27052__$1 = temp__4092__auto___27051;if(cljs.core.chunked_seq_QMARK_(seq__27038_27052__$1))
{var c__4148__auto___27053 = cljs.core.chunk_first(seq__27038_27052__$1);{
var G__27054 = cljs.core.chunk_rest(seq__27038_27052__$1);
var G__27055 = c__4148__auto___27053;
var G__27056 = cljs.core.count(c__4148__auto___27053);
var G__27057 = 0;
seq__27038_27042 = G__27054;
chunk__27039_27043 = G__27055;
count__27040_27044 = G__27056;
i__27041_27045 = G__27057;
continue;
}
} else
{var node_27058 = cljs.core.first(seq__27038_27052__$1);goog.dom.setTextContent(node_27058,value);
{
var G__27059 = cljs.core.next(seq__27038_27052__$1);
var G__27060 = null;
var G__27061 = 0;
var G__27062 = 0;
seq__27038_27042 = G__27059;
chunk__27039_27043 = G__27060;
count__27040_27044 = G__27061;
i__27041_27045 = G__27062;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27067_27071 = cljs.core.seq(domina.nodes(content));var chunk__27068_27072 = null;var count__27069_27073 = 0;var i__27070_27074 = 0;while(true){
if((i__27070_27074 < count__27069_27073))
{var node_27075 = chunk__27068_27072.cljs$core$IIndexed$_nth$arity$2(null,i__27070_27074);goog.dom.forms.setValue(node_27075,value);
{
var G__27076 = seq__27067_27071;
var G__27077 = chunk__27068_27072;
var G__27078 = count__27069_27073;
var G__27079 = (i__27070_27074 + 1);
seq__27067_27071 = G__27076;
chunk__27068_27072 = G__27077;
count__27069_27073 = G__27078;
i__27070_27074 = G__27079;
continue;
}
} else
{var temp__4092__auto___27080 = cljs.core.seq(seq__27067_27071);if(temp__4092__auto___27080)
{var seq__27067_27081__$1 = temp__4092__auto___27080;if(cljs.core.chunked_seq_QMARK_(seq__27067_27081__$1))
{var c__4148__auto___27082 = cljs.core.chunk_first(seq__27067_27081__$1);{
var G__27083 = cljs.core.chunk_rest(seq__27067_27081__$1);
var G__27084 = c__4148__auto___27082;
var G__27085 = cljs.core.count(c__4148__auto___27082);
var G__27086 = 0;
seq__27067_27071 = G__27083;
chunk__27068_27072 = G__27084;
count__27069_27073 = G__27085;
i__27070_27074 = G__27086;
continue;
}
} else
{var node_27087 = cljs.core.first(seq__27067_27081__$1);goog.dom.forms.setValue(node_27087,value);
{
var G__27088 = cljs.core.next(seq__27067_27081__$1);
var G__27089 = null;
var G__27090 = 0;
var G__27091 = 0;
seq__27067_27071 = G__27088;
chunk__27068_27072 = G__27089;
count__27069_27073 = G__27090;
i__27070_27074 = G__27091;
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
{var value_27102 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27098_27103 = cljs.core.seq(domina.nodes(content));var chunk__27099_27104 = null;var count__27100_27105 = 0;var i__27101_27106 = 0;while(true){
if((i__27101_27106 < count__27100_27105))
{var node_27107 = chunk__27099_27104.cljs$core$IIndexed$_nth$arity$2(null,i__27101_27106);node_27107.innerHTML = value_27102;
{
var G__27108 = seq__27098_27103;
var G__27109 = chunk__27099_27104;
var G__27110 = count__27100_27105;
var G__27111 = (i__27101_27106 + 1);
seq__27098_27103 = G__27108;
chunk__27099_27104 = G__27109;
count__27100_27105 = G__27110;
i__27101_27106 = G__27111;
continue;
}
} else
{var temp__4092__auto___27112 = cljs.core.seq(seq__27098_27103);if(temp__4092__auto___27112)
{var seq__27098_27113__$1 = temp__4092__auto___27112;if(cljs.core.chunked_seq_QMARK_(seq__27098_27113__$1))
{var c__4148__auto___27114 = cljs.core.chunk_first(seq__27098_27113__$1);{
var G__27115 = cljs.core.chunk_rest(seq__27098_27113__$1);
var G__27116 = c__4148__auto___27114;
var G__27117 = cljs.core.count(c__4148__auto___27114);
var G__27118 = 0;
seq__27098_27103 = G__27115;
chunk__27099_27104 = G__27116;
count__27100_27105 = G__27117;
i__27101_27106 = G__27118;
continue;
}
} else
{var node_27119 = cljs.core.first(seq__27098_27113__$1);node_27119.innerHTML = value_27102;
{
var G__27120 = cljs.core.next(seq__27098_27113__$1);
var G__27121 = null;
var G__27122 = 0;
var G__27123 = 0;
seq__27098_27103 = G__27120;
chunk__27099_27104 = G__27121;
count__27100_27105 = G__27122;
i__27101_27106 = G__27123;
continue;
}
}
} else
{}
}
break;
}
}catch (e27097){if((e27097 instanceof Error))
{var e_27124 = e27097;domina.replace_children_BANG_(content,value_27102);
} else
{if(cljs.core.constant$keyword$198)
{throw e27097;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27131_27135 = cljs.core.seq(children);var chunk__27132_27136 = null;var count__27133_27137 = 0;var i__27134_27138 = 0;while(true){
if((i__27134_27138 < count__27133_27137))
{var child_27139 = chunk__27132_27136.cljs$core$IIndexed$_nth$arity$2(null,i__27134_27138);frag.appendChild(child_27139);
{
var G__27140 = seq__27131_27135;
var G__27141 = chunk__27132_27136;
var G__27142 = count__27133_27137;
var G__27143 = (i__27134_27138 + 1);
seq__27131_27135 = G__27140;
chunk__27132_27136 = G__27141;
count__27133_27137 = G__27142;
i__27134_27138 = G__27143;
continue;
}
} else
{var temp__4092__auto___27144 = cljs.core.seq(seq__27131_27135);if(temp__4092__auto___27144)
{var seq__27131_27145__$1 = temp__4092__auto___27144;if(cljs.core.chunked_seq_QMARK_(seq__27131_27145__$1))
{var c__4148__auto___27146 = cljs.core.chunk_first(seq__27131_27145__$1);{
var G__27147 = cljs.core.chunk_rest(seq__27131_27145__$1);
var G__27148 = c__4148__auto___27146;
var G__27149 = cljs.core.count(c__4148__auto___27146);
var G__27150 = 0;
seq__27131_27135 = G__27147;
chunk__27132_27136 = G__27148;
count__27133_27137 = G__27149;
i__27134_27138 = G__27150;
continue;
}
} else
{var child_27151 = cljs.core.first(seq__27131_27145__$1);frag.appendChild(child_27151);
{
var G__27152 = cljs.core.next(seq__27131_27145__$1);
var G__27153 = null;
var G__27154 = 0;
var G__27155 = 0;
seq__27131_27135 = G__27152;
chunk__27132_27136 = G__27153;
count__27133_27137 = G__27154;
i__27134_27138 = G__27155;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27125_SHARP_,p2__27126_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27125_SHARP_,p2__27126_SHARP_) : f.call(null,p1__27125_SHARP_,p2__27126_SHARP_));
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
{if((function (){var G__27157 = list_thing;if(G__27157)
{var bit__4050__auto__ = (G__27157.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27157.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27157.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27157);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27157);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$199)
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
{if((function (){var G__27158 = content;if(G__27158)
{var bit__4050__auto__ = (G__27158.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27158.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27158.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27158);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$199)
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
{if((function (){var G__27159 = content;if(G__27159)
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
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$199)
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
