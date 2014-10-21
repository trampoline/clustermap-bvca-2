// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_74762 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_74763 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_74764 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$1111,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_74764,opt_wrapper_74762,table_section_wrapper_74763,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_74762,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_74763,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_74763,cell_wrapper_74764,table_section_wrapper_74763,table_section_wrapper_74763]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__74769 = cljs.core.seq(tbody);var chunk__74770 = null;var count__74771 = (0);var i__74772 = (0);while(true){
if((i__74772 < count__74771))
{var child = chunk__74770.cljs$core$IIndexed$_nth$arity$2(null,i__74772);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__74773 = seq__74769;
var G__74774 = chunk__74770;
var G__74775 = count__74771;
var G__74776 = (i__74772 + (1));
seq__74769 = G__74773;
chunk__74770 = G__74774;
count__74771 = G__74775;
i__74772 = G__74776;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__74769);if(temp__4126__auto__)
{var seq__74769__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__74769__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__74769__$1);{
var G__74777 = cljs.core.chunk_rest(seq__74769__$1);
var G__74778 = c__4406__auto__;
var G__74779 = cljs.core.count(c__4406__auto__);
var G__74780 = (0);
seq__74769 = G__74777;
chunk__74770 = G__74778;
count__74771 = G__74779;
i__74772 = G__74780;
continue;
}
} else
{var child = cljs.core.first(seq__74769__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__74781 = cljs.core.next(seq__74769__$1);
var G__74782 = null;
var G__74783 = (0);
var G__74784 = (0);
seq__74769 = G__74781;
chunk__74770 = G__74782;
count__74771 = G__74783;
i__74772 = G__74784;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__74786 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$1111.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74786,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74786,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74786,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__74787 = wrapper.lastChild;
var G__74788 = (level - (1));
wrapper = G__74787;
level = G__74788;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj74790 = {};return obj74790;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[(function (){var G__74794 = x__4273__auto__;return goog.typeOf(G__74794);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[(function (){var G__74798 = x__4273__auto__;return goog.typeOf(G__74798);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__74799){
var mesg = cljs.core.seq(arglist__74799);
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
log.cljs$lang$applyTo = (function (arglist__74800){
var mesg = cljs.core.seq(arglist__74800);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){var G__74802 = cljs.core.name(id);return goog.dom.getElement(G__74802);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){var G__74805 = (function (){var G__74806 = cljs.core.name(class_name);return goog.dom.getElementsByClass(G__74806);
})();return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__74805) : domina.normalize_seq.call(null,G__74805));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.array_seq([domina.nodes(content)], 0)));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__74807){
var contents = cljs.core.seq(arglist__74807);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74808_SHARP_){return p1__74808_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){var G__74812_74815 = goog.dom.appendChild;var G__74813_74816 = parent_content;var G__74814_74817 = child_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__74812_74815,G__74813_74816,G__74814_74817) : domina.apply_with_cloning.call(null,G__74812_74815,G__74813_74816,G__74814_74817));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){var G__74826_74832 = (function (p1__74818_SHARP_,p2__74819_SHARP_){var G__74829 = p1__74818_SHARP_;var G__74830 = p2__74819_SHARP_;var G__74831 = idx;return goog.dom.insertChildAt(G__74829,G__74830,G__74831);
});var G__74827_74833 = parent_content;var G__74828_74834 = child_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__74826_74832,G__74827_74833,G__74828_74834) : domina.apply_with_cloning.call(null,G__74826_74832,G__74827_74833,G__74828_74834));
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){var G__74842_74847 = (function (p1__74836_SHARP_,p2__74835_SHARP_){var G__74845 = p2__74835_SHARP_;var G__74846 = p1__74836_SHARP_;return goog.dom.insertSiblingBefore(G__74845,G__74846);
});var G__74843_74848 = content;var G__74844_74849 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__74842_74847,G__74843_74848,G__74844_74849) : domina.apply_with_cloning.call(null,G__74842_74847,G__74843_74848,G__74844_74849));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){var G__74857_74862 = (function (p1__74851_SHARP_,p2__74850_SHARP_){var G__74860 = p2__74850_SHARP_;var G__74861 = p1__74851_SHARP_;return goog.dom.insertSiblingAfter(G__74860,G__74861);
});var G__74858_74863 = content;var G__74859_74864 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__74857_74862,G__74858_74863,G__74859_74864) : domina.apply_with_cloning.call(null,G__74857_74862,G__74858_74863,G__74859_74864));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){var G__74872_74877 = (function (p1__74866_SHARP_,p2__74865_SHARP_){var G__74875 = p2__74865_SHARP_;var G__74876 = p1__74866_SHARP_;return goog.dom.replaceNode(G__74875,G__74876);
});var G__74873_74878 = old_content;var G__74874_74879 = new_content;(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__74872_74877,G__74873_74878,G__74874_74879) : domina.apply_with_cloning.call(null,G__74872_74877,G__74873_74878,G__74874_74879));
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
domina.style = (function style(content,name){var s = (function (){var G__74882 = domina.single_node(content);var G__74883 = cljs.core.name(name);return goog.style.getStyle(G__74882,G__74883);
})();if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
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
var set_style_BANG___delegate = function (content,name,value){var seq__74894_74904 = cljs.core.seq(domina.nodes(content));var chunk__74895_74905 = null;var count__74896_74906 = (0);var i__74897_74907 = (0);while(true){
if((i__74897_74907 < count__74896_74906))
{var n_74908 = chunk__74895_74905.cljs$core$IIndexed$_nth$arity$2(null,i__74897_74907);var G__74898_74909 = n_74908;var G__74899_74910 = cljs.core.name(name);var G__74900_74911 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);goog.style.setStyle(G__74898_74909,G__74899_74910,G__74900_74911);
{
var G__74912 = seq__74894_74904;
var G__74913 = chunk__74895_74905;
var G__74914 = count__74896_74906;
var G__74915 = (i__74897_74907 + (1));
seq__74894_74904 = G__74912;
chunk__74895_74905 = G__74913;
count__74896_74906 = G__74914;
i__74897_74907 = G__74915;
continue;
}
} else
{var temp__4126__auto___74916 = cljs.core.seq(seq__74894_74904);if(temp__4126__auto___74916)
{var seq__74894_74917__$1 = temp__4126__auto___74916;if(cljs.core.chunked_seq_QMARK_(seq__74894_74917__$1))
{var c__4406__auto___74918 = cljs.core.chunk_first(seq__74894_74917__$1);{
var G__74919 = cljs.core.chunk_rest(seq__74894_74917__$1);
var G__74920 = c__4406__auto___74918;
var G__74921 = cljs.core.count(c__4406__auto___74918);
var G__74922 = (0);
seq__74894_74904 = G__74919;
chunk__74895_74905 = G__74920;
count__74896_74906 = G__74921;
i__74897_74907 = G__74922;
continue;
}
} else
{var n_74923 = cljs.core.first(seq__74894_74917__$1);var G__74901_74924 = n_74923;var G__74902_74925 = cljs.core.name(name);var G__74903_74926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value);goog.style.setStyle(G__74901_74924,G__74902_74925,G__74903_74926);
{
var G__74927 = cljs.core.next(seq__74894_74917__$1);
var G__74928 = null;
var G__74929 = (0);
var G__74930 = (0);
seq__74894_74904 = G__74927;
chunk__74895_74905 = G__74928;
count__74896_74906 = G__74929;
i__74897_74907 = G__74930;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__74931){
var content = cljs.core.first(arglist__74931);
arglist__74931 = cljs.core.next(arglist__74931);
var name = cljs.core.first(arglist__74931);
var value = cljs.core.rest(arglist__74931);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__74936_74940 = cljs.core.seq(domina.nodes(content));var chunk__74937_74941 = null;var count__74938_74942 = (0);var i__74939_74943 = (0);while(true){
if((i__74939_74943 < count__74938_74942))
{var n_74944 = chunk__74937_74941.cljs$core$IIndexed$_nth$arity$2(null,i__74939_74943);n_74944.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__74945 = seq__74936_74940;
var G__74946 = chunk__74937_74941;
var G__74947 = count__74938_74942;
var G__74948 = (i__74939_74943 + (1));
seq__74936_74940 = G__74945;
chunk__74937_74941 = G__74946;
count__74938_74942 = G__74947;
i__74939_74943 = G__74948;
continue;
}
} else
{var temp__4126__auto___74949 = cljs.core.seq(seq__74936_74940);if(temp__4126__auto___74949)
{var seq__74936_74950__$1 = temp__4126__auto___74949;if(cljs.core.chunked_seq_QMARK_(seq__74936_74950__$1))
{var c__4406__auto___74951 = cljs.core.chunk_first(seq__74936_74950__$1);{
var G__74952 = cljs.core.chunk_rest(seq__74936_74950__$1);
var G__74953 = c__4406__auto___74951;
var G__74954 = cljs.core.count(c__4406__auto___74951);
var G__74955 = (0);
seq__74936_74940 = G__74952;
chunk__74937_74941 = G__74953;
count__74938_74942 = G__74954;
i__74939_74943 = G__74955;
continue;
}
} else
{var n_74956 = cljs.core.first(seq__74936_74950__$1);n_74956.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__74957 = cljs.core.next(seq__74936_74950__$1);
var G__74958 = null;
var G__74959 = (0);
var G__74960 = (0);
seq__74936_74940 = G__74957;
chunk__74937_74941 = G__74958;
count__74938_74942 = G__74959;
i__74939_74943 = G__74960;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__74961){
var content = cljs.core.first(arglist__74961);
arglist__74961 = cljs.core.next(arglist__74961);
var name = cljs.core.first(arglist__74961);
var value = cljs.core.rest(arglist__74961);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__74966_74970 = cljs.core.seq(domina.nodes(content));var chunk__74967_74971 = null;var count__74968_74972 = (0);var i__74969_74973 = (0);while(true){
if((i__74969_74973 < count__74968_74972))
{var n_74974 = chunk__74967_74971.cljs$core$IIndexed$_nth$arity$2(null,i__74969_74973);n_74974.removeAttribute(cljs.core.name(name));
{
var G__74975 = seq__74966_74970;
var G__74976 = chunk__74967_74971;
var G__74977 = count__74968_74972;
var G__74978 = (i__74969_74973 + (1));
seq__74966_74970 = G__74975;
chunk__74967_74971 = G__74976;
count__74968_74972 = G__74977;
i__74969_74973 = G__74978;
continue;
}
} else
{var temp__4126__auto___74979 = cljs.core.seq(seq__74966_74970);if(temp__4126__auto___74979)
{var seq__74966_74980__$1 = temp__4126__auto___74979;if(cljs.core.chunked_seq_QMARK_(seq__74966_74980__$1))
{var c__4406__auto___74981 = cljs.core.chunk_first(seq__74966_74980__$1);{
var G__74982 = cljs.core.chunk_rest(seq__74966_74980__$1);
var G__74983 = c__4406__auto___74981;
var G__74984 = cljs.core.count(c__4406__auto___74981);
var G__74985 = (0);
seq__74966_74970 = G__74982;
chunk__74967_74971 = G__74983;
count__74968_74972 = G__74984;
i__74969_74973 = G__74985;
continue;
}
} else
{var n_74986 = cljs.core.first(seq__74966_74980__$1);n_74986.removeAttribute(cljs.core.name(name));
{
var G__74987 = cljs.core.next(seq__74966_74980__$1);
var G__74988 = null;
var G__74989 = (0);
var G__74990 = (0);
seq__74966_74970 = G__74987;
chunk__74967_74971 = G__74988;
count__74968_74972 = G__74989;
i__74969_74973 = G__74990;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__74992 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74992,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74992,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
return (function (p1__74993_SHARP_){var attr = attrs__$1.item(p1__74993_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__75000_75006 = cljs.core.seq(styles);var chunk__75001_75007 = null;var count__75002_75008 = (0);var i__75003_75009 = (0);while(true){
if((i__75003_75009 < count__75002_75008))
{var vec__75004_75010 = chunk__75001_75007.cljs$core$IIndexed$_nth$arity$2(null,i__75003_75009);var name_75011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75004_75010,(0),null);var value_75012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75004_75010,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_75011,cljs.core.array_seq([value_75012], 0));
{
var G__75013 = seq__75000_75006;
var G__75014 = chunk__75001_75007;
var G__75015 = count__75002_75008;
var G__75016 = (i__75003_75009 + (1));
seq__75000_75006 = G__75013;
chunk__75001_75007 = G__75014;
count__75002_75008 = G__75015;
i__75003_75009 = G__75016;
continue;
}
} else
{var temp__4126__auto___75017 = cljs.core.seq(seq__75000_75006);if(temp__4126__auto___75017)
{var seq__75000_75018__$1 = temp__4126__auto___75017;if(cljs.core.chunked_seq_QMARK_(seq__75000_75018__$1))
{var c__4406__auto___75019 = cljs.core.chunk_first(seq__75000_75018__$1);{
var G__75020 = cljs.core.chunk_rest(seq__75000_75018__$1);
var G__75021 = c__4406__auto___75019;
var G__75022 = cljs.core.count(c__4406__auto___75019);
var G__75023 = (0);
seq__75000_75006 = G__75020;
chunk__75001_75007 = G__75021;
count__75002_75008 = G__75022;
i__75003_75009 = G__75023;
continue;
}
} else
{var vec__75005_75024 = cljs.core.first(seq__75000_75018__$1);var name_75025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75005_75024,(0),null);var value_75026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75005_75024,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_75025,cljs.core.array_seq([value_75026], 0));
{
var G__75027 = cljs.core.next(seq__75000_75018__$1);
var G__75028 = null;
var G__75029 = (0);
var G__75030 = (0);
seq__75000_75006 = G__75027;
chunk__75001_75007 = G__75028;
count__75002_75008 = G__75029;
i__75003_75009 = G__75030;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__75037_75043 = cljs.core.seq(attrs);var chunk__75038_75044 = null;var count__75039_75045 = (0);var i__75040_75046 = (0);while(true){
if((i__75040_75046 < count__75039_75045))
{var vec__75041_75047 = chunk__75038_75044.cljs$core$IIndexed$_nth$arity$2(null,i__75040_75046);var name_75048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75041_75047,(0),null);var value_75049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75041_75047,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_75048,cljs.core.array_seq([value_75049], 0));
{
var G__75050 = seq__75037_75043;
var G__75051 = chunk__75038_75044;
var G__75052 = count__75039_75045;
var G__75053 = (i__75040_75046 + (1));
seq__75037_75043 = G__75050;
chunk__75038_75044 = G__75051;
count__75039_75045 = G__75052;
i__75040_75046 = G__75053;
continue;
}
} else
{var temp__4126__auto___75054 = cljs.core.seq(seq__75037_75043);if(temp__4126__auto___75054)
{var seq__75037_75055__$1 = temp__4126__auto___75054;if(cljs.core.chunked_seq_QMARK_(seq__75037_75055__$1))
{var c__4406__auto___75056 = cljs.core.chunk_first(seq__75037_75055__$1);{
var G__75057 = cljs.core.chunk_rest(seq__75037_75055__$1);
var G__75058 = c__4406__auto___75056;
var G__75059 = cljs.core.count(c__4406__auto___75056);
var G__75060 = (0);
seq__75037_75043 = G__75057;
chunk__75038_75044 = G__75058;
count__75039_75045 = G__75059;
i__75040_75046 = G__75060;
continue;
}
} else
{var vec__75042_75061 = cljs.core.first(seq__75037_75055__$1);var name_75062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75042_75061,(0),null);var value_75063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75042_75061,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_75062,cljs.core.array_seq([value_75063], 0));
{
var G__75064 = cljs.core.next(seq__75037_75055__$1);
var G__75065 = null;
var G__75066 = (0);
var G__75067 = (0);
seq__75037_75043 = G__75064;
chunk__75038_75044 = G__75065;
count__75039_75045 = G__75066;
i__75040_75046 = G__75067;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){var G__75070 = domina.single_node(content);var G__75071 = class$;return goog.dom.classes.has(G__75070,G__75071);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__75080_75088 = cljs.core.seq(domina.nodes(content));var chunk__75081_75089 = null;var count__75082_75090 = (0);var i__75083_75091 = (0);while(true){
if((i__75083_75091 < count__75082_75090))
{var node_75092 = chunk__75081_75089.cljs$core$IIndexed$_nth$arity$2(null,i__75083_75091);var G__75084_75093 = node_75092;var G__75085_75094 = class$;goog.dom.classes.add(G__75084_75093,G__75085_75094);
{
var G__75095 = seq__75080_75088;
var G__75096 = chunk__75081_75089;
var G__75097 = count__75082_75090;
var G__75098 = (i__75083_75091 + (1));
seq__75080_75088 = G__75095;
chunk__75081_75089 = G__75096;
count__75082_75090 = G__75097;
i__75083_75091 = G__75098;
continue;
}
} else
{var temp__4126__auto___75099 = cljs.core.seq(seq__75080_75088);if(temp__4126__auto___75099)
{var seq__75080_75100__$1 = temp__4126__auto___75099;if(cljs.core.chunked_seq_QMARK_(seq__75080_75100__$1))
{var c__4406__auto___75101 = cljs.core.chunk_first(seq__75080_75100__$1);{
var G__75102 = cljs.core.chunk_rest(seq__75080_75100__$1);
var G__75103 = c__4406__auto___75101;
var G__75104 = cljs.core.count(c__4406__auto___75101);
var G__75105 = (0);
seq__75080_75088 = G__75102;
chunk__75081_75089 = G__75103;
count__75082_75090 = G__75104;
i__75083_75091 = G__75105;
continue;
}
} else
{var node_75106 = cljs.core.first(seq__75080_75100__$1);var G__75086_75107 = node_75106;var G__75087_75108 = class$;goog.dom.classes.add(G__75086_75107,G__75087_75108);
{
var G__75109 = cljs.core.next(seq__75080_75100__$1);
var G__75110 = null;
var G__75111 = (0);
var G__75112 = (0);
seq__75080_75088 = G__75109;
chunk__75081_75089 = G__75110;
count__75082_75090 = G__75111;
i__75083_75091 = G__75112;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__75121_75129 = cljs.core.seq(domina.nodes(content));var chunk__75122_75130 = null;var count__75123_75131 = (0);var i__75124_75132 = (0);while(true){
if((i__75124_75132 < count__75123_75131))
{var node_75133 = chunk__75122_75130.cljs$core$IIndexed$_nth$arity$2(null,i__75124_75132);var G__75125_75134 = node_75133;var G__75126_75135 = class$;goog.dom.classes.remove(G__75125_75134,G__75126_75135);
{
var G__75136 = seq__75121_75129;
var G__75137 = chunk__75122_75130;
var G__75138 = count__75123_75131;
var G__75139 = (i__75124_75132 + (1));
seq__75121_75129 = G__75136;
chunk__75122_75130 = G__75137;
count__75123_75131 = G__75138;
i__75124_75132 = G__75139;
continue;
}
} else
{var temp__4126__auto___75140 = cljs.core.seq(seq__75121_75129);if(temp__4126__auto___75140)
{var seq__75121_75141__$1 = temp__4126__auto___75140;if(cljs.core.chunked_seq_QMARK_(seq__75121_75141__$1))
{var c__4406__auto___75142 = cljs.core.chunk_first(seq__75121_75141__$1);{
var G__75143 = cljs.core.chunk_rest(seq__75121_75141__$1);
var G__75144 = c__4406__auto___75142;
var G__75145 = cljs.core.count(c__4406__auto___75142);
var G__75146 = (0);
seq__75121_75129 = G__75143;
chunk__75122_75130 = G__75144;
count__75123_75131 = G__75145;
i__75124_75132 = G__75146;
continue;
}
} else
{var node_75147 = cljs.core.first(seq__75121_75141__$1);var G__75127_75148 = node_75147;var G__75128_75149 = class$;goog.dom.classes.remove(G__75127_75148,G__75128_75149);
{
var G__75150 = cljs.core.next(seq__75121_75141__$1);
var G__75151 = null;
var G__75152 = (0);
var G__75153 = (0);
seq__75121_75129 = G__75150;
chunk__75122_75130 = G__75151;
count__75123_75131 = G__75152;
i__75124_75132 = G__75153;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__75162_75170 = cljs.core.seq(domina.nodes(content));var chunk__75163_75171 = null;var count__75164_75172 = (0);var i__75165_75173 = (0);while(true){
if((i__75165_75173 < count__75164_75172))
{var node_75174 = chunk__75163_75171.cljs$core$IIndexed$_nth$arity$2(null,i__75165_75173);var G__75166_75175 = node_75174;var G__75167_75176 = class$;goog.dom.classes.toggle(G__75166_75175,G__75167_75176);
{
var G__75177 = seq__75162_75170;
var G__75178 = chunk__75163_75171;
var G__75179 = count__75164_75172;
var G__75180 = (i__75165_75173 + (1));
seq__75162_75170 = G__75177;
chunk__75163_75171 = G__75178;
count__75164_75172 = G__75179;
i__75165_75173 = G__75180;
continue;
}
} else
{var temp__4126__auto___75181 = cljs.core.seq(seq__75162_75170);if(temp__4126__auto___75181)
{var seq__75162_75182__$1 = temp__4126__auto___75181;if(cljs.core.chunked_seq_QMARK_(seq__75162_75182__$1))
{var c__4406__auto___75183 = cljs.core.chunk_first(seq__75162_75182__$1);{
var G__75184 = cljs.core.chunk_rest(seq__75162_75182__$1);
var G__75185 = c__4406__auto___75183;
var G__75186 = cljs.core.count(c__4406__auto___75183);
var G__75187 = (0);
seq__75162_75170 = G__75184;
chunk__75163_75171 = G__75185;
count__75164_75172 = G__75186;
i__75165_75173 = G__75187;
continue;
}
} else
{var node_75188 = cljs.core.first(seq__75162_75182__$1);var G__75168_75189 = node_75188;var G__75169_75190 = class$;goog.dom.classes.toggle(G__75168_75189,G__75169_75190);
{
var G__75191 = cljs.core.next(seq__75162_75182__$1);
var G__75192 = null;
var G__75193 = (0);
var G__75194 = (0);
seq__75162_75170 = G__75191;
chunk__75163_75171 = G__75192;
count__75164_75172 = G__75193;
i__75165_75173 = G__75194;
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
domina.classes = (function classes(content){return cljs.core.seq((function (){var G__75196 = domina.single_node(content);return goog.dom.classes.get(G__75196);
})());
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_75213__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__75205_75214 = cljs.core.seq(domina.nodes(content));var chunk__75206_75215 = null;var count__75207_75216 = (0);var i__75208_75217 = (0);while(true){
if((i__75208_75217 < count__75207_75216))
{var node_75218 = chunk__75206_75215.cljs$core$IIndexed$_nth$arity$2(null,i__75208_75217);var G__75209_75219 = node_75218;var G__75210_75220 = classes_75213__$1;goog.dom.classes.set(G__75209_75219,G__75210_75220);
{
var G__75221 = seq__75205_75214;
var G__75222 = chunk__75206_75215;
var G__75223 = count__75207_75216;
var G__75224 = (i__75208_75217 + (1));
seq__75205_75214 = G__75221;
chunk__75206_75215 = G__75222;
count__75207_75216 = G__75223;
i__75208_75217 = G__75224;
continue;
}
} else
{var temp__4126__auto___75225 = cljs.core.seq(seq__75205_75214);if(temp__4126__auto___75225)
{var seq__75205_75226__$1 = temp__4126__auto___75225;if(cljs.core.chunked_seq_QMARK_(seq__75205_75226__$1))
{var c__4406__auto___75227 = cljs.core.chunk_first(seq__75205_75226__$1);{
var G__75228 = cljs.core.chunk_rest(seq__75205_75226__$1);
var G__75229 = c__4406__auto___75227;
var G__75230 = cljs.core.count(c__4406__auto___75227);
var G__75231 = (0);
seq__75205_75214 = G__75228;
chunk__75206_75215 = G__75229;
count__75207_75216 = G__75230;
i__75208_75217 = G__75231;
continue;
}
} else
{var node_75232 = cljs.core.first(seq__75205_75226__$1);var G__75211_75233 = node_75232;var G__75212_75234 = classes_75213__$1;goog.dom.classes.set(G__75211_75233,G__75212_75234);
{
var G__75235 = cljs.core.next(seq__75205_75226__$1);
var G__75236 = null;
var G__75237 = (0);
var G__75238 = (0);
seq__75205_75214 = G__75235;
chunk__75206_75215 = G__75236;
count__75207_75216 = G__75237;
i__75208_75217 = G__75238;
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
domina.text = (function text(content){var G__75241 = (function (){var G__75242 = domina.single_node(content);return goog.dom.getTextContent(G__75242);
})();return goog.string.trim(G__75241);
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__75251_75259 = cljs.core.seq(domina.nodes(content));var chunk__75252_75260 = null;var count__75253_75261 = (0);var i__75254_75262 = (0);while(true){
if((i__75254_75262 < count__75253_75261))
{var node_75263 = chunk__75252_75260.cljs$core$IIndexed$_nth$arity$2(null,i__75254_75262);var G__75255_75264 = node_75263;var G__75256_75265 = value;goog.dom.setTextContent(G__75255_75264,G__75256_75265);
{
var G__75266 = seq__75251_75259;
var G__75267 = chunk__75252_75260;
var G__75268 = count__75253_75261;
var G__75269 = (i__75254_75262 + (1));
seq__75251_75259 = G__75266;
chunk__75252_75260 = G__75267;
count__75253_75261 = G__75268;
i__75254_75262 = G__75269;
continue;
}
} else
{var temp__4126__auto___75270 = cljs.core.seq(seq__75251_75259);if(temp__4126__auto___75270)
{var seq__75251_75271__$1 = temp__4126__auto___75270;if(cljs.core.chunked_seq_QMARK_(seq__75251_75271__$1))
{var c__4406__auto___75272 = cljs.core.chunk_first(seq__75251_75271__$1);{
var G__75273 = cljs.core.chunk_rest(seq__75251_75271__$1);
var G__75274 = c__4406__auto___75272;
var G__75275 = cljs.core.count(c__4406__auto___75272);
var G__75276 = (0);
seq__75251_75259 = G__75273;
chunk__75252_75260 = G__75274;
count__75253_75261 = G__75275;
i__75254_75262 = G__75276;
continue;
}
} else
{var node_75277 = cljs.core.first(seq__75251_75271__$1);var G__75257_75278 = node_75277;var G__75258_75279 = value;goog.dom.setTextContent(G__75257_75278,G__75258_75279);
{
var G__75280 = cljs.core.next(seq__75251_75271__$1);
var G__75281 = null;
var G__75282 = (0);
var G__75283 = (0);
seq__75251_75259 = G__75280;
chunk__75252_75260 = G__75281;
count__75253_75261 = G__75282;
i__75254_75262 = G__75283;
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
domina.value = (function value(content){var G__75285 = domina.single_node(content);return goog.dom.forms.getValue(G__75285);
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__75294_75302 = cljs.core.seq(domina.nodes(content));var chunk__75295_75303 = null;var count__75296_75304 = (0);var i__75297_75305 = (0);while(true){
if((i__75297_75305 < count__75296_75304))
{var node_75306 = chunk__75295_75303.cljs$core$IIndexed$_nth$arity$2(null,i__75297_75305);var G__75298_75307 = node_75306;var G__75299_75308 = value;goog.dom.forms.setValue(G__75298_75307,G__75299_75308);
{
var G__75309 = seq__75294_75302;
var G__75310 = chunk__75295_75303;
var G__75311 = count__75296_75304;
var G__75312 = (i__75297_75305 + (1));
seq__75294_75302 = G__75309;
chunk__75295_75303 = G__75310;
count__75296_75304 = G__75311;
i__75297_75305 = G__75312;
continue;
}
} else
{var temp__4126__auto___75313 = cljs.core.seq(seq__75294_75302);if(temp__4126__auto___75313)
{var seq__75294_75314__$1 = temp__4126__auto___75313;if(cljs.core.chunked_seq_QMARK_(seq__75294_75314__$1))
{var c__4406__auto___75315 = cljs.core.chunk_first(seq__75294_75314__$1);{
var G__75316 = cljs.core.chunk_rest(seq__75294_75314__$1);
var G__75317 = c__4406__auto___75315;
var G__75318 = cljs.core.count(c__4406__auto___75315);
var G__75319 = (0);
seq__75294_75302 = G__75316;
chunk__75295_75303 = G__75317;
count__75296_75304 = G__75318;
i__75297_75305 = G__75319;
continue;
}
} else
{var node_75320 = cljs.core.first(seq__75294_75314__$1);var G__75300_75321 = node_75320;var G__75301_75322 = value;goog.dom.forms.setValue(G__75300_75321,G__75301_75322);
{
var G__75323 = cljs.core.next(seq__75294_75314__$1);
var G__75324 = null;
var G__75325 = (0);
var G__75326 = (0);
seq__75294_75302 = G__75323;
chunk__75295_75303 = G__75324;
count__75296_75304 = G__75325;
i__75297_75305 = G__75326;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_75337 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__75333_75338 = cljs.core.seq(domina.nodes(content));var chunk__75334_75339 = null;var count__75335_75340 = (0);var i__75336_75341 = (0);while(true){
if((i__75336_75341 < count__75335_75340))
{var node_75342 = chunk__75334_75339.cljs$core$IIndexed$_nth$arity$2(null,i__75336_75341);node_75342.innerHTML = value_75337;
{
var G__75343 = seq__75333_75338;
var G__75344 = chunk__75334_75339;
var G__75345 = count__75335_75340;
var G__75346 = (i__75336_75341 + (1));
seq__75333_75338 = G__75343;
chunk__75334_75339 = G__75344;
count__75335_75340 = G__75345;
i__75336_75341 = G__75346;
continue;
}
} else
{var temp__4126__auto___75347 = cljs.core.seq(seq__75333_75338);if(temp__4126__auto___75347)
{var seq__75333_75348__$1 = temp__4126__auto___75347;if(cljs.core.chunked_seq_QMARK_(seq__75333_75348__$1))
{var c__4406__auto___75349 = cljs.core.chunk_first(seq__75333_75348__$1);{
var G__75350 = cljs.core.chunk_rest(seq__75333_75348__$1);
var G__75351 = c__4406__auto___75349;
var G__75352 = cljs.core.count(c__4406__auto___75349);
var G__75353 = (0);
seq__75333_75338 = G__75350;
chunk__75334_75339 = G__75351;
count__75335_75340 = G__75352;
i__75336_75341 = G__75353;
continue;
}
} else
{var node_75354 = cljs.core.first(seq__75333_75348__$1);node_75354.innerHTML = value_75337;
{
var G__75355 = cljs.core.next(seq__75333_75348__$1);
var G__75356 = null;
var G__75357 = (0);
var G__75358 = (0);
seq__75333_75338 = G__75355;
chunk__75334_75339 = G__75356;
count__75335_75340 = G__75357;
i__75336_75341 = G__75358;
continue;
}
}
} else
{}
}
break;
}
}catch (e75332){if((e75332 instanceof Error))
{var e_75359 = e75332;domina.replace_children_BANG_(content,value_75337);
} else
{throw e75332;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__75376_75384 = cljs.core.seq(children);var chunk__75377_75385 = null;var count__75378_75386 = (0);var i__75379_75387 = (0);while(true){
if((i__75379_75387 < count__75378_75386))
{var child_75388 = chunk__75377_75385.cljs$core$IIndexed$_nth$arity$2(null,i__75379_75387);frag.appendChild(child_75388);
{
var G__75389 = seq__75376_75384;
var G__75390 = chunk__75377_75385;
var G__75391 = count__75378_75386;
var G__75392 = (i__75379_75387 + (1));
seq__75376_75384 = G__75389;
chunk__75377_75385 = G__75390;
count__75378_75386 = G__75391;
i__75379_75387 = G__75392;
continue;
}
} else
{var temp__4126__auto___75393 = cljs.core.seq(seq__75376_75384);if(temp__4126__auto___75393)
{var seq__75376_75394__$1 = temp__4126__auto___75393;if(cljs.core.chunked_seq_QMARK_(seq__75376_75394__$1))
{var c__4406__auto___75395 = cljs.core.chunk_first(seq__75376_75394__$1);{
var G__75396 = cljs.core.chunk_rest(seq__75376_75394__$1);
var G__75397 = c__4406__auto___75395;
var G__75398 = cljs.core.count(c__4406__auto___75395);
var G__75399 = (0);
seq__75376_75384 = G__75396;
chunk__75377_75385 = G__75397;
count__75378_75386 = G__75398;
i__75379_75387 = G__75399;
continue;
}
} else
{var child_75400 = cljs.core.first(seq__75376_75394__$1);frag.appendChild(child_75400);
{
var G__75401 = cljs.core.next(seq__75376_75394__$1);
var G__75402 = null;
var G__75403 = (0);
var G__75404 = (0);
seq__75376_75384 = G__75401;
chunk__75377_75385 = G__75402;
count__75378_75386 = G__75403;
i__75379_75387 = G__75404;
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
{var G__75380_75405 = cljs.core.first(parents);var G__75381_75406 = first_child;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75380_75405,G__75381_75406) : f.call(null,G__75380_75405,G__75381_75406));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__75366_SHARP_,p2__75367_SHARP_){var G__75382 = p1__75366_SHARP_;var G__75383 = p2__75367_SHARP_;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75382,G__75383) : f.call(null,G__75382,G__75383));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not(obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__75416 = list_thing;if(G__75416)
{var bit__4300__auto__ = (G__75416.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__75416.cljs$core$ISeqable$))
{return true;
} else
{if((!G__75416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75416);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75416);
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
{if((function (){var G__75417 = content;if(G__75417)
{var bit__4300__auto__ = (G__75417.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__75417.cljs$core$ISeqable$))
{return true;
} else
{if((!G__75417.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75417);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75417);
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
{if((function (){var G__75418 = content;if(G__75418)
{var bit__4300__auto__ = (G__75418.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__75418.cljs$core$ISeqable$))
{return true;
} else
{if((!G__75418.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75418);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__75418);
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
