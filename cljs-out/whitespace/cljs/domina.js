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
var opt_wrapper_37960 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37961,table_section_wrapper_37961,opt_wrapper_37960,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37962,table_section_wrapper_37961,cell_wrapper_37962,opt_wrapper_37960,table_section_wrapper_37961,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37961]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37967 = cljs.core.seq.call(null,tbody);var chunk__37968 = null;var count__37969 = 0;var i__37970 = 0;while(true){
if((i__37970 < count__37969))
{var child = cljs.core._nth.call(null,chunk__37968,i__37970);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37971 = seq__37967;
var G__37972 = chunk__37968;
var G__37973 = count__37969;
var G__37974 = (i__37970 + 1);
seq__37967 = G__37971;
chunk__37968 = G__37972;
count__37969 = G__37973;
i__37970 = G__37974;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37967);if(temp__4092__auto__)
{var seq__37967__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37967__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37967__$1);{
var G__37975 = cljs.core.chunk_rest.call(null,seq__37967__$1);
var G__37976 = c__4148__auto__;
var G__37977 = cljs.core.count.call(null,c__4148__auto__);
var G__37978 = 0;
seq__37967 = G__37975;
chunk__37968 = G__37976;
count__37969 = G__37977;
i__37970 = G__37978;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37967__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37979 = cljs.core.next.call(null,seq__37967__$1);
var G__37980 = null;
var G__37981 = 0;
var G__37982 = 0;
seq__37967 = G__37979;
chunk__37968 = G__37980;
count__37969 = G__37981;
i__37970 = G__37982;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37984 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37984,0,null);var start_wrap = cljs.core.nth.call(null,vec__37984,1,null);var end_wrap = cljs.core.nth.call(null,vec__37984,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37985 = wrapper.lastChild;
var G__37986 = (level - 1);
wrapper = G__37985;
level = G__37986;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj37988 = {};return obj37988;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__37989){
var mesg = cljs.core.seq(arglist__37989);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__37990){
var mesg = cljs.core.seq(arglist__37990);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__37991){
var contents = cljs.core.seq(arglist__37991);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37992_SHARP_){return p1__37992_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37993_SHARP_,p2__37994_SHARP_){return goog.dom.insertChildAt(p1__37993_SHARP_,p2__37994_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37996_SHARP_,p2__37995_SHARP_){return goog.dom.insertSiblingBefore(p2__37995_SHARP_,p1__37996_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37998_SHARP_,p2__37997_SHARP_){return goog.dom.insertSiblingAfter(p2__37997_SHARP_,p1__37998_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38000_SHARP_,p2__37999_SHARP_){return goog.dom.replaceNode(p2__37999_SHARP_,p1__38000_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__38005_38009 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38006_38010 = null;var count__38007_38011 = 0;var i__38008_38012 = 0;while(true){
if((i__38008_38012 < count__38007_38011))
{var n_38013 = cljs.core._nth.call(null,chunk__38006_38010,i__38008_38012);goog.style.setStyle(n_38013,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38014 = seq__38005_38009;
var G__38015 = chunk__38006_38010;
var G__38016 = count__38007_38011;
var G__38017 = (i__38008_38012 + 1);
seq__38005_38009 = G__38014;
chunk__38006_38010 = G__38015;
count__38007_38011 = G__38016;
i__38008_38012 = G__38017;
continue;
}
} else
{var temp__4092__auto___38018 = cljs.core.seq.call(null,seq__38005_38009);if(temp__4092__auto___38018)
{var seq__38005_38019__$1 = temp__4092__auto___38018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38005_38019__$1))
{var c__4148__auto___38020 = cljs.core.chunk_first.call(null,seq__38005_38019__$1);{
var G__38021 = cljs.core.chunk_rest.call(null,seq__38005_38019__$1);
var G__38022 = c__4148__auto___38020;
var G__38023 = cljs.core.count.call(null,c__4148__auto___38020);
var G__38024 = 0;
seq__38005_38009 = G__38021;
chunk__38006_38010 = G__38022;
count__38007_38011 = G__38023;
i__38008_38012 = G__38024;
continue;
}
} else
{var n_38025 = cljs.core.first.call(null,seq__38005_38019__$1);goog.style.setStyle(n_38025,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38026 = cljs.core.next.call(null,seq__38005_38019__$1);
var G__38027 = null;
var G__38028 = 0;
var G__38029 = 0;
seq__38005_38009 = G__38026;
chunk__38006_38010 = G__38027;
count__38007_38011 = G__38028;
i__38008_38012 = G__38029;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38030){
var content = cljs.core.first(arglist__38030);
arglist__38030 = cljs.core.next(arglist__38030);
var name = cljs.core.first(arglist__38030);
var value = cljs.core.rest(arglist__38030);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38035_38039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38036_38040 = null;var count__38037_38041 = 0;var i__38038_38042 = 0;while(true){
if((i__38038_38042 < count__38037_38041))
{var n_38043 = cljs.core._nth.call(null,chunk__38036_38040,i__38038_38042);n_38043.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38044 = seq__38035_38039;
var G__38045 = chunk__38036_38040;
var G__38046 = count__38037_38041;
var G__38047 = (i__38038_38042 + 1);
seq__38035_38039 = G__38044;
chunk__38036_38040 = G__38045;
count__38037_38041 = G__38046;
i__38038_38042 = G__38047;
continue;
}
} else
{var temp__4092__auto___38048 = cljs.core.seq.call(null,seq__38035_38039);if(temp__4092__auto___38048)
{var seq__38035_38049__$1 = temp__4092__auto___38048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38035_38049__$1))
{var c__4148__auto___38050 = cljs.core.chunk_first.call(null,seq__38035_38049__$1);{
var G__38051 = cljs.core.chunk_rest.call(null,seq__38035_38049__$1);
var G__38052 = c__4148__auto___38050;
var G__38053 = cljs.core.count.call(null,c__4148__auto___38050);
var G__38054 = 0;
seq__38035_38039 = G__38051;
chunk__38036_38040 = G__38052;
count__38037_38041 = G__38053;
i__38038_38042 = G__38054;
continue;
}
} else
{var n_38055 = cljs.core.first.call(null,seq__38035_38049__$1);n_38055.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38056 = cljs.core.next.call(null,seq__38035_38049__$1);
var G__38057 = null;
var G__38058 = 0;
var G__38059 = 0;
seq__38035_38039 = G__38056;
chunk__38036_38040 = G__38057;
count__38037_38041 = G__38058;
i__38038_38042 = G__38059;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38060){
var content = cljs.core.first(arglist__38060);
arglist__38060 = cljs.core.next(arglist__38060);
var name = cljs.core.first(arglist__38060);
var value = cljs.core.rest(arglist__38060);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38065_38069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38066_38070 = null;var count__38067_38071 = 0;var i__38068_38072 = 0;while(true){
if((i__38068_38072 < count__38067_38071))
{var n_38073 = cljs.core._nth.call(null,chunk__38066_38070,i__38068_38072);n_38073.removeAttribute(cljs.core.name.call(null,name));
{
var G__38074 = seq__38065_38069;
var G__38075 = chunk__38066_38070;
var G__38076 = count__38067_38071;
var G__38077 = (i__38068_38072 + 1);
seq__38065_38069 = G__38074;
chunk__38066_38070 = G__38075;
count__38067_38071 = G__38076;
i__38068_38072 = G__38077;
continue;
}
} else
{var temp__4092__auto___38078 = cljs.core.seq.call(null,seq__38065_38069);if(temp__4092__auto___38078)
{var seq__38065_38079__$1 = temp__4092__auto___38078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38065_38079__$1))
{var c__4148__auto___38080 = cljs.core.chunk_first.call(null,seq__38065_38079__$1);{
var G__38081 = cljs.core.chunk_rest.call(null,seq__38065_38079__$1);
var G__38082 = c__4148__auto___38080;
var G__38083 = cljs.core.count.call(null,c__4148__auto___38080);
var G__38084 = 0;
seq__38065_38069 = G__38081;
chunk__38066_38070 = G__38082;
count__38067_38071 = G__38083;
i__38068_38072 = G__38084;
continue;
}
} else
{var n_38085 = cljs.core.first.call(null,seq__38065_38079__$1);n_38085.removeAttribute(cljs.core.name.call(null,name));
{
var G__38086 = cljs.core.next.call(null,seq__38065_38079__$1);
var G__38087 = null;
var G__38088 = 0;
var G__38089 = 0;
seq__38065_38069 = G__38086;
chunk__38066_38070 = G__38087;
count__38067_38071 = G__38088;
i__38068_38072 = G__38089;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38091 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38091,0,null);var v = cljs.core.nth.call(null,vec__38091,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38092_SHARP_){var attr = attrs__$1.item(p1__38092_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38099_38105 = cljs.core.seq.call(null,styles);var chunk__38100_38106 = null;var count__38101_38107 = 0;var i__38102_38108 = 0;while(true){
if((i__38102_38108 < count__38101_38107))
{var vec__38103_38109 = cljs.core._nth.call(null,chunk__38100_38106,i__38102_38108);var name_38110 = cljs.core.nth.call(null,vec__38103_38109,0,null);var value_38111 = cljs.core.nth.call(null,vec__38103_38109,1,null);domina.set_style_BANG_.call(null,content,name_38110,value_38111);
{
var G__38112 = seq__38099_38105;
var G__38113 = chunk__38100_38106;
var G__38114 = count__38101_38107;
var G__38115 = (i__38102_38108 + 1);
seq__38099_38105 = G__38112;
chunk__38100_38106 = G__38113;
count__38101_38107 = G__38114;
i__38102_38108 = G__38115;
continue;
}
} else
{var temp__4092__auto___38116 = cljs.core.seq.call(null,seq__38099_38105);if(temp__4092__auto___38116)
{var seq__38099_38117__$1 = temp__4092__auto___38116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38099_38117__$1))
{var c__4148__auto___38118 = cljs.core.chunk_first.call(null,seq__38099_38117__$1);{
var G__38119 = cljs.core.chunk_rest.call(null,seq__38099_38117__$1);
var G__38120 = c__4148__auto___38118;
var G__38121 = cljs.core.count.call(null,c__4148__auto___38118);
var G__38122 = 0;
seq__38099_38105 = G__38119;
chunk__38100_38106 = G__38120;
count__38101_38107 = G__38121;
i__38102_38108 = G__38122;
continue;
}
} else
{var vec__38104_38123 = cljs.core.first.call(null,seq__38099_38117__$1);var name_38124 = cljs.core.nth.call(null,vec__38104_38123,0,null);var value_38125 = cljs.core.nth.call(null,vec__38104_38123,1,null);domina.set_style_BANG_.call(null,content,name_38124,value_38125);
{
var G__38126 = cljs.core.next.call(null,seq__38099_38117__$1);
var G__38127 = null;
var G__38128 = 0;
var G__38129 = 0;
seq__38099_38105 = G__38126;
chunk__38100_38106 = G__38127;
count__38101_38107 = G__38128;
i__38102_38108 = G__38129;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38136_38142 = cljs.core.seq.call(null,attrs);var chunk__38137_38143 = null;var count__38138_38144 = 0;var i__38139_38145 = 0;while(true){
if((i__38139_38145 < count__38138_38144))
{var vec__38140_38146 = cljs.core._nth.call(null,chunk__38137_38143,i__38139_38145);var name_38147 = cljs.core.nth.call(null,vec__38140_38146,0,null);var value_38148 = cljs.core.nth.call(null,vec__38140_38146,1,null);domina.set_attr_BANG_.call(null,content,name_38147,value_38148);
{
var G__38149 = seq__38136_38142;
var G__38150 = chunk__38137_38143;
var G__38151 = count__38138_38144;
var G__38152 = (i__38139_38145 + 1);
seq__38136_38142 = G__38149;
chunk__38137_38143 = G__38150;
count__38138_38144 = G__38151;
i__38139_38145 = G__38152;
continue;
}
} else
{var temp__4092__auto___38153 = cljs.core.seq.call(null,seq__38136_38142);if(temp__4092__auto___38153)
{var seq__38136_38154__$1 = temp__4092__auto___38153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38136_38154__$1))
{var c__4148__auto___38155 = cljs.core.chunk_first.call(null,seq__38136_38154__$1);{
var G__38156 = cljs.core.chunk_rest.call(null,seq__38136_38154__$1);
var G__38157 = c__4148__auto___38155;
var G__38158 = cljs.core.count.call(null,c__4148__auto___38155);
var G__38159 = 0;
seq__38136_38142 = G__38156;
chunk__38137_38143 = G__38157;
count__38138_38144 = G__38158;
i__38139_38145 = G__38159;
continue;
}
} else
{var vec__38141_38160 = cljs.core.first.call(null,seq__38136_38154__$1);var name_38161 = cljs.core.nth.call(null,vec__38141_38160,0,null);var value_38162 = cljs.core.nth.call(null,vec__38141_38160,1,null);domina.set_attr_BANG_.call(null,content,name_38161,value_38162);
{
var G__38163 = cljs.core.next.call(null,seq__38136_38154__$1);
var G__38164 = null;
var G__38165 = 0;
var G__38166 = 0;
seq__38136_38142 = G__38163;
chunk__38137_38143 = G__38164;
count__38138_38144 = G__38165;
i__38139_38145 = G__38166;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38171_38175 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38172_38176 = null;var count__38173_38177 = 0;var i__38174_38178 = 0;while(true){
if((i__38174_38178 < count__38173_38177))
{var node_38179 = cljs.core._nth.call(null,chunk__38172_38176,i__38174_38178);goog.dom.classes.add(node_38179,class$);
{
var G__38180 = seq__38171_38175;
var G__38181 = chunk__38172_38176;
var G__38182 = count__38173_38177;
var G__38183 = (i__38174_38178 + 1);
seq__38171_38175 = G__38180;
chunk__38172_38176 = G__38181;
count__38173_38177 = G__38182;
i__38174_38178 = G__38183;
continue;
}
} else
{var temp__4092__auto___38184 = cljs.core.seq.call(null,seq__38171_38175);if(temp__4092__auto___38184)
{var seq__38171_38185__$1 = temp__4092__auto___38184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38171_38185__$1))
{var c__4148__auto___38186 = cljs.core.chunk_first.call(null,seq__38171_38185__$1);{
var G__38187 = cljs.core.chunk_rest.call(null,seq__38171_38185__$1);
var G__38188 = c__4148__auto___38186;
var G__38189 = cljs.core.count.call(null,c__4148__auto___38186);
var G__38190 = 0;
seq__38171_38175 = G__38187;
chunk__38172_38176 = G__38188;
count__38173_38177 = G__38189;
i__38174_38178 = G__38190;
continue;
}
} else
{var node_38191 = cljs.core.first.call(null,seq__38171_38185__$1);goog.dom.classes.add(node_38191,class$);
{
var G__38192 = cljs.core.next.call(null,seq__38171_38185__$1);
var G__38193 = null;
var G__38194 = 0;
var G__38195 = 0;
seq__38171_38175 = G__38192;
chunk__38172_38176 = G__38193;
count__38173_38177 = G__38194;
i__38174_38178 = G__38195;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38200_38204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38201_38205 = null;var count__38202_38206 = 0;var i__38203_38207 = 0;while(true){
if((i__38203_38207 < count__38202_38206))
{var node_38208 = cljs.core._nth.call(null,chunk__38201_38205,i__38203_38207);goog.dom.classes.remove(node_38208,class$);
{
var G__38209 = seq__38200_38204;
var G__38210 = chunk__38201_38205;
var G__38211 = count__38202_38206;
var G__38212 = (i__38203_38207 + 1);
seq__38200_38204 = G__38209;
chunk__38201_38205 = G__38210;
count__38202_38206 = G__38211;
i__38203_38207 = G__38212;
continue;
}
} else
{var temp__4092__auto___38213 = cljs.core.seq.call(null,seq__38200_38204);if(temp__4092__auto___38213)
{var seq__38200_38214__$1 = temp__4092__auto___38213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38200_38214__$1))
{var c__4148__auto___38215 = cljs.core.chunk_first.call(null,seq__38200_38214__$1);{
var G__38216 = cljs.core.chunk_rest.call(null,seq__38200_38214__$1);
var G__38217 = c__4148__auto___38215;
var G__38218 = cljs.core.count.call(null,c__4148__auto___38215);
var G__38219 = 0;
seq__38200_38204 = G__38216;
chunk__38201_38205 = G__38217;
count__38202_38206 = G__38218;
i__38203_38207 = G__38219;
continue;
}
} else
{var node_38220 = cljs.core.first.call(null,seq__38200_38214__$1);goog.dom.classes.remove(node_38220,class$);
{
var G__38221 = cljs.core.next.call(null,seq__38200_38214__$1);
var G__38222 = null;
var G__38223 = 0;
var G__38224 = 0;
seq__38200_38204 = G__38221;
chunk__38201_38205 = G__38222;
count__38202_38206 = G__38223;
i__38203_38207 = G__38224;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38229_38233 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38230_38234 = null;var count__38231_38235 = 0;var i__38232_38236 = 0;while(true){
if((i__38232_38236 < count__38231_38235))
{var node_38237 = cljs.core._nth.call(null,chunk__38230_38234,i__38232_38236);goog.dom.classes.toggle(node_38237,class$);
{
var G__38238 = seq__38229_38233;
var G__38239 = chunk__38230_38234;
var G__38240 = count__38231_38235;
var G__38241 = (i__38232_38236 + 1);
seq__38229_38233 = G__38238;
chunk__38230_38234 = G__38239;
count__38231_38235 = G__38240;
i__38232_38236 = G__38241;
continue;
}
} else
{var temp__4092__auto___38242 = cljs.core.seq.call(null,seq__38229_38233);if(temp__4092__auto___38242)
{var seq__38229_38243__$1 = temp__4092__auto___38242;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38229_38243__$1))
{var c__4148__auto___38244 = cljs.core.chunk_first.call(null,seq__38229_38243__$1);{
var G__38245 = cljs.core.chunk_rest.call(null,seq__38229_38243__$1);
var G__38246 = c__4148__auto___38244;
var G__38247 = cljs.core.count.call(null,c__4148__auto___38244);
var G__38248 = 0;
seq__38229_38233 = G__38245;
chunk__38230_38234 = G__38246;
count__38231_38235 = G__38247;
i__38232_38236 = G__38248;
continue;
}
} else
{var node_38249 = cljs.core.first.call(null,seq__38229_38243__$1);goog.dom.classes.toggle(node_38249,class$);
{
var G__38250 = cljs.core.next.call(null,seq__38229_38243__$1);
var G__38251 = null;
var G__38252 = 0;
var G__38253 = 0;
seq__38229_38233 = G__38250;
chunk__38230_38234 = G__38251;
count__38231_38235 = G__38252;
i__38232_38236 = G__38253;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38262__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38258_38263 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38259_38264 = null;var count__38260_38265 = 0;var i__38261_38266 = 0;while(true){
if((i__38261_38266 < count__38260_38265))
{var node_38267 = cljs.core._nth.call(null,chunk__38259_38264,i__38261_38266);goog.dom.classes.set(node_38267,classes_38262__$1);
{
var G__38268 = seq__38258_38263;
var G__38269 = chunk__38259_38264;
var G__38270 = count__38260_38265;
var G__38271 = (i__38261_38266 + 1);
seq__38258_38263 = G__38268;
chunk__38259_38264 = G__38269;
count__38260_38265 = G__38270;
i__38261_38266 = G__38271;
continue;
}
} else
{var temp__4092__auto___38272 = cljs.core.seq.call(null,seq__38258_38263);if(temp__4092__auto___38272)
{var seq__38258_38273__$1 = temp__4092__auto___38272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38258_38273__$1))
{var c__4148__auto___38274 = cljs.core.chunk_first.call(null,seq__38258_38273__$1);{
var G__38275 = cljs.core.chunk_rest.call(null,seq__38258_38273__$1);
var G__38276 = c__4148__auto___38274;
var G__38277 = cljs.core.count.call(null,c__4148__auto___38274);
var G__38278 = 0;
seq__38258_38263 = G__38275;
chunk__38259_38264 = G__38276;
count__38260_38265 = G__38277;
i__38261_38266 = G__38278;
continue;
}
} else
{var node_38279 = cljs.core.first.call(null,seq__38258_38273__$1);goog.dom.classes.set(node_38279,classes_38262__$1);
{
var G__38280 = cljs.core.next.call(null,seq__38258_38273__$1);
var G__38281 = null;
var G__38282 = 0;
var G__38283 = 0;
seq__38258_38263 = G__38280;
chunk__38259_38264 = G__38281;
count__38260_38265 = G__38282;
i__38261_38266 = G__38283;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38288_38292 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38289_38293 = null;var count__38290_38294 = 0;var i__38291_38295 = 0;while(true){
if((i__38291_38295 < count__38290_38294))
{var node_38296 = cljs.core._nth.call(null,chunk__38289_38293,i__38291_38295);goog.dom.setTextContent(node_38296,value);
{
var G__38297 = seq__38288_38292;
var G__38298 = chunk__38289_38293;
var G__38299 = count__38290_38294;
var G__38300 = (i__38291_38295 + 1);
seq__38288_38292 = G__38297;
chunk__38289_38293 = G__38298;
count__38290_38294 = G__38299;
i__38291_38295 = G__38300;
continue;
}
} else
{var temp__4092__auto___38301 = cljs.core.seq.call(null,seq__38288_38292);if(temp__4092__auto___38301)
{var seq__38288_38302__$1 = temp__4092__auto___38301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38288_38302__$1))
{var c__4148__auto___38303 = cljs.core.chunk_first.call(null,seq__38288_38302__$1);{
var G__38304 = cljs.core.chunk_rest.call(null,seq__38288_38302__$1);
var G__38305 = c__4148__auto___38303;
var G__38306 = cljs.core.count.call(null,c__4148__auto___38303);
var G__38307 = 0;
seq__38288_38292 = G__38304;
chunk__38289_38293 = G__38305;
count__38290_38294 = G__38306;
i__38291_38295 = G__38307;
continue;
}
} else
{var node_38308 = cljs.core.first.call(null,seq__38288_38302__$1);goog.dom.setTextContent(node_38308,value);
{
var G__38309 = cljs.core.next.call(null,seq__38288_38302__$1);
var G__38310 = null;
var G__38311 = 0;
var G__38312 = 0;
seq__38288_38292 = G__38309;
chunk__38289_38293 = G__38310;
count__38290_38294 = G__38311;
i__38291_38295 = G__38312;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38317_38321 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38318_38322 = null;var count__38319_38323 = 0;var i__38320_38324 = 0;while(true){
if((i__38320_38324 < count__38319_38323))
{var node_38325 = cljs.core._nth.call(null,chunk__38318_38322,i__38320_38324);goog.dom.forms.setValue(node_38325,value);
{
var G__38326 = seq__38317_38321;
var G__38327 = chunk__38318_38322;
var G__38328 = count__38319_38323;
var G__38329 = (i__38320_38324 + 1);
seq__38317_38321 = G__38326;
chunk__38318_38322 = G__38327;
count__38319_38323 = G__38328;
i__38320_38324 = G__38329;
continue;
}
} else
{var temp__4092__auto___38330 = cljs.core.seq.call(null,seq__38317_38321);if(temp__4092__auto___38330)
{var seq__38317_38331__$1 = temp__4092__auto___38330;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38317_38331__$1))
{var c__4148__auto___38332 = cljs.core.chunk_first.call(null,seq__38317_38331__$1);{
var G__38333 = cljs.core.chunk_rest.call(null,seq__38317_38331__$1);
var G__38334 = c__4148__auto___38332;
var G__38335 = cljs.core.count.call(null,c__4148__auto___38332);
var G__38336 = 0;
seq__38317_38321 = G__38333;
chunk__38318_38322 = G__38334;
count__38319_38323 = G__38335;
i__38320_38324 = G__38336;
continue;
}
} else
{var node_38337 = cljs.core.first.call(null,seq__38317_38331__$1);goog.dom.forms.setValue(node_38337,value);
{
var G__38338 = cljs.core.next.call(null,seq__38317_38331__$1);
var G__38339 = null;
var G__38340 = 0;
var G__38341 = 0;
seq__38317_38321 = G__38338;
chunk__38318_38322 = G__38339;
count__38319_38323 = G__38340;
i__38320_38324 = G__38341;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_38352 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38348_38353 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38349_38354 = null;var count__38350_38355 = 0;var i__38351_38356 = 0;while(true){
if((i__38351_38356 < count__38350_38355))
{var node_38357 = cljs.core._nth.call(null,chunk__38349_38354,i__38351_38356);node_38357.innerHTML = value_38352;
{
var G__38358 = seq__38348_38353;
var G__38359 = chunk__38349_38354;
var G__38360 = count__38350_38355;
var G__38361 = (i__38351_38356 + 1);
seq__38348_38353 = G__38358;
chunk__38349_38354 = G__38359;
count__38350_38355 = G__38360;
i__38351_38356 = G__38361;
continue;
}
} else
{var temp__4092__auto___38362 = cljs.core.seq.call(null,seq__38348_38353);if(temp__4092__auto___38362)
{var seq__38348_38363__$1 = temp__4092__auto___38362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38348_38363__$1))
{var c__4148__auto___38364 = cljs.core.chunk_first.call(null,seq__38348_38363__$1);{
var G__38365 = cljs.core.chunk_rest.call(null,seq__38348_38363__$1);
var G__38366 = c__4148__auto___38364;
var G__38367 = cljs.core.count.call(null,c__4148__auto___38364);
var G__38368 = 0;
seq__38348_38353 = G__38365;
chunk__38349_38354 = G__38366;
count__38350_38355 = G__38367;
i__38351_38356 = G__38368;
continue;
}
} else
{var node_38369 = cljs.core.first.call(null,seq__38348_38363__$1);node_38369.innerHTML = value_38352;
{
var G__38370 = cljs.core.next.call(null,seq__38348_38363__$1);
var G__38371 = null;
var G__38372 = 0;
var G__38373 = 0;
seq__38348_38353 = G__38370;
chunk__38349_38354 = G__38371;
count__38350_38355 = G__38372;
i__38351_38356 = G__38373;
continue;
}
}
} else
{}
}
break;
}
}catch (e38347){if((e38347 instanceof Error))
{var e_38374 = e38347;domina.replace_children_BANG_.call(null,content,value_38352);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38347;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38381_38385 = cljs.core.seq.call(null,children);var chunk__38382_38386 = null;var count__38383_38387 = 0;var i__38384_38388 = 0;while(true){
if((i__38384_38388 < count__38383_38387))
{var child_38389 = cljs.core._nth.call(null,chunk__38382_38386,i__38384_38388);frag.appendChild(child_38389);
{
var G__38390 = seq__38381_38385;
var G__38391 = chunk__38382_38386;
var G__38392 = count__38383_38387;
var G__38393 = (i__38384_38388 + 1);
seq__38381_38385 = G__38390;
chunk__38382_38386 = G__38391;
count__38383_38387 = G__38392;
i__38384_38388 = G__38393;
continue;
}
} else
{var temp__4092__auto___38394 = cljs.core.seq.call(null,seq__38381_38385);if(temp__4092__auto___38394)
{var seq__38381_38395__$1 = temp__4092__auto___38394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38381_38395__$1))
{var c__4148__auto___38396 = cljs.core.chunk_first.call(null,seq__38381_38395__$1);{
var G__38397 = cljs.core.chunk_rest.call(null,seq__38381_38395__$1);
var G__38398 = c__4148__auto___38396;
var G__38399 = cljs.core.count.call(null,c__4148__auto___38396);
var G__38400 = 0;
seq__38381_38385 = G__38397;
chunk__38382_38386 = G__38398;
count__38383_38387 = G__38399;
i__38384_38388 = G__38400;
continue;
}
} else
{var child_38401 = cljs.core.first.call(null,seq__38381_38395__$1);frag.appendChild(child_38401);
{
var G__38402 = cljs.core.next.call(null,seq__38381_38395__$1);
var G__38403 = null;
var G__38404 = 0;
var G__38405 = 0;
seq__38381_38385 = G__38402;
chunk__38382_38386 = G__38403;
count__38383_38387 = G__38404;
i__38384_38388 = G__38405;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38375_SHARP_,p2__38376_SHARP_){return f.call(null,p1__38375_SHARP_,p2__38376_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__38407 = list_thing;if(G__38407)
{var bit__4050__auto__ = (G__38407.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38407.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38407);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38407);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__38408 = content;if(G__38408)
{var bit__4050__auto__ = (G__38408.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38408.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38408.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38408);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38408);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__38409 = content;if(G__38409)
{var bit__4050__auto__ = (G__38409.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38409.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38409);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38409);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
