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
var opt_wrapper_24783 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24784 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_24785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$116,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_24784,table_section_wrapper_24784,opt_wrapper_24783,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_24785,table_section_wrapper_24784,cell_wrapper_24785,opt_wrapper_24783,table_section_wrapper_24784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_24784]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24790 = cljs.core.seq(tbody);var chunk__24791 = null;var count__24792 = 0;var i__24793 = 0;while(true){
if((i__24793 < count__24792))
{var child = chunk__24791.cljs$core$IIndexed$_nth$arity$2(null,i__24793);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24794 = seq__24790;
var G__24795 = chunk__24791;
var G__24796 = count__24792;
var G__24797 = (i__24793 + 1);
seq__24790 = G__24794;
chunk__24791 = G__24795;
count__24792 = G__24796;
i__24793 = G__24797;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24790);if(temp__4092__auto__)
{var seq__24790__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24790__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24790__$1);{
var G__24798 = cljs.core.chunk_rest(seq__24790__$1);
var G__24799 = c__4148__auto__;
var G__24800 = cljs.core.count(c__4148__auto__);
var G__24801 = 0;
seq__24790 = G__24798;
chunk__24791 = G__24799;
count__24792 = G__24800;
i__24793 = G__24801;
continue;
}
} else
{var child = cljs.core.first(seq__24790__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24802 = cljs.core.next(seq__24790__$1);
var G__24803 = null;
var G__24804 = 0;
var G__24805 = 0;
seq__24790 = G__24802;
chunk__24791 = G__24803;
count__24792 = G__24804;
i__24793 = G__24805;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__24807 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24807,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__24808 = wrapper.lastChild;
var G__24809 = (level - 1);
wrapper = G__24808;
level = G__24809;
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
domina.DomContent = (function (){var obj24811 = {};return obj24811;
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
log_debug.cljs$lang$applyTo = (function (arglist__24812){
var mesg = cljs.core.seq(arglist__24812);
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
log.cljs$lang$applyTo = (function (arglist__24813){
var mesg = cljs.core.seq(arglist__24813);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24814){
var contents = cljs.core.seq(arglist__24814);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24815_SHARP_){return p1__24815_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24816_SHARP_,p2__24817_SHARP_){return goog.dom.insertChildAt(p1__24816_SHARP_,p2__24817_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__24816_SHARP_,p2__24817_SHARP_){return goog.dom.insertChildAt(p1__24816_SHARP_,p2__24817_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24819_SHARP_,p2__24818_SHARP_){return goog.dom.insertSiblingBefore(p2__24818_SHARP_,p1__24819_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24819_SHARP_,p2__24818_SHARP_){return goog.dom.insertSiblingBefore(p2__24818_SHARP_,p1__24819_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24821_SHARP_,p2__24820_SHARP_){return goog.dom.insertSiblingAfter(p2__24820_SHARP_,p1__24821_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24821_SHARP_,p2__24820_SHARP_){return goog.dom.insertSiblingAfter(p2__24820_SHARP_,p1__24821_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24823_SHARP_,p2__24822_SHARP_){return goog.dom.replaceNode(p2__24822_SHARP_,p1__24823_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24823_SHARP_,p2__24822_SHARP_){return goog.dom.replaceNode(p2__24822_SHARP_,p1__24823_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24828_24832 = cljs.core.seq(domina.nodes(content));var chunk__24829_24833 = null;var count__24830_24834 = 0;var i__24831_24835 = 0;while(true){
if((i__24831_24835 < count__24830_24834))
{var n_24836 = chunk__24829_24833.cljs$core$IIndexed$_nth$arity$2(null,i__24831_24835);goog.style.setStyle(n_24836,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24837 = seq__24828_24832;
var G__24838 = chunk__24829_24833;
var G__24839 = count__24830_24834;
var G__24840 = (i__24831_24835 + 1);
seq__24828_24832 = G__24837;
chunk__24829_24833 = G__24838;
count__24830_24834 = G__24839;
i__24831_24835 = G__24840;
continue;
}
} else
{var temp__4092__auto___24841 = cljs.core.seq(seq__24828_24832);if(temp__4092__auto___24841)
{var seq__24828_24842__$1 = temp__4092__auto___24841;if(cljs.core.chunked_seq_QMARK_(seq__24828_24842__$1))
{var c__4148__auto___24843 = cljs.core.chunk_first(seq__24828_24842__$1);{
var G__24844 = cljs.core.chunk_rest(seq__24828_24842__$1);
var G__24845 = c__4148__auto___24843;
var G__24846 = cljs.core.count(c__4148__auto___24843);
var G__24847 = 0;
seq__24828_24832 = G__24844;
chunk__24829_24833 = G__24845;
count__24830_24834 = G__24846;
i__24831_24835 = G__24847;
continue;
}
} else
{var n_24848 = cljs.core.first(seq__24828_24842__$1);goog.style.setStyle(n_24848,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24849 = cljs.core.next(seq__24828_24842__$1);
var G__24850 = null;
var G__24851 = 0;
var G__24852 = 0;
seq__24828_24832 = G__24849;
chunk__24829_24833 = G__24850;
count__24830_24834 = G__24851;
i__24831_24835 = G__24852;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24853){
var content = cljs.core.first(arglist__24853);
arglist__24853 = cljs.core.next(arglist__24853);
var name = cljs.core.first(arglist__24853);
var value = cljs.core.rest(arglist__24853);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24858_24862 = cljs.core.seq(domina.nodes(content));var chunk__24859_24863 = null;var count__24860_24864 = 0;var i__24861_24865 = 0;while(true){
if((i__24861_24865 < count__24860_24864))
{var n_24866 = chunk__24859_24863.cljs$core$IIndexed$_nth$arity$2(null,i__24861_24865);n_24866.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24867 = seq__24858_24862;
var G__24868 = chunk__24859_24863;
var G__24869 = count__24860_24864;
var G__24870 = (i__24861_24865 + 1);
seq__24858_24862 = G__24867;
chunk__24859_24863 = G__24868;
count__24860_24864 = G__24869;
i__24861_24865 = G__24870;
continue;
}
} else
{var temp__4092__auto___24871 = cljs.core.seq(seq__24858_24862);if(temp__4092__auto___24871)
{var seq__24858_24872__$1 = temp__4092__auto___24871;if(cljs.core.chunked_seq_QMARK_(seq__24858_24872__$1))
{var c__4148__auto___24873 = cljs.core.chunk_first(seq__24858_24872__$1);{
var G__24874 = cljs.core.chunk_rest(seq__24858_24872__$1);
var G__24875 = c__4148__auto___24873;
var G__24876 = cljs.core.count(c__4148__auto___24873);
var G__24877 = 0;
seq__24858_24862 = G__24874;
chunk__24859_24863 = G__24875;
count__24860_24864 = G__24876;
i__24861_24865 = G__24877;
continue;
}
} else
{var n_24878 = cljs.core.first(seq__24858_24872__$1);n_24878.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24879 = cljs.core.next(seq__24858_24872__$1);
var G__24880 = null;
var G__24881 = 0;
var G__24882 = 0;
seq__24858_24862 = G__24879;
chunk__24859_24863 = G__24880;
count__24860_24864 = G__24881;
i__24861_24865 = G__24882;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24883){
var content = cljs.core.first(arglist__24883);
arglist__24883 = cljs.core.next(arglist__24883);
var name = cljs.core.first(arglist__24883);
var value = cljs.core.rest(arglist__24883);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24888_24892 = cljs.core.seq(domina.nodes(content));var chunk__24889_24893 = null;var count__24890_24894 = 0;var i__24891_24895 = 0;while(true){
if((i__24891_24895 < count__24890_24894))
{var n_24896 = chunk__24889_24893.cljs$core$IIndexed$_nth$arity$2(null,i__24891_24895);n_24896.removeAttribute(cljs.core.name(name));
{
var G__24897 = seq__24888_24892;
var G__24898 = chunk__24889_24893;
var G__24899 = count__24890_24894;
var G__24900 = (i__24891_24895 + 1);
seq__24888_24892 = G__24897;
chunk__24889_24893 = G__24898;
count__24890_24894 = G__24899;
i__24891_24895 = G__24900;
continue;
}
} else
{var temp__4092__auto___24901 = cljs.core.seq(seq__24888_24892);if(temp__4092__auto___24901)
{var seq__24888_24902__$1 = temp__4092__auto___24901;if(cljs.core.chunked_seq_QMARK_(seq__24888_24902__$1))
{var c__4148__auto___24903 = cljs.core.chunk_first(seq__24888_24902__$1);{
var G__24904 = cljs.core.chunk_rest(seq__24888_24902__$1);
var G__24905 = c__4148__auto___24903;
var G__24906 = cljs.core.count(c__4148__auto___24903);
var G__24907 = 0;
seq__24888_24892 = G__24904;
chunk__24889_24893 = G__24905;
count__24890_24894 = G__24906;
i__24891_24895 = G__24907;
continue;
}
} else
{var n_24908 = cljs.core.first(seq__24888_24902__$1);n_24908.removeAttribute(cljs.core.name(name));
{
var G__24909 = cljs.core.next(seq__24888_24902__$1);
var G__24910 = null;
var G__24911 = 0;
var G__24912 = 0;
seq__24888_24892 = G__24909;
chunk__24889_24893 = G__24910;
count__24890_24894 = G__24911;
i__24891_24895 = G__24912;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__24914 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24914,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$115)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24915_SHARP_){var attr = attrs__$1.item(p1__24915_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24922_24928 = cljs.core.seq(styles);var chunk__24923_24929 = null;var count__24924_24930 = 0;var i__24925_24931 = 0;while(true){
if((i__24925_24931 < count__24924_24930))
{var vec__24926_24932 = chunk__24923_24929.cljs$core$IIndexed$_nth$arity$2(null,i__24925_24931);var name_24933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926_24932,0,null);var value_24934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24926_24932,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24933,cljs.core.array_seq([value_24934], 0));
{
var G__24935 = seq__24922_24928;
var G__24936 = chunk__24923_24929;
var G__24937 = count__24924_24930;
var G__24938 = (i__24925_24931 + 1);
seq__24922_24928 = G__24935;
chunk__24923_24929 = G__24936;
count__24924_24930 = G__24937;
i__24925_24931 = G__24938;
continue;
}
} else
{var temp__4092__auto___24939 = cljs.core.seq(seq__24922_24928);if(temp__4092__auto___24939)
{var seq__24922_24940__$1 = temp__4092__auto___24939;if(cljs.core.chunked_seq_QMARK_(seq__24922_24940__$1))
{var c__4148__auto___24941 = cljs.core.chunk_first(seq__24922_24940__$1);{
var G__24942 = cljs.core.chunk_rest(seq__24922_24940__$1);
var G__24943 = c__4148__auto___24941;
var G__24944 = cljs.core.count(c__4148__auto___24941);
var G__24945 = 0;
seq__24922_24928 = G__24942;
chunk__24923_24929 = G__24943;
count__24924_24930 = G__24944;
i__24925_24931 = G__24945;
continue;
}
} else
{var vec__24927_24946 = cljs.core.first(seq__24922_24940__$1);var name_24947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927_24946,0,null);var value_24948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24927_24946,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24947,cljs.core.array_seq([value_24948], 0));
{
var G__24949 = cljs.core.next(seq__24922_24940__$1);
var G__24950 = null;
var G__24951 = 0;
var G__24952 = 0;
seq__24922_24928 = G__24949;
chunk__24923_24929 = G__24950;
count__24924_24930 = G__24951;
i__24925_24931 = G__24952;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24959_24965 = cljs.core.seq(attrs);var chunk__24960_24966 = null;var count__24961_24967 = 0;var i__24962_24968 = 0;while(true){
if((i__24962_24968 < count__24961_24967))
{var vec__24963_24969 = chunk__24960_24966.cljs$core$IIndexed$_nth$arity$2(null,i__24962_24968);var name_24970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963_24969,0,null);var value_24971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24963_24969,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24970,cljs.core.array_seq([value_24971], 0));
{
var G__24972 = seq__24959_24965;
var G__24973 = chunk__24960_24966;
var G__24974 = count__24961_24967;
var G__24975 = (i__24962_24968 + 1);
seq__24959_24965 = G__24972;
chunk__24960_24966 = G__24973;
count__24961_24967 = G__24974;
i__24962_24968 = G__24975;
continue;
}
} else
{var temp__4092__auto___24976 = cljs.core.seq(seq__24959_24965);if(temp__4092__auto___24976)
{var seq__24959_24977__$1 = temp__4092__auto___24976;if(cljs.core.chunked_seq_QMARK_(seq__24959_24977__$1))
{var c__4148__auto___24978 = cljs.core.chunk_first(seq__24959_24977__$1);{
var G__24979 = cljs.core.chunk_rest(seq__24959_24977__$1);
var G__24980 = c__4148__auto___24978;
var G__24981 = cljs.core.count(c__4148__auto___24978);
var G__24982 = 0;
seq__24959_24965 = G__24979;
chunk__24960_24966 = G__24980;
count__24961_24967 = G__24981;
i__24962_24968 = G__24982;
continue;
}
} else
{var vec__24964_24983 = cljs.core.first(seq__24959_24977__$1);var name_24984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24964_24983,0,null);var value_24985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24964_24983,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24984,cljs.core.array_seq([value_24985], 0));
{
var G__24986 = cljs.core.next(seq__24959_24977__$1);
var G__24987 = null;
var G__24988 = 0;
var G__24989 = 0;
seq__24959_24965 = G__24986;
chunk__24960_24966 = G__24987;
count__24961_24967 = G__24988;
i__24962_24968 = G__24989;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24994_24998 = cljs.core.seq(domina.nodes(content));var chunk__24995_24999 = null;var count__24996_25000 = 0;var i__24997_25001 = 0;while(true){
if((i__24997_25001 < count__24996_25000))
{var node_25002 = chunk__24995_24999.cljs$core$IIndexed$_nth$arity$2(null,i__24997_25001);goog.dom.classes.add(node_25002,class$);
{
var G__25003 = seq__24994_24998;
var G__25004 = chunk__24995_24999;
var G__25005 = count__24996_25000;
var G__25006 = (i__24997_25001 + 1);
seq__24994_24998 = G__25003;
chunk__24995_24999 = G__25004;
count__24996_25000 = G__25005;
i__24997_25001 = G__25006;
continue;
}
} else
{var temp__4092__auto___25007 = cljs.core.seq(seq__24994_24998);if(temp__4092__auto___25007)
{var seq__24994_25008__$1 = temp__4092__auto___25007;if(cljs.core.chunked_seq_QMARK_(seq__24994_25008__$1))
{var c__4148__auto___25009 = cljs.core.chunk_first(seq__24994_25008__$1);{
var G__25010 = cljs.core.chunk_rest(seq__24994_25008__$1);
var G__25011 = c__4148__auto___25009;
var G__25012 = cljs.core.count(c__4148__auto___25009);
var G__25013 = 0;
seq__24994_24998 = G__25010;
chunk__24995_24999 = G__25011;
count__24996_25000 = G__25012;
i__24997_25001 = G__25013;
continue;
}
} else
{var node_25014 = cljs.core.first(seq__24994_25008__$1);goog.dom.classes.add(node_25014,class$);
{
var G__25015 = cljs.core.next(seq__24994_25008__$1);
var G__25016 = null;
var G__25017 = 0;
var G__25018 = 0;
seq__24994_24998 = G__25015;
chunk__24995_24999 = G__25016;
count__24996_25000 = G__25017;
i__24997_25001 = G__25018;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25023_25027 = cljs.core.seq(domina.nodes(content));var chunk__25024_25028 = null;var count__25025_25029 = 0;var i__25026_25030 = 0;while(true){
if((i__25026_25030 < count__25025_25029))
{var node_25031 = chunk__25024_25028.cljs$core$IIndexed$_nth$arity$2(null,i__25026_25030);goog.dom.classes.remove(node_25031,class$);
{
var G__25032 = seq__25023_25027;
var G__25033 = chunk__25024_25028;
var G__25034 = count__25025_25029;
var G__25035 = (i__25026_25030 + 1);
seq__25023_25027 = G__25032;
chunk__25024_25028 = G__25033;
count__25025_25029 = G__25034;
i__25026_25030 = G__25035;
continue;
}
} else
{var temp__4092__auto___25036 = cljs.core.seq(seq__25023_25027);if(temp__4092__auto___25036)
{var seq__25023_25037__$1 = temp__4092__auto___25036;if(cljs.core.chunked_seq_QMARK_(seq__25023_25037__$1))
{var c__4148__auto___25038 = cljs.core.chunk_first(seq__25023_25037__$1);{
var G__25039 = cljs.core.chunk_rest(seq__25023_25037__$1);
var G__25040 = c__4148__auto___25038;
var G__25041 = cljs.core.count(c__4148__auto___25038);
var G__25042 = 0;
seq__25023_25027 = G__25039;
chunk__25024_25028 = G__25040;
count__25025_25029 = G__25041;
i__25026_25030 = G__25042;
continue;
}
} else
{var node_25043 = cljs.core.first(seq__25023_25037__$1);goog.dom.classes.remove(node_25043,class$);
{
var G__25044 = cljs.core.next(seq__25023_25037__$1);
var G__25045 = null;
var G__25046 = 0;
var G__25047 = 0;
seq__25023_25027 = G__25044;
chunk__25024_25028 = G__25045;
count__25025_25029 = G__25046;
i__25026_25030 = G__25047;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25052_25056 = cljs.core.seq(domina.nodes(content));var chunk__25053_25057 = null;var count__25054_25058 = 0;var i__25055_25059 = 0;while(true){
if((i__25055_25059 < count__25054_25058))
{var node_25060 = chunk__25053_25057.cljs$core$IIndexed$_nth$arity$2(null,i__25055_25059);goog.dom.classes.toggle(node_25060,class$);
{
var G__25061 = seq__25052_25056;
var G__25062 = chunk__25053_25057;
var G__25063 = count__25054_25058;
var G__25064 = (i__25055_25059 + 1);
seq__25052_25056 = G__25061;
chunk__25053_25057 = G__25062;
count__25054_25058 = G__25063;
i__25055_25059 = G__25064;
continue;
}
} else
{var temp__4092__auto___25065 = cljs.core.seq(seq__25052_25056);if(temp__4092__auto___25065)
{var seq__25052_25066__$1 = temp__4092__auto___25065;if(cljs.core.chunked_seq_QMARK_(seq__25052_25066__$1))
{var c__4148__auto___25067 = cljs.core.chunk_first(seq__25052_25066__$1);{
var G__25068 = cljs.core.chunk_rest(seq__25052_25066__$1);
var G__25069 = c__4148__auto___25067;
var G__25070 = cljs.core.count(c__4148__auto___25067);
var G__25071 = 0;
seq__25052_25056 = G__25068;
chunk__25053_25057 = G__25069;
count__25054_25058 = G__25070;
i__25055_25059 = G__25071;
continue;
}
} else
{var node_25072 = cljs.core.first(seq__25052_25066__$1);goog.dom.classes.toggle(node_25072,class$);
{
var G__25073 = cljs.core.next(seq__25052_25066__$1);
var G__25074 = null;
var G__25075 = 0;
var G__25076 = 0;
seq__25052_25056 = G__25073;
chunk__25053_25057 = G__25074;
count__25054_25058 = G__25075;
i__25055_25059 = G__25076;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25085__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__25081_25086 = cljs.core.seq(domina.nodes(content));var chunk__25082_25087 = null;var count__25083_25088 = 0;var i__25084_25089 = 0;while(true){
if((i__25084_25089 < count__25083_25088))
{var node_25090 = chunk__25082_25087.cljs$core$IIndexed$_nth$arity$2(null,i__25084_25089);goog.dom.classes.set(node_25090,classes_25085__$1);
{
var G__25091 = seq__25081_25086;
var G__25092 = chunk__25082_25087;
var G__25093 = count__25083_25088;
var G__25094 = (i__25084_25089 + 1);
seq__25081_25086 = G__25091;
chunk__25082_25087 = G__25092;
count__25083_25088 = G__25093;
i__25084_25089 = G__25094;
continue;
}
} else
{var temp__4092__auto___25095 = cljs.core.seq(seq__25081_25086);if(temp__4092__auto___25095)
{var seq__25081_25096__$1 = temp__4092__auto___25095;if(cljs.core.chunked_seq_QMARK_(seq__25081_25096__$1))
{var c__4148__auto___25097 = cljs.core.chunk_first(seq__25081_25096__$1);{
var G__25098 = cljs.core.chunk_rest(seq__25081_25096__$1);
var G__25099 = c__4148__auto___25097;
var G__25100 = cljs.core.count(c__4148__auto___25097);
var G__25101 = 0;
seq__25081_25086 = G__25098;
chunk__25082_25087 = G__25099;
count__25083_25088 = G__25100;
i__25084_25089 = G__25101;
continue;
}
} else
{var node_25102 = cljs.core.first(seq__25081_25096__$1);goog.dom.classes.set(node_25102,classes_25085__$1);
{
var G__25103 = cljs.core.next(seq__25081_25096__$1);
var G__25104 = null;
var G__25105 = 0;
var G__25106 = 0;
seq__25081_25086 = G__25103;
chunk__25082_25087 = G__25104;
count__25083_25088 = G__25105;
i__25084_25089 = G__25106;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25111_25115 = cljs.core.seq(domina.nodes(content));var chunk__25112_25116 = null;var count__25113_25117 = 0;var i__25114_25118 = 0;while(true){
if((i__25114_25118 < count__25113_25117))
{var node_25119 = chunk__25112_25116.cljs$core$IIndexed$_nth$arity$2(null,i__25114_25118);goog.dom.setTextContent(node_25119,value);
{
var G__25120 = seq__25111_25115;
var G__25121 = chunk__25112_25116;
var G__25122 = count__25113_25117;
var G__25123 = (i__25114_25118 + 1);
seq__25111_25115 = G__25120;
chunk__25112_25116 = G__25121;
count__25113_25117 = G__25122;
i__25114_25118 = G__25123;
continue;
}
} else
{var temp__4092__auto___25124 = cljs.core.seq(seq__25111_25115);if(temp__4092__auto___25124)
{var seq__25111_25125__$1 = temp__4092__auto___25124;if(cljs.core.chunked_seq_QMARK_(seq__25111_25125__$1))
{var c__4148__auto___25126 = cljs.core.chunk_first(seq__25111_25125__$1);{
var G__25127 = cljs.core.chunk_rest(seq__25111_25125__$1);
var G__25128 = c__4148__auto___25126;
var G__25129 = cljs.core.count(c__4148__auto___25126);
var G__25130 = 0;
seq__25111_25115 = G__25127;
chunk__25112_25116 = G__25128;
count__25113_25117 = G__25129;
i__25114_25118 = G__25130;
continue;
}
} else
{var node_25131 = cljs.core.first(seq__25111_25125__$1);goog.dom.setTextContent(node_25131,value);
{
var G__25132 = cljs.core.next(seq__25111_25125__$1);
var G__25133 = null;
var G__25134 = 0;
var G__25135 = 0;
seq__25111_25115 = G__25132;
chunk__25112_25116 = G__25133;
count__25113_25117 = G__25134;
i__25114_25118 = G__25135;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25140_25144 = cljs.core.seq(domina.nodes(content));var chunk__25141_25145 = null;var count__25142_25146 = 0;var i__25143_25147 = 0;while(true){
if((i__25143_25147 < count__25142_25146))
{var node_25148 = chunk__25141_25145.cljs$core$IIndexed$_nth$arity$2(null,i__25143_25147);goog.dom.forms.setValue(node_25148,value);
{
var G__25149 = seq__25140_25144;
var G__25150 = chunk__25141_25145;
var G__25151 = count__25142_25146;
var G__25152 = (i__25143_25147 + 1);
seq__25140_25144 = G__25149;
chunk__25141_25145 = G__25150;
count__25142_25146 = G__25151;
i__25143_25147 = G__25152;
continue;
}
} else
{var temp__4092__auto___25153 = cljs.core.seq(seq__25140_25144);if(temp__4092__auto___25153)
{var seq__25140_25154__$1 = temp__4092__auto___25153;if(cljs.core.chunked_seq_QMARK_(seq__25140_25154__$1))
{var c__4148__auto___25155 = cljs.core.chunk_first(seq__25140_25154__$1);{
var G__25156 = cljs.core.chunk_rest(seq__25140_25154__$1);
var G__25157 = c__4148__auto___25155;
var G__25158 = cljs.core.count(c__4148__auto___25155);
var G__25159 = 0;
seq__25140_25144 = G__25156;
chunk__25141_25145 = G__25157;
count__25142_25146 = G__25158;
i__25143_25147 = G__25159;
continue;
}
} else
{var node_25160 = cljs.core.first(seq__25140_25154__$1);goog.dom.forms.setValue(node_25160,value);
{
var G__25161 = cljs.core.next(seq__25140_25154__$1);
var G__25162 = null;
var G__25163 = 0;
var G__25164 = 0;
seq__25140_25144 = G__25161;
chunk__25141_25145 = G__25162;
count__25142_25146 = G__25163;
i__25143_25147 = G__25164;
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
{var value_25175 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25171_25176 = cljs.core.seq(domina.nodes(content));var chunk__25172_25177 = null;var count__25173_25178 = 0;var i__25174_25179 = 0;while(true){
if((i__25174_25179 < count__25173_25178))
{var node_25180 = chunk__25172_25177.cljs$core$IIndexed$_nth$arity$2(null,i__25174_25179);node_25180.innerHTML = value_25175;
{
var G__25181 = seq__25171_25176;
var G__25182 = chunk__25172_25177;
var G__25183 = count__25173_25178;
var G__25184 = (i__25174_25179 + 1);
seq__25171_25176 = G__25181;
chunk__25172_25177 = G__25182;
count__25173_25178 = G__25183;
i__25174_25179 = G__25184;
continue;
}
} else
{var temp__4092__auto___25185 = cljs.core.seq(seq__25171_25176);if(temp__4092__auto___25185)
{var seq__25171_25186__$1 = temp__4092__auto___25185;if(cljs.core.chunked_seq_QMARK_(seq__25171_25186__$1))
{var c__4148__auto___25187 = cljs.core.chunk_first(seq__25171_25186__$1);{
var G__25188 = cljs.core.chunk_rest(seq__25171_25186__$1);
var G__25189 = c__4148__auto___25187;
var G__25190 = cljs.core.count(c__4148__auto___25187);
var G__25191 = 0;
seq__25171_25176 = G__25188;
chunk__25172_25177 = G__25189;
count__25173_25178 = G__25190;
i__25174_25179 = G__25191;
continue;
}
} else
{var node_25192 = cljs.core.first(seq__25171_25186__$1);node_25192.innerHTML = value_25175;
{
var G__25193 = cljs.core.next(seq__25171_25186__$1);
var G__25194 = null;
var G__25195 = 0;
var G__25196 = 0;
seq__25171_25176 = G__25193;
chunk__25172_25177 = G__25194;
count__25173_25178 = G__25195;
i__25174_25179 = G__25196;
continue;
}
}
} else
{}
}
break;
}
}catch (e25170){if((e25170 instanceof Error))
{var e_25197 = e25170;domina.replace_children_BANG_(content,value_25175);
} else
{if(cljs.core.constant$keyword$115)
{throw e25170;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25204_25208 = cljs.core.seq(children);var chunk__25205_25209 = null;var count__25206_25210 = 0;var i__25207_25211 = 0;while(true){
if((i__25207_25211 < count__25206_25210))
{var child_25212 = chunk__25205_25209.cljs$core$IIndexed$_nth$arity$2(null,i__25207_25211);frag.appendChild(child_25212);
{
var G__25213 = seq__25204_25208;
var G__25214 = chunk__25205_25209;
var G__25215 = count__25206_25210;
var G__25216 = (i__25207_25211 + 1);
seq__25204_25208 = G__25213;
chunk__25205_25209 = G__25214;
count__25206_25210 = G__25215;
i__25207_25211 = G__25216;
continue;
}
} else
{var temp__4092__auto___25217 = cljs.core.seq(seq__25204_25208);if(temp__4092__auto___25217)
{var seq__25204_25218__$1 = temp__4092__auto___25217;if(cljs.core.chunked_seq_QMARK_(seq__25204_25218__$1))
{var c__4148__auto___25219 = cljs.core.chunk_first(seq__25204_25218__$1);{
var G__25220 = cljs.core.chunk_rest(seq__25204_25218__$1);
var G__25221 = c__4148__auto___25219;
var G__25222 = cljs.core.count(c__4148__auto___25219);
var G__25223 = 0;
seq__25204_25208 = G__25220;
chunk__25205_25209 = G__25221;
count__25206_25210 = G__25222;
i__25207_25211 = G__25223;
continue;
}
} else
{var child_25224 = cljs.core.first(seq__25204_25218__$1);frag.appendChild(child_25224);
{
var G__25225 = cljs.core.next(seq__25204_25218__$1);
var G__25226 = null;
var G__25227 = 0;
var G__25228 = 0;
seq__25204_25208 = G__25225;
chunk__25205_25209 = G__25226;
count__25206_25210 = G__25227;
i__25207_25211 = G__25228;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25198_SHARP_,p2__25199_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__25198_SHARP_,p2__25199_SHARP_) : f.call(null,p1__25198_SHARP_,p2__25199_SHARP_));
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
{if((function (){var G__25230 = list_thing;if(G__25230)
{var bit__4050__auto__ = (G__25230.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25230.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25230);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$116)
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
{if((function (){var G__25231 = content;if(G__25231)
{var bit__4050__auto__ = (G__25231.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25231.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25231.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25231);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$116)
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
{if((function (){var G__25232 = content;if(G__25232)
{var bit__4050__auto__ = (G__25232.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25232.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25232);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$116)
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
