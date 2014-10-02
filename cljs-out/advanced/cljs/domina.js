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
var opt_wrapper_45785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_45786 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_45787 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$871,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_45787,opt_wrapper_45785,table_section_wrapper_45786,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_45785,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_45786,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_45786,cell_wrapper_45787,table_section_wrapper_45786,table_section_wrapper_45786]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__45792 = cljs.core.seq(tbody);var chunk__45793 = null;var count__45794 = (0);var i__45795 = (0);while(true){
if((i__45795 < count__45794))
{var child = chunk__45793.cljs$core$IIndexed$_nth$arity$2(null,i__45795);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__45796 = seq__45792;
var G__45797 = chunk__45793;
var G__45798 = count__45794;
var G__45799 = (i__45795 + (1));
seq__45792 = G__45796;
chunk__45793 = G__45797;
count__45794 = G__45798;
i__45795 = G__45799;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__45792);if(temp__4126__auto__)
{var seq__45792__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__45792__$1))
{var c__4314__auto__ = cljs.core.chunk_first(seq__45792__$1);{
var G__45800 = cljs.core.chunk_rest(seq__45792__$1);
var G__45801 = c__4314__auto__;
var G__45802 = cljs.core.count(c__4314__auto__);
var G__45803 = (0);
seq__45792 = G__45800;
chunk__45793 = G__45801;
count__45794 = G__45802;
i__45795 = G__45803;
continue;
}
} else
{var child = cljs.core.first(seq__45792__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__45804 = cljs.core.next(seq__45792__$1);
var G__45805 = null;
var G__45806 = (0);
var G__45807 = (0);
seq__45792 = G__45804;
chunk__45793 = G__45805;
count__45794 = G__45806;
i__45795 = G__45807;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__45809 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$871.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45809,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45809,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45809,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__45810 = wrapper.lastChild;
var G__45811 = (level - (1));
wrapper = G__45810;
level = G__45811;
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
domina.DomContent = (function (){var obj45813 = {};return obj45813;
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
log_debug.cljs$lang$applyTo = (function (arglist__45814){
var mesg = cljs.core.seq(arglist__45814);
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
log.cljs$lang$applyTo = (function (arglist__45815){
var mesg = cljs.core.seq(arglist__45815);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__45816){
var contents = cljs.core.seq(arglist__45816);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45817_SHARP_){return p1__45817_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__45818_SHARP_,p2__45819_SHARP_){return goog.dom.insertChildAt(p1__45818_SHARP_,p2__45819_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__45818_SHARP_,p2__45819_SHARP_){return goog.dom.insertChildAt(p1__45818_SHARP_,p2__45819_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__45821_SHARP_,p2__45820_SHARP_){return goog.dom.insertSiblingBefore(p2__45820_SHARP_,p1__45821_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__45821_SHARP_,p2__45820_SHARP_){return goog.dom.insertSiblingBefore(p2__45820_SHARP_,p1__45821_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__45823_SHARP_,p2__45822_SHARP_){return goog.dom.insertSiblingAfter(p2__45822_SHARP_,p1__45823_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__45823_SHARP_,p2__45822_SHARP_){return goog.dom.insertSiblingAfter(p2__45822_SHARP_,p1__45823_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__45825_SHARP_,p2__45824_SHARP_){return goog.dom.replaceNode(p2__45824_SHARP_,p1__45825_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__45825_SHARP_,p2__45824_SHARP_){return goog.dom.replaceNode(p2__45824_SHARP_,p1__45825_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__45830_45834 = cljs.core.seq(domina.nodes(content));var chunk__45831_45835 = null;var count__45832_45836 = (0);var i__45833_45837 = (0);while(true){
if((i__45833_45837 < count__45832_45836))
{var n_45838 = chunk__45831_45835.cljs$core$IIndexed$_nth$arity$2(null,i__45833_45837);goog.style.setStyle(n_45838,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__45839 = seq__45830_45834;
var G__45840 = chunk__45831_45835;
var G__45841 = count__45832_45836;
var G__45842 = (i__45833_45837 + (1));
seq__45830_45834 = G__45839;
chunk__45831_45835 = G__45840;
count__45832_45836 = G__45841;
i__45833_45837 = G__45842;
continue;
}
} else
{var temp__4126__auto___45843 = cljs.core.seq(seq__45830_45834);if(temp__4126__auto___45843)
{var seq__45830_45844__$1 = temp__4126__auto___45843;if(cljs.core.chunked_seq_QMARK_(seq__45830_45844__$1))
{var c__4314__auto___45845 = cljs.core.chunk_first(seq__45830_45844__$1);{
var G__45846 = cljs.core.chunk_rest(seq__45830_45844__$1);
var G__45847 = c__4314__auto___45845;
var G__45848 = cljs.core.count(c__4314__auto___45845);
var G__45849 = (0);
seq__45830_45834 = G__45846;
chunk__45831_45835 = G__45847;
count__45832_45836 = G__45848;
i__45833_45837 = G__45849;
continue;
}
} else
{var n_45850 = cljs.core.first(seq__45830_45844__$1);goog.style.setStyle(n_45850,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__45851 = cljs.core.next(seq__45830_45844__$1);
var G__45852 = null;
var G__45853 = (0);
var G__45854 = (0);
seq__45830_45834 = G__45851;
chunk__45831_45835 = G__45852;
count__45832_45836 = G__45853;
i__45833_45837 = G__45854;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__45855){
var content = cljs.core.first(arglist__45855);
arglist__45855 = cljs.core.next(arglist__45855);
var name = cljs.core.first(arglist__45855);
var value = cljs.core.rest(arglist__45855);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__45860_45864 = cljs.core.seq(domina.nodes(content));var chunk__45861_45865 = null;var count__45862_45866 = (0);var i__45863_45867 = (0);while(true){
if((i__45863_45867 < count__45862_45866))
{var n_45868 = chunk__45861_45865.cljs$core$IIndexed$_nth$arity$2(null,i__45863_45867);n_45868.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__45869 = seq__45860_45864;
var G__45870 = chunk__45861_45865;
var G__45871 = count__45862_45866;
var G__45872 = (i__45863_45867 + (1));
seq__45860_45864 = G__45869;
chunk__45861_45865 = G__45870;
count__45862_45866 = G__45871;
i__45863_45867 = G__45872;
continue;
}
} else
{var temp__4126__auto___45873 = cljs.core.seq(seq__45860_45864);if(temp__4126__auto___45873)
{var seq__45860_45874__$1 = temp__4126__auto___45873;if(cljs.core.chunked_seq_QMARK_(seq__45860_45874__$1))
{var c__4314__auto___45875 = cljs.core.chunk_first(seq__45860_45874__$1);{
var G__45876 = cljs.core.chunk_rest(seq__45860_45874__$1);
var G__45877 = c__4314__auto___45875;
var G__45878 = cljs.core.count(c__4314__auto___45875);
var G__45879 = (0);
seq__45860_45864 = G__45876;
chunk__45861_45865 = G__45877;
count__45862_45866 = G__45878;
i__45863_45867 = G__45879;
continue;
}
} else
{var n_45880 = cljs.core.first(seq__45860_45874__$1);n_45880.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__45881 = cljs.core.next(seq__45860_45874__$1);
var G__45882 = null;
var G__45883 = (0);
var G__45884 = (0);
seq__45860_45864 = G__45881;
chunk__45861_45865 = G__45882;
count__45862_45866 = G__45883;
i__45863_45867 = G__45884;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__45885){
var content = cljs.core.first(arglist__45885);
arglist__45885 = cljs.core.next(arglist__45885);
var name = cljs.core.first(arglist__45885);
var value = cljs.core.rest(arglist__45885);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__45890_45894 = cljs.core.seq(domina.nodes(content));var chunk__45891_45895 = null;var count__45892_45896 = (0);var i__45893_45897 = (0);while(true){
if((i__45893_45897 < count__45892_45896))
{var n_45898 = chunk__45891_45895.cljs$core$IIndexed$_nth$arity$2(null,i__45893_45897);n_45898.removeAttribute(cljs.core.name(name));
{
var G__45899 = seq__45890_45894;
var G__45900 = chunk__45891_45895;
var G__45901 = count__45892_45896;
var G__45902 = (i__45893_45897 + (1));
seq__45890_45894 = G__45899;
chunk__45891_45895 = G__45900;
count__45892_45896 = G__45901;
i__45893_45897 = G__45902;
continue;
}
} else
{var temp__4126__auto___45903 = cljs.core.seq(seq__45890_45894);if(temp__4126__auto___45903)
{var seq__45890_45904__$1 = temp__4126__auto___45903;if(cljs.core.chunked_seq_QMARK_(seq__45890_45904__$1))
{var c__4314__auto___45905 = cljs.core.chunk_first(seq__45890_45904__$1);{
var G__45906 = cljs.core.chunk_rest(seq__45890_45904__$1);
var G__45907 = c__4314__auto___45905;
var G__45908 = cljs.core.count(c__4314__auto___45905);
var G__45909 = (0);
seq__45890_45894 = G__45906;
chunk__45891_45895 = G__45907;
count__45892_45896 = G__45908;
i__45893_45897 = G__45909;
continue;
}
} else
{var n_45910 = cljs.core.first(seq__45890_45904__$1);n_45910.removeAttribute(cljs.core.name(name));
{
var G__45911 = cljs.core.next(seq__45890_45904__$1);
var G__45912 = null;
var G__45913 = (0);
var G__45914 = (0);
seq__45890_45894 = G__45911;
chunk__45891_45895 = G__45912;
count__45892_45896 = G__45913;
i__45893_45897 = G__45914;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__45916 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__45917_SHARP_){var attr = attrs__$1.item(p1__45917_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__45924_45930 = cljs.core.seq(styles);var chunk__45925_45931 = null;var count__45926_45932 = (0);var i__45927_45933 = (0);while(true){
if((i__45927_45933 < count__45926_45932))
{var vec__45928_45934 = chunk__45925_45931.cljs$core$IIndexed$_nth$arity$2(null,i__45927_45933);var name_45935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928_45934,(0),null);var value_45936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45928_45934,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_45935,cljs.core.array_seq([value_45936], 0));
{
var G__45937 = seq__45924_45930;
var G__45938 = chunk__45925_45931;
var G__45939 = count__45926_45932;
var G__45940 = (i__45927_45933 + (1));
seq__45924_45930 = G__45937;
chunk__45925_45931 = G__45938;
count__45926_45932 = G__45939;
i__45927_45933 = G__45940;
continue;
}
} else
{var temp__4126__auto___45941 = cljs.core.seq(seq__45924_45930);if(temp__4126__auto___45941)
{var seq__45924_45942__$1 = temp__4126__auto___45941;if(cljs.core.chunked_seq_QMARK_(seq__45924_45942__$1))
{var c__4314__auto___45943 = cljs.core.chunk_first(seq__45924_45942__$1);{
var G__45944 = cljs.core.chunk_rest(seq__45924_45942__$1);
var G__45945 = c__4314__auto___45943;
var G__45946 = cljs.core.count(c__4314__auto___45943);
var G__45947 = (0);
seq__45924_45930 = G__45944;
chunk__45925_45931 = G__45945;
count__45926_45932 = G__45946;
i__45927_45933 = G__45947;
continue;
}
} else
{var vec__45929_45948 = cljs.core.first(seq__45924_45942__$1);var name_45949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929_45948,(0),null);var value_45950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929_45948,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_45949,cljs.core.array_seq([value_45950], 0));
{
var G__45951 = cljs.core.next(seq__45924_45942__$1);
var G__45952 = null;
var G__45953 = (0);
var G__45954 = (0);
seq__45924_45930 = G__45951;
chunk__45925_45931 = G__45952;
count__45926_45932 = G__45953;
i__45927_45933 = G__45954;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__45961_45967 = cljs.core.seq(attrs);var chunk__45962_45968 = null;var count__45963_45969 = (0);var i__45964_45970 = (0);while(true){
if((i__45964_45970 < count__45963_45969))
{var vec__45965_45971 = chunk__45962_45968.cljs$core$IIndexed$_nth$arity$2(null,i__45964_45970);var name_45972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45965_45971,(0),null);var value_45973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45965_45971,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_45972,cljs.core.array_seq([value_45973], 0));
{
var G__45974 = seq__45961_45967;
var G__45975 = chunk__45962_45968;
var G__45976 = count__45963_45969;
var G__45977 = (i__45964_45970 + (1));
seq__45961_45967 = G__45974;
chunk__45962_45968 = G__45975;
count__45963_45969 = G__45976;
i__45964_45970 = G__45977;
continue;
}
} else
{var temp__4126__auto___45978 = cljs.core.seq(seq__45961_45967);if(temp__4126__auto___45978)
{var seq__45961_45979__$1 = temp__4126__auto___45978;if(cljs.core.chunked_seq_QMARK_(seq__45961_45979__$1))
{var c__4314__auto___45980 = cljs.core.chunk_first(seq__45961_45979__$1);{
var G__45981 = cljs.core.chunk_rest(seq__45961_45979__$1);
var G__45982 = c__4314__auto___45980;
var G__45983 = cljs.core.count(c__4314__auto___45980);
var G__45984 = (0);
seq__45961_45967 = G__45981;
chunk__45962_45968 = G__45982;
count__45963_45969 = G__45983;
i__45964_45970 = G__45984;
continue;
}
} else
{var vec__45966_45985 = cljs.core.first(seq__45961_45979__$1);var name_45986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966_45985,(0),null);var value_45987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45966_45985,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_45986,cljs.core.array_seq([value_45987], 0));
{
var G__45988 = cljs.core.next(seq__45961_45979__$1);
var G__45989 = null;
var G__45990 = (0);
var G__45991 = (0);
seq__45961_45967 = G__45988;
chunk__45962_45968 = G__45989;
count__45963_45969 = G__45990;
i__45964_45970 = G__45991;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__45996_46000 = cljs.core.seq(domina.nodes(content));var chunk__45997_46001 = null;var count__45998_46002 = (0);var i__45999_46003 = (0);while(true){
if((i__45999_46003 < count__45998_46002))
{var node_46004 = chunk__45997_46001.cljs$core$IIndexed$_nth$arity$2(null,i__45999_46003);goog.dom.classes.add(node_46004,class$);
{
var G__46005 = seq__45996_46000;
var G__46006 = chunk__45997_46001;
var G__46007 = count__45998_46002;
var G__46008 = (i__45999_46003 + (1));
seq__45996_46000 = G__46005;
chunk__45997_46001 = G__46006;
count__45998_46002 = G__46007;
i__45999_46003 = G__46008;
continue;
}
} else
{var temp__4126__auto___46009 = cljs.core.seq(seq__45996_46000);if(temp__4126__auto___46009)
{var seq__45996_46010__$1 = temp__4126__auto___46009;if(cljs.core.chunked_seq_QMARK_(seq__45996_46010__$1))
{var c__4314__auto___46011 = cljs.core.chunk_first(seq__45996_46010__$1);{
var G__46012 = cljs.core.chunk_rest(seq__45996_46010__$1);
var G__46013 = c__4314__auto___46011;
var G__46014 = cljs.core.count(c__4314__auto___46011);
var G__46015 = (0);
seq__45996_46000 = G__46012;
chunk__45997_46001 = G__46013;
count__45998_46002 = G__46014;
i__45999_46003 = G__46015;
continue;
}
} else
{var node_46016 = cljs.core.first(seq__45996_46010__$1);goog.dom.classes.add(node_46016,class$);
{
var G__46017 = cljs.core.next(seq__45996_46010__$1);
var G__46018 = null;
var G__46019 = (0);
var G__46020 = (0);
seq__45996_46000 = G__46017;
chunk__45997_46001 = G__46018;
count__45998_46002 = G__46019;
i__45999_46003 = G__46020;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__46025_46029 = cljs.core.seq(domina.nodes(content));var chunk__46026_46030 = null;var count__46027_46031 = (0);var i__46028_46032 = (0);while(true){
if((i__46028_46032 < count__46027_46031))
{var node_46033 = chunk__46026_46030.cljs$core$IIndexed$_nth$arity$2(null,i__46028_46032);goog.dom.classes.remove(node_46033,class$);
{
var G__46034 = seq__46025_46029;
var G__46035 = chunk__46026_46030;
var G__46036 = count__46027_46031;
var G__46037 = (i__46028_46032 + (1));
seq__46025_46029 = G__46034;
chunk__46026_46030 = G__46035;
count__46027_46031 = G__46036;
i__46028_46032 = G__46037;
continue;
}
} else
{var temp__4126__auto___46038 = cljs.core.seq(seq__46025_46029);if(temp__4126__auto___46038)
{var seq__46025_46039__$1 = temp__4126__auto___46038;if(cljs.core.chunked_seq_QMARK_(seq__46025_46039__$1))
{var c__4314__auto___46040 = cljs.core.chunk_first(seq__46025_46039__$1);{
var G__46041 = cljs.core.chunk_rest(seq__46025_46039__$1);
var G__46042 = c__4314__auto___46040;
var G__46043 = cljs.core.count(c__4314__auto___46040);
var G__46044 = (0);
seq__46025_46029 = G__46041;
chunk__46026_46030 = G__46042;
count__46027_46031 = G__46043;
i__46028_46032 = G__46044;
continue;
}
} else
{var node_46045 = cljs.core.first(seq__46025_46039__$1);goog.dom.classes.remove(node_46045,class$);
{
var G__46046 = cljs.core.next(seq__46025_46039__$1);
var G__46047 = null;
var G__46048 = (0);
var G__46049 = (0);
seq__46025_46029 = G__46046;
chunk__46026_46030 = G__46047;
count__46027_46031 = G__46048;
i__46028_46032 = G__46049;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__46054_46058 = cljs.core.seq(domina.nodes(content));var chunk__46055_46059 = null;var count__46056_46060 = (0);var i__46057_46061 = (0);while(true){
if((i__46057_46061 < count__46056_46060))
{var node_46062 = chunk__46055_46059.cljs$core$IIndexed$_nth$arity$2(null,i__46057_46061);goog.dom.classes.toggle(node_46062,class$);
{
var G__46063 = seq__46054_46058;
var G__46064 = chunk__46055_46059;
var G__46065 = count__46056_46060;
var G__46066 = (i__46057_46061 + (1));
seq__46054_46058 = G__46063;
chunk__46055_46059 = G__46064;
count__46056_46060 = G__46065;
i__46057_46061 = G__46066;
continue;
}
} else
{var temp__4126__auto___46067 = cljs.core.seq(seq__46054_46058);if(temp__4126__auto___46067)
{var seq__46054_46068__$1 = temp__4126__auto___46067;if(cljs.core.chunked_seq_QMARK_(seq__46054_46068__$1))
{var c__4314__auto___46069 = cljs.core.chunk_first(seq__46054_46068__$1);{
var G__46070 = cljs.core.chunk_rest(seq__46054_46068__$1);
var G__46071 = c__4314__auto___46069;
var G__46072 = cljs.core.count(c__4314__auto___46069);
var G__46073 = (0);
seq__46054_46058 = G__46070;
chunk__46055_46059 = G__46071;
count__46056_46060 = G__46072;
i__46057_46061 = G__46073;
continue;
}
} else
{var node_46074 = cljs.core.first(seq__46054_46068__$1);goog.dom.classes.toggle(node_46074,class$);
{
var G__46075 = cljs.core.next(seq__46054_46068__$1);
var G__46076 = null;
var G__46077 = (0);
var G__46078 = (0);
seq__46054_46058 = G__46075;
chunk__46055_46059 = G__46076;
count__46056_46060 = G__46077;
i__46057_46061 = G__46078;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_46087__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__46083_46088 = cljs.core.seq(domina.nodes(content));var chunk__46084_46089 = null;var count__46085_46090 = (0);var i__46086_46091 = (0);while(true){
if((i__46086_46091 < count__46085_46090))
{var node_46092 = chunk__46084_46089.cljs$core$IIndexed$_nth$arity$2(null,i__46086_46091);goog.dom.classes.set(node_46092,classes_46087__$1);
{
var G__46093 = seq__46083_46088;
var G__46094 = chunk__46084_46089;
var G__46095 = count__46085_46090;
var G__46096 = (i__46086_46091 + (1));
seq__46083_46088 = G__46093;
chunk__46084_46089 = G__46094;
count__46085_46090 = G__46095;
i__46086_46091 = G__46096;
continue;
}
} else
{var temp__4126__auto___46097 = cljs.core.seq(seq__46083_46088);if(temp__4126__auto___46097)
{var seq__46083_46098__$1 = temp__4126__auto___46097;if(cljs.core.chunked_seq_QMARK_(seq__46083_46098__$1))
{var c__4314__auto___46099 = cljs.core.chunk_first(seq__46083_46098__$1);{
var G__46100 = cljs.core.chunk_rest(seq__46083_46098__$1);
var G__46101 = c__4314__auto___46099;
var G__46102 = cljs.core.count(c__4314__auto___46099);
var G__46103 = (0);
seq__46083_46088 = G__46100;
chunk__46084_46089 = G__46101;
count__46085_46090 = G__46102;
i__46086_46091 = G__46103;
continue;
}
} else
{var node_46104 = cljs.core.first(seq__46083_46098__$1);goog.dom.classes.set(node_46104,classes_46087__$1);
{
var G__46105 = cljs.core.next(seq__46083_46098__$1);
var G__46106 = null;
var G__46107 = (0);
var G__46108 = (0);
seq__46083_46088 = G__46105;
chunk__46084_46089 = G__46106;
count__46085_46090 = G__46107;
i__46086_46091 = G__46108;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__46113_46117 = cljs.core.seq(domina.nodes(content));var chunk__46114_46118 = null;var count__46115_46119 = (0);var i__46116_46120 = (0);while(true){
if((i__46116_46120 < count__46115_46119))
{var node_46121 = chunk__46114_46118.cljs$core$IIndexed$_nth$arity$2(null,i__46116_46120);goog.dom.setTextContent(node_46121,value);
{
var G__46122 = seq__46113_46117;
var G__46123 = chunk__46114_46118;
var G__46124 = count__46115_46119;
var G__46125 = (i__46116_46120 + (1));
seq__46113_46117 = G__46122;
chunk__46114_46118 = G__46123;
count__46115_46119 = G__46124;
i__46116_46120 = G__46125;
continue;
}
} else
{var temp__4126__auto___46126 = cljs.core.seq(seq__46113_46117);if(temp__4126__auto___46126)
{var seq__46113_46127__$1 = temp__4126__auto___46126;if(cljs.core.chunked_seq_QMARK_(seq__46113_46127__$1))
{var c__4314__auto___46128 = cljs.core.chunk_first(seq__46113_46127__$1);{
var G__46129 = cljs.core.chunk_rest(seq__46113_46127__$1);
var G__46130 = c__4314__auto___46128;
var G__46131 = cljs.core.count(c__4314__auto___46128);
var G__46132 = (0);
seq__46113_46117 = G__46129;
chunk__46114_46118 = G__46130;
count__46115_46119 = G__46131;
i__46116_46120 = G__46132;
continue;
}
} else
{var node_46133 = cljs.core.first(seq__46113_46127__$1);goog.dom.setTextContent(node_46133,value);
{
var G__46134 = cljs.core.next(seq__46113_46127__$1);
var G__46135 = null;
var G__46136 = (0);
var G__46137 = (0);
seq__46113_46117 = G__46134;
chunk__46114_46118 = G__46135;
count__46115_46119 = G__46136;
i__46116_46120 = G__46137;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__46142_46146 = cljs.core.seq(domina.nodes(content));var chunk__46143_46147 = null;var count__46144_46148 = (0);var i__46145_46149 = (0);while(true){
if((i__46145_46149 < count__46144_46148))
{var node_46150 = chunk__46143_46147.cljs$core$IIndexed$_nth$arity$2(null,i__46145_46149);goog.dom.forms.setValue(node_46150,value);
{
var G__46151 = seq__46142_46146;
var G__46152 = chunk__46143_46147;
var G__46153 = count__46144_46148;
var G__46154 = (i__46145_46149 + (1));
seq__46142_46146 = G__46151;
chunk__46143_46147 = G__46152;
count__46144_46148 = G__46153;
i__46145_46149 = G__46154;
continue;
}
} else
{var temp__4126__auto___46155 = cljs.core.seq(seq__46142_46146);if(temp__4126__auto___46155)
{var seq__46142_46156__$1 = temp__4126__auto___46155;if(cljs.core.chunked_seq_QMARK_(seq__46142_46156__$1))
{var c__4314__auto___46157 = cljs.core.chunk_first(seq__46142_46156__$1);{
var G__46158 = cljs.core.chunk_rest(seq__46142_46156__$1);
var G__46159 = c__4314__auto___46157;
var G__46160 = cljs.core.count(c__4314__auto___46157);
var G__46161 = (0);
seq__46142_46146 = G__46158;
chunk__46143_46147 = G__46159;
count__46144_46148 = G__46160;
i__46145_46149 = G__46161;
continue;
}
} else
{var node_46162 = cljs.core.first(seq__46142_46156__$1);goog.dom.forms.setValue(node_46162,value);
{
var G__46163 = cljs.core.next(seq__46142_46156__$1);
var G__46164 = null;
var G__46165 = (0);
var G__46166 = (0);
seq__46142_46146 = G__46163;
chunk__46143_46147 = G__46164;
count__46144_46148 = G__46165;
i__46145_46149 = G__46166;
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
{var value_46177 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__46173_46178 = cljs.core.seq(domina.nodes(content));var chunk__46174_46179 = null;var count__46175_46180 = (0);var i__46176_46181 = (0);while(true){
if((i__46176_46181 < count__46175_46180))
{var node_46182 = chunk__46174_46179.cljs$core$IIndexed$_nth$arity$2(null,i__46176_46181);node_46182.innerHTML = value_46177;
{
var G__46183 = seq__46173_46178;
var G__46184 = chunk__46174_46179;
var G__46185 = count__46175_46180;
var G__46186 = (i__46176_46181 + (1));
seq__46173_46178 = G__46183;
chunk__46174_46179 = G__46184;
count__46175_46180 = G__46185;
i__46176_46181 = G__46186;
continue;
}
} else
{var temp__4126__auto___46187 = cljs.core.seq(seq__46173_46178);if(temp__4126__auto___46187)
{var seq__46173_46188__$1 = temp__4126__auto___46187;if(cljs.core.chunked_seq_QMARK_(seq__46173_46188__$1))
{var c__4314__auto___46189 = cljs.core.chunk_first(seq__46173_46188__$1);{
var G__46190 = cljs.core.chunk_rest(seq__46173_46188__$1);
var G__46191 = c__4314__auto___46189;
var G__46192 = cljs.core.count(c__4314__auto___46189);
var G__46193 = (0);
seq__46173_46178 = G__46190;
chunk__46174_46179 = G__46191;
count__46175_46180 = G__46192;
i__46176_46181 = G__46193;
continue;
}
} else
{var node_46194 = cljs.core.first(seq__46173_46188__$1);node_46194.innerHTML = value_46177;
{
var G__46195 = cljs.core.next(seq__46173_46188__$1);
var G__46196 = null;
var G__46197 = (0);
var G__46198 = (0);
seq__46173_46178 = G__46195;
chunk__46174_46179 = G__46196;
count__46175_46180 = G__46197;
i__46176_46181 = G__46198;
continue;
}
}
} else
{}
}
break;
}
}catch (e46172){if((e46172 instanceof Error))
{var e_46199 = e46172;domina.replace_children_BANG_(content,value_46177);
} else
{throw e46172;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__46206_46210 = cljs.core.seq(children);var chunk__46207_46211 = null;var count__46208_46212 = (0);var i__46209_46213 = (0);while(true){
if((i__46209_46213 < count__46208_46212))
{var child_46214 = chunk__46207_46211.cljs$core$IIndexed$_nth$arity$2(null,i__46209_46213);frag.appendChild(child_46214);
{
var G__46215 = seq__46206_46210;
var G__46216 = chunk__46207_46211;
var G__46217 = count__46208_46212;
var G__46218 = (i__46209_46213 + (1));
seq__46206_46210 = G__46215;
chunk__46207_46211 = G__46216;
count__46208_46212 = G__46217;
i__46209_46213 = G__46218;
continue;
}
} else
{var temp__4126__auto___46219 = cljs.core.seq(seq__46206_46210);if(temp__4126__auto___46219)
{var seq__46206_46220__$1 = temp__4126__auto___46219;if(cljs.core.chunked_seq_QMARK_(seq__46206_46220__$1))
{var c__4314__auto___46221 = cljs.core.chunk_first(seq__46206_46220__$1);{
var G__46222 = cljs.core.chunk_rest(seq__46206_46220__$1);
var G__46223 = c__4314__auto___46221;
var G__46224 = cljs.core.count(c__4314__auto___46221);
var G__46225 = (0);
seq__46206_46210 = G__46222;
chunk__46207_46211 = G__46223;
count__46208_46212 = G__46224;
i__46209_46213 = G__46225;
continue;
}
} else
{var child_46226 = cljs.core.first(seq__46206_46220__$1);frag.appendChild(child_46226);
{
var G__46227 = cljs.core.next(seq__46206_46220__$1);
var G__46228 = null;
var G__46229 = (0);
var G__46230 = (0);
seq__46206_46210 = G__46227;
chunk__46207_46211 = G__46228;
count__46208_46212 = G__46229;
i__46209_46213 = G__46230;
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
return (function (p1__46200_SHARP_,p2__46201_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__46200_SHARP_,p2__46201_SHARP_) : f.call(null,p1__46200_SHARP_,p2__46201_SHARP_));
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
{if((function (){var G__46232 = list_thing;if(G__46232)
{var bit__4208__auto__ = (G__46232.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46232.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46232);
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
{if((function (){var G__46233 = content;if(G__46233)
{var bit__4208__auto__ = (G__46233.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46233.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46233);
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
{if((function (){var G__46234 = content;if(G__46234)
{var bit__4208__auto__ = (G__46234.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__46234.cljs$core$ISeqable$))
{return true;
} else
{if((!G__46234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__46234);
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
