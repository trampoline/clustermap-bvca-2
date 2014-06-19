// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_17882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_17884,opt_wrapper_17882,table_section_wrapper_17883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_17882,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_17883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_17883,cell_wrapper_17884,table_section_wrapper_17883,table_section_wrapper_17883]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17889 = cljs.core.seq.call(null,tbody);var chunk__17890 = null;var count__17891 = 0;var i__17892 = 0;while(true){
if((i__17892 < count__17891))
{var child = cljs.core._nth.call(null,chunk__17890,i__17892);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17893 = seq__17889;
var G__17894 = chunk__17890;
var G__17895 = count__17891;
var G__17896 = (i__17892 + 1);
seq__17889 = G__17893;
chunk__17890 = G__17894;
count__17891 = G__17895;
i__17892 = G__17896;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17889);if(temp__4126__auto__)
{var seq__17889__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17889__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__17889__$1);{
var G__17897 = cljs.core.chunk_rest.call(null,seq__17889__$1);
var G__17898 = c__4295__auto__;
var G__17899 = cljs.core.count.call(null,c__4295__auto__);
var G__17900 = 0;
seq__17889 = G__17897;
chunk__17890 = G__17898;
count__17891 = G__17899;
i__17892 = G__17900;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17889__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17901 = cljs.core.next.call(null,seq__17889__$1);
var G__17902 = null;
var G__17903 = 0;
var G__17904 = 0;
seq__17889 = G__17901;
chunk__17890 = G__17902;
count__17891 = G__17903;
i__17892 = G__17904;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__17906 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17906,0,null);var start_wrap = cljs.core.nth.call(null,vec__17906,1,null);var end_wrap = cljs.core.nth.call(null,vec__17906,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17907 = wrapper.lastChild;
var G__17908 = (level - 1);
wrapper = G__17907;
level = G__17908;
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
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
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
domina.DomContent = (function (){var obj17910 = {};return obj17910;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__17911){
var mesg = cljs.core.seq(arglist__17911);
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
log.cljs$lang$applyTo = (function (arglist__17912){
var mesg = cljs.core.seq(arglist__17912);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17913){
var contents = cljs.core.seq(arglist__17913);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17914_SHARP_){return p1__17914_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17915_SHARP_,p2__17916_SHARP_){return goog.dom.insertChildAt(p1__17915_SHARP_,p2__17916_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17918_SHARP_,p2__17917_SHARP_){return goog.dom.insertSiblingBefore(p2__17917_SHARP_,p1__17918_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17920_SHARP_,p2__17919_SHARP_){return goog.dom.insertSiblingAfter(p2__17919_SHARP_,p1__17920_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17922_SHARP_,p2__17921_SHARP_){return goog.dom.replaceNode(p2__17921_SHARP_,p1__17922_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17927_17931 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17928_17932 = null;var count__17929_17933 = 0;var i__17930_17934 = 0;while(true){
if((i__17930_17934 < count__17929_17933))
{var n_17935 = cljs.core._nth.call(null,chunk__17928_17932,i__17930_17934);goog.style.setStyle(n_17935,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17936 = seq__17927_17931;
var G__17937 = chunk__17928_17932;
var G__17938 = count__17929_17933;
var G__17939 = (i__17930_17934 + 1);
seq__17927_17931 = G__17936;
chunk__17928_17932 = G__17937;
count__17929_17933 = G__17938;
i__17930_17934 = G__17939;
continue;
}
} else
{var temp__4126__auto___17940 = cljs.core.seq.call(null,seq__17927_17931);if(temp__4126__auto___17940)
{var seq__17927_17941__$1 = temp__4126__auto___17940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17927_17941__$1))
{var c__4295__auto___17942 = cljs.core.chunk_first.call(null,seq__17927_17941__$1);{
var G__17943 = cljs.core.chunk_rest.call(null,seq__17927_17941__$1);
var G__17944 = c__4295__auto___17942;
var G__17945 = cljs.core.count.call(null,c__4295__auto___17942);
var G__17946 = 0;
seq__17927_17931 = G__17943;
chunk__17928_17932 = G__17944;
count__17929_17933 = G__17945;
i__17930_17934 = G__17946;
continue;
}
} else
{var n_17947 = cljs.core.first.call(null,seq__17927_17941__$1);goog.style.setStyle(n_17947,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17948 = cljs.core.next.call(null,seq__17927_17941__$1);
var G__17949 = null;
var G__17950 = 0;
var G__17951 = 0;
seq__17927_17931 = G__17948;
chunk__17928_17932 = G__17949;
count__17929_17933 = G__17950;
i__17930_17934 = G__17951;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17952){
var content = cljs.core.first(arglist__17952);
arglist__17952 = cljs.core.next(arglist__17952);
var name = cljs.core.first(arglist__17952);
var value = cljs.core.rest(arglist__17952);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17957_17961 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17958_17962 = null;var count__17959_17963 = 0;var i__17960_17964 = 0;while(true){
if((i__17960_17964 < count__17959_17963))
{var n_17965 = cljs.core._nth.call(null,chunk__17958_17962,i__17960_17964);n_17965.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17966 = seq__17957_17961;
var G__17967 = chunk__17958_17962;
var G__17968 = count__17959_17963;
var G__17969 = (i__17960_17964 + 1);
seq__17957_17961 = G__17966;
chunk__17958_17962 = G__17967;
count__17959_17963 = G__17968;
i__17960_17964 = G__17969;
continue;
}
} else
{var temp__4126__auto___17970 = cljs.core.seq.call(null,seq__17957_17961);if(temp__4126__auto___17970)
{var seq__17957_17971__$1 = temp__4126__auto___17970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17957_17971__$1))
{var c__4295__auto___17972 = cljs.core.chunk_first.call(null,seq__17957_17971__$1);{
var G__17973 = cljs.core.chunk_rest.call(null,seq__17957_17971__$1);
var G__17974 = c__4295__auto___17972;
var G__17975 = cljs.core.count.call(null,c__4295__auto___17972);
var G__17976 = 0;
seq__17957_17961 = G__17973;
chunk__17958_17962 = G__17974;
count__17959_17963 = G__17975;
i__17960_17964 = G__17976;
continue;
}
} else
{var n_17977 = cljs.core.first.call(null,seq__17957_17971__$1);n_17977.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17978 = cljs.core.next.call(null,seq__17957_17971__$1);
var G__17979 = null;
var G__17980 = 0;
var G__17981 = 0;
seq__17957_17961 = G__17978;
chunk__17958_17962 = G__17979;
count__17959_17963 = G__17980;
i__17960_17964 = G__17981;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17982){
var content = cljs.core.first(arglist__17982);
arglist__17982 = cljs.core.next(arglist__17982);
var name = cljs.core.first(arglist__17982);
var value = cljs.core.rest(arglist__17982);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17987_17991 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17988_17992 = null;var count__17989_17993 = 0;var i__17990_17994 = 0;while(true){
if((i__17990_17994 < count__17989_17993))
{var n_17995 = cljs.core._nth.call(null,chunk__17988_17992,i__17990_17994);n_17995.removeAttribute(cljs.core.name.call(null,name));
{
var G__17996 = seq__17987_17991;
var G__17997 = chunk__17988_17992;
var G__17998 = count__17989_17993;
var G__17999 = (i__17990_17994 + 1);
seq__17987_17991 = G__17996;
chunk__17988_17992 = G__17997;
count__17989_17993 = G__17998;
i__17990_17994 = G__17999;
continue;
}
} else
{var temp__4126__auto___18000 = cljs.core.seq.call(null,seq__17987_17991);if(temp__4126__auto___18000)
{var seq__17987_18001__$1 = temp__4126__auto___18000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17987_18001__$1))
{var c__4295__auto___18002 = cljs.core.chunk_first.call(null,seq__17987_18001__$1);{
var G__18003 = cljs.core.chunk_rest.call(null,seq__17987_18001__$1);
var G__18004 = c__4295__auto___18002;
var G__18005 = cljs.core.count.call(null,c__4295__auto___18002);
var G__18006 = 0;
seq__17987_17991 = G__18003;
chunk__17988_17992 = G__18004;
count__17989_17993 = G__18005;
i__17990_17994 = G__18006;
continue;
}
} else
{var n_18007 = cljs.core.first.call(null,seq__17987_18001__$1);n_18007.removeAttribute(cljs.core.name.call(null,name));
{
var G__18008 = cljs.core.next.call(null,seq__17987_18001__$1);
var G__18009 = null;
var G__18010 = 0;
var G__18011 = 0;
seq__17987_17991 = G__18008;
chunk__17988_17992 = G__18009;
count__17989_17993 = G__18010;
i__17990_17994 = G__18011;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18013 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18013,0,null);var v = cljs.core.nth.call(null,vec__18013,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__18014_SHARP_){var attr = attrs__$1.item(p1__18014_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18021_18027 = cljs.core.seq.call(null,styles);var chunk__18022_18028 = null;var count__18023_18029 = 0;var i__18024_18030 = 0;while(true){
if((i__18024_18030 < count__18023_18029))
{var vec__18025_18031 = cljs.core._nth.call(null,chunk__18022_18028,i__18024_18030);var name_18032 = cljs.core.nth.call(null,vec__18025_18031,0,null);var value_18033 = cljs.core.nth.call(null,vec__18025_18031,1,null);domina.set_style_BANG_.call(null,content,name_18032,value_18033);
{
var G__18034 = seq__18021_18027;
var G__18035 = chunk__18022_18028;
var G__18036 = count__18023_18029;
var G__18037 = (i__18024_18030 + 1);
seq__18021_18027 = G__18034;
chunk__18022_18028 = G__18035;
count__18023_18029 = G__18036;
i__18024_18030 = G__18037;
continue;
}
} else
{var temp__4126__auto___18038 = cljs.core.seq.call(null,seq__18021_18027);if(temp__4126__auto___18038)
{var seq__18021_18039__$1 = temp__4126__auto___18038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18021_18039__$1))
{var c__4295__auto___18040 = cljs.core.chunk_first.call(null,seq__18021_18039__$1);{
var G__18041 = cljs.core.chunk_rest.call(null,seq__18021_18039__$1);
var G__18042 = c__4295__auto___18040;
var G__18043 = cljs.core.count.call(null,c__4295__auto___18040);
var G__18044 = 0;
seq__18021_18027 = G__18041;
chunk__18022_18028 = G__18042;
count__18023_18029 = G__18043;
i__18024_18030 = G__18044;
continue;
}
} else
{var vec__18026_18045 = cljs.core.first.call(null,seq__18021_18039__$1);var name_18046 = cljs.core.nth.call(null,vec__18026_18045,0,null);var value_18047 = cljs.core.nth.call(null,vec__18026_18045,1,null);domina.set_style_BANG_.call(null,content,name_18046,value_18047);
{
var G__18048 = cljs.core.next.call(null,seq__18021_18039__$1);
var G__18049 = null;
var G__18050 = 0;
var G__18051 = 0;
seq__18021_18027 = G__18048;
chunk__18022_18028 = G__18049;
count__18023_18029 = G__18050;
i__18024_18030 = G__18051;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18058_18064 = cljs.core.seq.call(null,attrs);var chunk__18059_18065 = null;var count__18060_18066 = 0;var i__18061_18067 = 0;while(true){
if((i__18061_18067 < count__18060_18066))
{var vec__18062_18068 = cljs.core._nth.call(null,chunk__18059_18065,i__18061_18067);var name_18069 = cljs.core.nth.call(null,vec__18062_18068,0,null);var value_18070 = cljs.core.nth.call(null,vec__18062_18068,1,null);domina.set_attr_BANG_.call(null,content,name_18069,value_18070);
{
var G__18071 = seq__18058_18064;
var G__18072 = chunk__18059_18065;
var G__18073 = count__18060_18066;
var G__18074 = (i__18061_18067 + 1);
seq__18058_18064 = G__18071;
chunk__18059_18065 = G__18072;
count__18060_18066 = G__18073;
i__18061_18067 = G__18074;
continue;
}
} else
{var temp__4126__auto___18075 = cljs.core.seq.call(null,seq__18058_18064);if(temp__4126__auto___18075)
{var seq__18058_18076__$1 = temp__4126__auto___18075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18058_18076__$1))
{var c__4295__auto___18077 = cljs.core.chunk_first.call(null,seq__18058_18076__$1);{
var G__18078 = cljs.core.chunk_rest.call(null,seq__18058_18076__$1);
var G__18079 = c__4295__auto___18077;
var G__18080 = cljs.core.count.call(null,c__4295__auto___18077);
var G__18081 = 0;
seq__18058_18064 = G__18078;
chunk__18059_18065 = G__18079;
count__18060_18066 = G__18080;
i__18061_18067 = G__18081;
continue;
}
} else
{var vec__18063_18082 = cljs.core.first.call(null,seq__18058_18076__$1);var name_18083 = cljs.core.nth.call(null,vec__18063_18082,0,null);var value_18084 = cljs.core.nth.call(null,vec__18063_18082,1,null);domina.set_attr_BANG_.call(null,content,name_18083,value_18084);
{
var G__18085 = cljs.core.next.call(null,seq__18058_18076__$1);
var G__18086 = null;
var G__18087 = 0;
var G__18088 = 0;
seq__18058_18064 = G__18085;
chunk__18059_18065 = G__18086;
count__18060_18066 = G__18087;
i__18061_18067 = G__18088;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18093_18097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18094_18098 = null;var count__18095_18099 = 0;var i__18096_18100 = 0;while(true){
if((i__18096_18100 < count__18095_18099))
{var node_18101 = cljs.core._nth.call(null,chunk__18094_18098,i__18096_18100);goog.dom.classes.add(node_18101,class$);
{
var G__18102 = seq__18093_18097;
var G__18103 = chunk__18094_18098;
var G__18104 = count__18095_18099;
var G__18105 = (i__18096_18100 + 1);
seq__18093_18097 = G__18102;
chunk__18094_18098 = G__18103;
count__18095_18099 = G__18104;
i__18096_18100 = G__18105;
continue;
}
} else
{var temp__4126__auto___18106 = cljs.core.seq.call(null,seq__18093_18097);if(temp__4126__auto___18106)
{var seq__18093_18107__$1 = temp__4126__auto___18106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18093_18107__$1))
{var c__4295__auto___18108 = cljs.core.chunk_first.call(null,seq__18093_18107__$1);{
var G__18109 = cljs.core.chunk_rest.call(null,seq__18093_18107__$1);
var G__18110 = c__4295__auto___18108;
var G__18111 = cljs.core.count.call(null,c__4295__auto___18108);
var G__18112 = 0;
seq__18093_18097 = G__18109;
chunk__18094_18098 = G__18110;
count__18095_18099 = G__18111;
i__18096_18100 = G__18112;
continue;
}
} else
{var node_18113 = cljs.core.first.call(null,seq__18093_18107__$1);goog.dom.classes.add(node_18113,class$);
{
var G__18114 = cljs.core.next.call(null,seq__18093_18107__$1);
var G__18115 = null;
var G__18116 = 0;
var G__18117 = 0;
seq__18093_18097 = G__18114;
chunk__18094_18098 = G__18115;
count__18095_18099 = G__18116;
i__18096_18100 = G__18117;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18122_18126 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18123_18127 = null;var count__18124_18128 = 0;var i__18125_18129 = 0;while(true){
if((i__18125_18129 < count__18124_18128))
{var node_18130 = cljs.core._nth.call(null,chunk__18123_18127,i__18125_18129);goog.dom.classes.remove(node_18130,class$);
{
var G__18131 = seq__18122_18126;
var G__18132 = chunk__18123_18127;
var G__18133 = count__18124_18128;
var G__18134 = (i__18125_18129 + 1);
seq__18122_18126 = G__18131;
chunk__18123_18127 = G__18132;
count__18124_18128 = G__18133;
i__18125_18129 = G__18134;
continue;
}
} else
{var temp__4126__auto___18135 = cljs.core.seq.call(null,seq__18122_18126);if(temp__4126__auto___18135)
{var seq__18122_18136__$1 = temp__4126__auto___18135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18122_18136__$1))
{var c__4295__auto___18137 = cljs.core.chunk_first.call(null,seq__18122_18136__$1);{
var G__18138 = cljs.core.chunk_rest.call(null,seq__18122_18136__$1);
var G__18139 = c__4295__auto___18137;
var G__18140 = cljs.core.count.call(null,c__4295__auto___18137);
var G__18141 = 0;
seq__18122_18126 = G__18138;
chunk__18123_18127 = G__18139;
count__18124_18128 = G__18140;
i__18125_18129 = G__18141;
continue;
}
} else
{var node_18142 = cljs.core.first.call(null,seq__18122_18136__$1);goog.dom.classes.remove(node_18142,class$);
{
var G__18143 = cljs.core.next.call(null,seq__18122_18136__$1);
var G__18144 = null;
var G__18145 = 0;
var G__18146 = 0;
seq__18122_18126 = G__18143;
chunk__18123_18127 = G__18144;
count__18124_18128 = G__18145;
i__18125_18129 = G__18146;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18151_18155 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18152_18156 = null;var count__18153_18157 = 0;var i__18154_18158 = 0;while(true){
if((i__18154_18158 < count__18153_18157))
{var node_18159 = cljs.core._nth.call(null,chunk__18152_18156,i__18154_18158);goog.dom.classes.toggle(node_18159,class$);
{
var G__18160 = seq__18151_18155;
var G__18161 = chunk__18152_18156;
var G__18162 = count__18153_18157;
var G__18163 = (i__18154_18158 + 1);
seq__18151_18155 = G__18160;
chunk__18152_18156 = G__18161;
count__18153_18157 = G__18162;
i__18154_18158 = G__18163;
continue;
}
} else
{var temp__4126__auto___18164 = cljs.core.seq.call(null,seq__18151_18155);if(temp__4126__auto___18164)
{var seq__18151_18165__$1 = temp__4126__auto___18164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18151_18165__$1))
{var c__4295__auto___18166 = cljs.core.chunk_first.call(null,seq__18151_18165__$1);{
var G__18167 = cljs.core.chunk_rest.call(null,seq__18151_18165__$1);
var G__18168 = c__4295__auto___18166;
var G__18169 = cljs.core.count.call(null,c__4295__auto___18166);
var G__18170 = 0;
seq__18151_18155 = G__18167;
chunk__18152_18156 = G__18168;
count__18153_18157 = G__18169;
i__18154_18158 = G__18170;
continue;
}
} else
{var node_18171 = cljs.core.first.call(null,seq__18151_18165__$1);goog.dom.classes.toggle(node_18171,class$);
{
var G__18172 = cljs.core.next.call(null,seq__18151_18165__$1);
var G__18173 = null;
var G__18174 = 0;
var G__18175 = 0;
seq__18151_18155 = G__18172;
chunk__18152_18156 = G__18173;
count__18153_18157 = G__18174;
i__18154_18158 = G__18175;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18184__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18180_18185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18181_18186 = null;var count__18182_18187 = 0;var i__18183_18188 = 0;while(true){
if((i__18183_18188 < count__18182_18187))
{var node_18189 = cljs.core._nth.call(null,chunk__18181_18186,i__18183_18188);goog.dom.classes.set(node_18189,classes_18184__$1);
{
var G__18190 = seq__18180_18185;
var G__18191 = chunk__18181_18186;
var G__18192 = count__18182_18187;
var G__18193 = (i__18183_18188 + 1);
seq__18180_18185 = G__18190;
chunk__18181_18186 = G__18191;
count__18182_18187 = G__18192;
i__18183_18188 = G__18193;
continue;
}
} else
{var temp__4126__auto___18194 = cljs.core.seq.call(null,seq__18180_18185);if(temp__4126__auto___18194)
{var seq__18180_18195__$1 = temp__4126__auto___18194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18180_18195__$1))
{var c__4295__auto___18196 = cljs.core.chunk_first.call(null,seq__18180_18195__$1);{
var G__18197 = cljs.core.chunk_rest.call(null,seq__18180_18195__$1);
var G__18198 = c__4295__auto___18196;
var G__18199 = cljs.core.count.call(null,c__4295__auto___18196);
var G__18200 = 0;
seq__18180_18185 = G__18197;
chunk__18181_18186 = G__18198;
count__18182_18187 = G__18199;
i__18183_18188 = G__18200;
continue;
}
} else
{var node_18201 = cljs.core.first.call(null,seq__18180_18195__$1);goog.dom.classes.set(node_18201,classes_18184__$1);
{
var G__18202 = cljs.core.next.call(null,seq__18180_18195__$1);
var G__18203 = null;
var G__18204 = 0;
var G__18205 = 0;
seq__18180_18185 = G__18202;
chunk__18181_18186 = G__18203;
count__18182_18187 = G__18204;
i__18183_18188 = G__18205;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18210_18214 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18211_18215 = null;var count__18212_18216 = 0;var i__18213_18217 = 0;while(true){
if((i__18213_18217 < count__18212_18216))
{var node_18218 = cljs.core._nth.call(null,chunk__18211_18215,i__18213_18217);goog.dom.setTextContent(node_18218,value);
{
var G__18219 = seq__18210_18214;
var G__18220 = chunk__18211_18215;
var G__18221 = count__18212_18216;
var G__18222 = (i__18213_18217 + 1);
seq__18210_18214 = G__18219;
chunk__18211_18215 = G__18220;
count__18212_18216 = G__18221;
i__18213_18217 = G__18222;
continue;
}
} else
{var temp__4126__auto___18223 = cljs.core.seq.call(null,seq__18210_18214);if(temp__4126__auto___18223)
{var seq__18210_18224__$1 = temp__4126__auto___18223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18210_18224__$1))
{var c__4295__auto___18225 = cljs.core.chunk_first.call(null,seq__18210_18224__$1);{
var G__18226 = cljs.core.chunk_rest.call(null,seq__18210_18224__$1);
var G__18227 = c__4295__auto___18225;
var G__18228 = cljs.core.count.call(null,c__4295__auto___18225);
var G__18229 = 0;
seq__18210_18214 = G__18226;
chunk__18211_18215 = G__18227;
count__18212_18216 = G__18228;
i__18213_18217 = G__18229;
continue;
}
} else
{var node_18230 = cljs.core.first.call(null,seq__18210_18224__$1);goog.dom.setTextContent(node_18230,value);
{
var G__18231 = cljs.core.next.call(null,seq__18210_18224__$1);
var G__18232 = null;
var G__18233 = 0;
var G__18234 = 0;
seq__18210_18214 = G__18231;
chunk__18211_18215 = G__18232;
count__18212_18216 = G__18233;
i__18213_18217 = G__18234;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__18239_18243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18240_18244 = null;var count__18241_18245 = 0;var i__18242_18246 = 0;while(true){
if((i__18242_18246 < count__18241_18245))
{var node_18247 = cljs.core._nth.call(null,chunk__18240_18244,i__18242_18246);goog.dom.forms.setValue(node_18247,value);
{
var G__18248 = seq__18239_18243;
var G__18249 = chunk__18240_18244;
var G__18250 = count__18241_18245;
var G__18251 = (i__18242_18246 + 1);
seq__18239_18243 = G__18248;
chunk__18240_18244 = G__18249;
count__18241_18245 = G__18250;
i__18242_18246 = G__18251;
continue;
}
} else
{var temp__4126__auto___18252 = cljs.core.seq.call(null,seq__18239_18243);if(temp__4126__auto___18252)
{var seq__18239_18253__$1 = temp__4126__auto___18252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18239_18253__$1))
{var c__4295__auto___18254 = cljs.core.chunk_first.call(null,seq__18239_18253__$1);{
var G__18255 = cljs.core.chunk_rest.call(null,seq__18239_18253__$1);
var G__18256 = c__4295__auto___18254;
var G__18257 = cljs.core.count.call(null,c__4295__auto___18254);
var G__18258 = 0;
seq__18239_18243 = G__18255;
chunk__18240_18244 = G__18256;
count__18241_18245 = G__18257;
i__18242_18246 = G__18258;
continue;
}
} else
{var node_18259 = cljs.core.first.call(null,seq__18239_18253__$1);goog.dom.forms.setValue(node_18259,value);
{
var G__18260 = cljs.core.next.call(null,seq__18239_18253__$1);
var G__18261 = null;
var G__18262 = 0;
var G__18263 = 0;
seq__18239_18243 = G__18260;
chunk__18240_18244 = G__18261;
count__18241_18245 = G__18262;
i__18242_18246 = G__18263;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_18274 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__18270_18275 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18271_18276 = null;var count__18272_18277 = 0;var i__18273_18278 = 0;while(true){
if((i__18273_18278 < count__18272_18277))
{var node_18279 = cljs.core._nth.call(null,chunk__18271_18276,i__18273_18278);node_18279.innerHTML = value_18274;
{
var G__18280 = seq__18270_18275;
var G__18281 = chunk__18271_18276;
var G__18282 = count__18272_18277;
var G__18283 = (i__18273_18278 + 1);
seq__18270_18275 = G__18280;
chunk__18271_18276 = G__18281;
count__18272_18277 = G__18282;
i__18273_18278 = G__18283;
continue;
}
} else
{var temp__4126__auto___18284 = cljs.core.seq.call(null,seq__18270_18275);if(temp__4126__auto___18284)
{var seq__18270_18285__$1 = temp__4126__auto___18284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18270_18285__$1))
{var c__4295__auto___18286 = cljs.core.chunk_first.call(null,seq__18270_18285__$1);{
var G__18287 = cljs.core.chunk_rest.call(null,seq__18270_18285__$1);
var G__18288 = c__4295__auto___18286;
var G__18289 = cljs.core.count.call(null,c__4295__auto___18286);
var G__18290 = 0;
seq__18270_18275 = G__18287;
chunk__18271_18276 = G__18288;
count__18272_18277 = G__18289;
i__18273_18278 = G__18290;
continue;
}
} else
{var node_18291 = cljs.core.first.call(null,seq__18270_18285__$1);node_18291.innerHTML = value_18274;
{
var G__18292 = cljs.core.next.call(null,seq__18270_18285__$1);
var G__18293 = null;
var G__18294 = 0;
var G__18295 = 0;
seq__18270_18275 = G__18292;
chunk__18271_18276 = G__18293;
count__18272_18277 = G__18294;
i__18273_18278 = G__18295;
continue;
}
}
} else
{}
}
break;
}
}catch (e18269){if((e18269 instanceof Error))
{var e_18296 = e18269;domina.replace_children_BANG_.call(null,content,value_18274);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18269;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__18303_18307 = cljs.core.seq.call(null,children);var chunk__18304_18308 = null;var count__18305_18309 = 0;var i__18306_18310 = 0;while(true){
if((i__18306_18310 < count__18305_18309))
{var child_18311 = cljs.core._nth.call(null,chunk__18304_18308,i__18306_18310);frag.appendChild(child_18311);
{
var G__18312 = seq__18303_18307;
var G__18313 = chunk__18304_18308;
var G__18314 = count__18305_18309;
var G__18315 = (i__18306_18310 + 1);
seq__18303_18307 = G__18312;
chunk__18304_18308 = G__18313;
count__18305_18309 = G__18314;
i__18306_18310 = G__18315;
continue;
}
} else
{var temp__4126__auto___18316 = cljs.core.seq.call(null,seq__18303_18307);if(temp__4126__auto___18316)
{var seq__18303_18317__$1 = temp__4126__auto___18316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18303_18317__$1))
{var c__4295__auto___18318 = cljs.core.chunk_first.call(null,seq__18303_18317__$1);{
var G__18319 = cljs.core.chunk_rest.call(null,seq__18303_18317__$1);
var G__18320 = c__4295__auto___18318;
var G__18321 = cljs.core.count.call(null,c__4295__auto___18318);
var G__18322 = 0;
seq__18303_18307 = G__18319;
chunk__18304_18308 = G__18320;
count__18305_18309 = G__18321;
i__18306_18310 = G__18322;
continue;
}
} else
{var child_18323 = cljs.core.first.call(null,seq__18303_18317__$1);frag.appendChild(child_18323);
{
var G__18324 = cljs.core.next.call(null,seq__18303_18317__$1);
var G__18325 = null;
var G__18326 = 0;
var G__18327 = 0;
seq__18303_18307 = G__18324;
chunk__18304_18308 = G__18325;
count__18305_18309 = G__18326;
i__18306_18310 = G__18327;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__18297_SHARP_,p2__18298_SHARP_){return f.call(null,p1__18297_SHARP_,p2__18298_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
{if((function (){var G__18329 = list_thing;if(G__18329)
{var bit__4189__auto__ = (G__18329.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18329.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18329);
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
{if((function (){var G__18330 = content;if(G__18330)
{var bit__4189__auto__ = (G__18330.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18330.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18330);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18330);
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
{if((function (){var G__18331 = content;if(G__18331)
{var bit__4189__auto__ = (G__18331.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__18331.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18331);
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
