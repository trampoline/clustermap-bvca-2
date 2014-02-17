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
var opt_wrapper_37882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_37883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_37884 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_37883,table_section_wrapper_37883,opt_wrapper_37882,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_37884,table_section_wrapper_37883,cell_wrapper_37884,opt_wrapper_37882,table_section_wrapper_37883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_37883]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__37889 = cljs.core.seq.call(null,tbody);var chunk__37890 = null;var count__37891 = 0;var i__37892 = 0;while(true){
if((i__37892 < count__37891))
{var child = cljs.core._nth.call(null,chunk__37890,i__37892);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37893 = seq__37889;
var G__37894 = chunk__37890;
var G__37895 = count__37891;
var G__37896 = (i__37892 + 1);
seq__37889 = G__37893;
chunk__37890 = G__37894;
count__37891 = G__37895;
i__37892 = G__37896;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37889);if(temp__4092__auto__)
{var seq__37889__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37889__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37889__$1);{
var G__37897 = cljs.core.chunk_rest.call(null,seq__37889__$1);
var G__37898 = c__4148__auto__;
var G__37899 = cljs.core.count.call(null,c__4148__auto__);
var G__37900 = 0;
seq__37889 = G__37897;
chunk__37890 = G__37898;
count__37891 = G__37899;
i__37892 = G__37900;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__37889__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__37901 = cljs.core.next.call(null,seq__37889__$1);
var G__37902 = null;
var G__37903 = 0;
var G__37904 = 0;
seq__37889 = G__37901;
chunk__37890 = G__37902;
count__37891 = G__37903;
i__37892 = G__37904;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__37906 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__37906,0,null);var start_wrap = cljs.core.nth.call(null,vec__37906,1,null);var end_wrap = cljs.core.nth.call(null,vec__37906,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__37907 = wrapper.lastChild;
var G__37908 = (level - 1);
wrapper = G__37907;
level = G__37908;
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
domina.DomContent = (function (){var obj37910 = {};return obj37910;
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
log_debug.cljs$lang$applyTo = (function (arglist__37911){
var mesg = cljs.core.seq(arglist__37911);
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
log.cljs$lang$applyTo = (function (arglist__37912){
var mesg = cljs.core.seq(arglist__37912);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__37913){
var contents = cljs.core.seq(arglist__37913);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__37914_SHARP_){return p1__37914_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__37915_SHARP_,p2__37916_SHARP_){return goog.dom.insertChildAt(p1__37915_SHARP_,p2__37916_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37918_SHARP_,p2__37917_SHARP_){return goog.dom.insertSiblingBefore(p2__37917_SHARP_,p1__37918_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__37920_SHARP_,p2__37919_SHARP_){return goog.dom.insertSiblingAfter(p2__37919_SHARP_,p1__37920_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__37922_SHARP_,p2__37921_SHARP_){return goog.dom.replaceNode(p2__37921_SHARP_,p1__37922_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__37927_37931 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37928_37932 = null;var count__37929_37933 = 0;var i__37930_37934 = 0;while(true){
if((i__37930_37934 < count__37929_37933))
{var n_37935 = cljs.core._nth.call(null,chunk__37928_37932,i__37930_37934);goog.style.setStyle(n_37935,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37936 = seq__37927_37931;
var G__37937 = chunk__37928_37932;
var G__37938 = count__37929_37933;
var G__37939 = (i__37930_37934 + 1);
seq__37927_37931 = G__37936;
chunk__37928_37932 = G__37937;
count__37929_37933 = G__37938;
i__37930_37934 = G__37939;
continue;
}
} else
{var temp__4092__auto___37940 = cljs.core.seq.call(null,seq__37927_37931);if(temp__4092__auto___37940)
{var seq__37927_37941__$1 = temp__4092__auto___37940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37927_37941__$1))
{var c__4148__auto___37942 = cljs.core.chunk_first.call(null,seq__37927_37941__$1);{
var G__37943 = cljs.core.chunk_rest.call(null,seq__37927_37941__$1);
var G__37944 = c__4148__auto___37942;
var G__37945 = cljs.core.count.call(null,c__4148__auto___37942);
var G__37946 = 0;
seq__37927_37931 = G__37943;
chunk__37928_37932 = G__37944;
count__37929_37933 = G__37945;
i__37930_37934 = G__37946;
continue;
}
} else
{var n_37947 = cljs.core.first.call(null,seq__37927_37941__$1);goog.style.setStyle(n_37947,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37948 = cljs.core.next.call(null,seq__37927_37941__$1);
var G__37949 = null;
var G__37950 = 0;
var G__37951 = 0;
seq__37927_37931 = G__37948;
chunk__37928_37932 = G__37949;
count__37929_37933 = G__37950;
i__37930_37934 = G__37951;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37952){
var content = cljs.core.first(arglist__37952);
arglist__37952 = cljs.core.next(arglist__37952);
var name = cljs.core.first(arglist__37952);
var value = cljs.core.rest(arglist__37952);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__37957_37961 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37958_37962 = null;var count__37959_37963 = 0;var i__37960_37964 = 0;while(true){
if((i__37960_37964 < count__37959_37963))
{var n_37965 = cljs.core._nth.call(null,chunk__37958_37962,i__37960_37964);n_37965.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37966 = seq__37957_37961;
var G__37967 = chunk__37958_37962;
var G__37968 = count__37959_37963;
var G__37969 = (i__37960_37964 + 1);
seq__37957_37961 = G__37966;
chunk__37958_37962 = G__37967;
count__37959_37963 = G__37968;
i__37960_37964 = G__37969;
continue;
}
} else
{var temp__4092__auto___37970 = cljs.core.seq.call(null,seq__37957_37961);if(temp__4092__auto___37970)
{var seq__37957_37971__$1 = temp__4092__auto___37970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37957_37971__$1))
{var c__4148__auto___37972 = cljs.core.chunk_first.call(null,seq__37957_37971__$1);{
var G__37973 = cljs.core.chunk_rest.call(null,seq__37957_37971__$1);
var G__37974 = c__4148__auto___37972;
var G__37975 = cljs.core.count.call(null,c__4148__auto___37972);
var G__37976 = 0;
seq__37957_37961 = G__37973;
chunk__37958_37962 = G__37974;
count__37959_37963 = G__37975;
i__37960_37964 = G__37976;
continue;
}
} else
{var n_37977 = cljs.core.first.call(null,seq__37957_37971__$1);n_37977.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__37978 = cljs.core.next.call(null,seq__37957_37971__$1);
var G__37979 = null;
var G__37980 = 0;
var G__37981 = 0;
seq__37957_37961 = G__37978;
chunk__37958_37962 = G__37979;
count__37959_37963 = G__37980;
i__37960_37964 = G__37981;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__37982){
var content = cljs.core.first(arglist__37982);
arglist__37982 = cljs.core.next(arglist__37982);
var name = cljs.core.first(arglist__37982);
var value = cljs.core.rest(arglist__37982);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__37987_37991 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37988_37992 = null;var count__37989_37993 = 0;var i__37990_37994 = 0;while(true){
if((i__37990_37994 < count__37989_37993))
{var n_37995 = cljs.core._nth.call(null,chunk__37988_37992,i__37990_37994);n_37995.removeAttribute(cljs.core.name.call(null,name));
{
var G__37996 = seq__37987_37991;
var G__37997 = chunk__37988_37992;
var G__37998 = count__37989_37993;
var G__37999 = (i__37990_37994 + 1);
seq__37987_37991 = G__37996;
chunk__37988_37992 = G__37997;
count__37989_37993 = G__37998;
i__37990_37994 = G__37999;
continue;
}
} else
{var temp__4092__auto___38000 = cljs.core.seq.call(null,seq__37987_37991);if(temp__4092__auto___38000)
{var seq__37987_38001__$1 = temp__4092__auto___38000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37987_38001__$1))
{var c__4148__auto___38002 = cljs.core.chunk_first.call(null,seq__37987_38001__$1);{
var G__38003 = cljs.core.chunk_rest.call(null,seq__37987_38001__$1);
var G__38004 = c__4148__auto___38002;
var G__38005 = cljs.core.count.call(null,c__4148__auto___38002);
var G__38006 = 0;
seq__37987_37991 = G__38003;
chunk__37988_37992 = G__38004;
count__37989_37993 = G__38005;
i__37990_37994 = G__38006;
continue;
}
} else
{var n_38007 = cljs.core.first.call(null,seq__37987_38001__$1);n_38007.removeAttribute(cljs.core.name.call(null,name));
{
var G__38008 = cljs.core.next.call(null,seq__37987_38001__$1);
var G__38009 = null;
var G__38010 = 0;
var G__38011 = 0;
seq__37987_37991 = G__38008;
chunk__37988_37992 = G__38009;
count__37989_37993 = G__38010;
i__37990_37994 = G__38011;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38013 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38013,0,null);var v = cljs.core.nth.call(null,vec__38013,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38014_SHARP_){var attr = attrs__$1.item(p1__38014_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38021_38027 = cljs.core.seq.call(null,styles);var chunk__38022_38028 = null;var count__38023_38029 = 0;var i__38024_38030 = 0;while(true){
if((i__38024_38030 < count__38023_38029))
{var vec__38025_38031 = cljs.core._nth.call(null,chunk__38022_38028,i__38024_38030);var name_38032 = cljs.core.nth.call(null,vec__38025_38031,0,null);var value_38033 = cljs.core.nth.call(null,vec__38025_38031,1,null);domina.set_style_BANG_.call(null,content,name_38032,value_38033);
{
var G__38034 = seq__38021_38027;
var G__38035 = chunk__38022_38028;
var G__38036 = count__38023_38029;
var G__38037 = (i__38024_38030 + 1);
seq__38021_38027 = G__38034;
chunk__38022_38028 = G__38035;
count__38023_38029 = G__38036;
i__38024_38030 = G__38037;
continue;
}
} else
{var temp__4092__auto___38038 = cljs.core.seq.call(null,seq__38021_38027);if(temp__4092__auto___38038)
{var seq__38021_38039__$1 = temp__4092__auto___38038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38021_38039__$1))
{var c__4148__auto___38040 = cljs.core.chunk_first.call(null,seq__38021_38039__$1);{
var G__38041 = cljs.core.chunk_rest.call(null,seq__38021_38039__$1);
var G__38042 = c__4148__auto___38040;
var G__38043 = cljs.core.count.call(null,c__4148__auto___38040);
var G__38044 = 0;
seq__38021_38027 = G__38041;
chunk__38022_38028 = G__38042;
count__38023_38029 = G__38043;
i__38024_38030 = G__38044;
continue;
}
} else
{var vec__38026_38045 = cljs.core.first.call(null,seq__38021_38039__$1);var name_38046 = cljs.core.nth.call(null,vec__38026_38045,0,null);var value_38047 = cljs.core.nth.call(null,vec__38026_38045,1,null);domina.set_style_BANG_.call(null,content,name_38046,value_38047);
{
var G__38048 = cljs.core.next.call(null,seq__38021_38039__$1);
var G__38049 = null;
var G__38050 = 0;
var G__38051 = 0;
seq__38021_38027 = G__38048;
chunk__38022_38028 = G__38049;
count__38023_38029 = G__38050;
i__38024_38030 = G__38051;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38058_38064 = cljs.core.seq.call(null,attrs);var chunk__38059_38065 = null;var count__38060_38066 = 0;var i__38061_38067 = 0;while(true){
if((i__38061_38067 < count__38060_38066))
{var vec__38062_38068 = cljs.core._nth.call(null,chunk__38059_38065,i__38061_38067);var name_38069 = cljs.core.nth.call(null,vec__38062_38068,0,null);var value_38070 = cljs.core.nth.call(null,vec__38062_38068,1,null);domina.set_attr_BANG_.call(null,content,name_38069,value_38070);
{
var G__38071 = seq__38058_38064;
var G__38072 = chunk__38059_38065;
var G__38073 = count__38060_38066;
var G__38074 = (i__38061_38067 + 1);
seq__38058_38064 = G__38071;
chunk__38059_38065 = G__38072;
count__38060_38066 = G__38073;
i__38061_38067 = G__38074;
continue;
}
} else
{var temp__4092__auto___38075 = cljs.core.seq.call(null,seq__38058_38064);if(temp__4092__auto___38075)
{var seq__38058_38076__$1 = temp__4092__auto___38075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38058_38076__$1))
{var c__4148__auto___38077 = cljs.core.chunk_first.call(null,seq__38058_38076__$1);{
var G__38078 = cljs.core.chunk_rest.call(null,seq__38058_38076__$1);
var G__38079 = c__4148__auto___38077;
var G__38080 = cljs.core.count.call(null,c__4148__auto___38077);
var G__38081 = 0;
seq__38058_38064 = G__38078;
chunk__38059_38065 = G__38079;
count__38060_38066 = G__38080;
i__38061_38067 = G__38081;
continue;
}
} else
{var vec__38063_38082 = cljs.core.first.call(null,seq__38058_38076__$1);var name_38083 = cljs.core.nth.call(null,vec__38063_38082,0,null);var value_38084 = cljs.core.nth.call(null,vec__38063_38082,1,null);domina.set_attr_BANG_.call(null,content,name_38083,value_38084);
{
var G__38085 = cljs.core.next.call(null,seq__38058_38076__$1);
var G__38086 = null;
var G__38087 = 0;
var G__38088 = 0;
seq__38058_38064 = G__38085;
chunk__38059_38065 = G__38086;
count__38060_38066 = G__38087;
i__38061_38067 = G__38088;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38093_38097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38094_38098 = null;var count__38095_38099 = 0;var i__38096_38100 = 0;while(true){
if((i__38096_38100 < count__38095_38099))
{var node_38101 = cljs.core._nth.call(null,chunk__38094_38098,i__38096_38100);goog.dom.classes.add(node_38101,class$);
{
var G__38102 = seq__38093_38097;
var G__38103 = chunk__38094_38098;
var G__38104 = count__38095_38099;
var G__38105 = (i__38096_38100 + 1);
seq__38093_38097 = G__38102;
chunk__38094_38098 = G__38103;
count__38095_38099 = G__38104;
i__38096_38100 = G__38105;
continue;
}
} else
{var temp__4092__auto___38106 = cljs.core.seq.call(null,seq__38093_38097);if(temp__4092__auto___38106)
{var seq__38093_38107__$1 = temp__4092__auto___38106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38093_38107__$1))
{var c__4148__auto___38108 = cljs.core.chunk_first.call(null,seq__38093_38107__$1);{
var G__38109 = cljs.core.chunk_rest.call(null,seq__38093_38107__$1);
var G__38110 = c__4148__auto___38108;
var G__38111 = cljs.core.count.call(null,c__4148__auto___38108);
var G__38112 = 0;
seq__38093_38097 = G__38109;
chunk__38094_38098 = G__38110;
count__38095_38099 = G__38111;
i__38096_38100 = G__38112;
continue;
}
} else
{var node_38113 = cljs.core.first.call(null,seq__38093_38107__$1);goog.dom.classes.add(node_38113,class$);
{
var G__38114 = cljs.core.next.call(null,seq__38093_38107__$1);
var G__38115 = null;
var G__38116 = 0;
var G__38117 = 0;
seq__38093_38097 = G__38114;
chunk__38094_38098 = G__38115;
count__38095_38099 = G__38116;
i__38096_38100 = G__38117;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38122_38126 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38123_38127 = null;var count__38124_38128 = 0;var i__38125_38129 = 0;while(true){
if((i__38125_38129 < count__38124_38128))
{var node_38130 = cljs.core._nth.call(null,chunk__38123_38127,i__38125_38129);goog.dom.classes.remove(node_38130,class$);
{
var G__38131 = seq__38122_38126;
var G__38132 = chunk__38123_38127;
var G__38133 = count__38124_38128;
var G__38134 = (i__38125_38129 + 1);
seq__38122_38126 = G__38131;
chunk__38123_38127 = G__38132;
count__38124_38128 = G__38133;
i__38125_38129 = G__38134;
continue;
}
} else
{var temp__4092__auto___38135 = cljs.core.seq.call(null,seq__38122_38126);if(temp__4092__auto___38135)
{var seq__38122_38136__$1 = temp__4092__auto___38135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38122_38136__$1))
{var c__4148__auto___38137 = cljs.core.chunk_first.call(null,seq__38122_38136__$1);{
var G__38138 = cljs.core.chunk_rest.call(null,seq__38122_38136__$1);
var G__38139 = c__4148__auto___38137;
var G__38140 = cljs.core.count.call(null,c__4148__auto___38137);
var G__38141 = 0;
seq__38122_38126 = G__38138;
chunk__38123_38127 = G__38139;
count__38124_38128 = G__38140;
i__38125_38129 = G__38141;
continue;
}
} else
{var node_38142 = cljs.core.first.call(null,seq__38122_38136__$1);goog.dom.classes.remove(node_38142,class$);
{
var G__38143 = cljs.core.next.call(null,seq__38122_38136__$1);
var G__38144 = null;
var G__38145 = 0;
var G__38146 = 0;
seq__38122_38126 = G__38143;
chunk__38123_38127 = G__38144;
count__38124_38128 = G__38145;
i__38125_38129 = G__38146;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38151_38155 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38152_38156 = null;var count__38153_38157 = 0;var i__38154_38158 = 0;while(true){
if((i__38154_38158 < count__38153_38157))
{var node_38159 = cljs.core._nth.call(null,chunk__38152_38156,i__38154_38158);goog.dom.classes.toggle(node_38159,class$);
{
var G__38160 = seq__38151_38155;
var G__38161 = chunk__38152_38156;
var G__38162 = count__38153_38157;
var G__38163 = (i__38154_38158 + 1);
seq__38151_38155 = G__38160;
chunk__38152_38156 = G__38161;
count__38153_38157 = G__38162;
i__38154_38158 = G__38163;
continue;
}
} else
{var temp__4092__auto___38164 = cljs.core.seq.call(null,seq__38151_38155);if(temp__4092__auto___38164)
{var seq__38151_38165__$1 = temp__4092__auto___38164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38151_38165__$1))
{var c__4148__auto___38166 = cljs.core.chunk_first.call(null,seq__38151_38165__$1);{
var G__38167 = cljs.core.chunk_rest.call(null,seq__38151_38165__$1);
var G__38168 = c__4148__auto___38166;
var G__38169 = cljs.core.count.call(null,c__4148__auto___38166);
var G__38170 = 0;
seq__38151_38155 = G__38167;
chunk__38152_38156 = G__38168;
count__38153_38157 = G__38169;
i__38154_38158 = G__38170;
continue;
}
} else
{var node_38171 = cljs.core.first.call(null,seq__38151_38165__$1);goog.dom.classes.toggle(node_38171,class$);
{
var G__38172 = cljs.core.next.call(null,seq__38151_38165__$1);
var G__38173 = null;
var G__38174 = 0;
var G__38175 = 0;
seq__38151_38155 = G__38172;
chunk__38152_38156 = G__38173;
count__38153_38157 = G__38174;
i__38154_38158 = G__38175;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38184__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38180_38185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38181_38186 = null;var count__38182_38187 = 0;var i__38183_38188 = 0;while(true){
if((i__38183_38188 < count__38182_38187))
{var node_38189 = cljs.core._nth.call(null,chunk__38181_38186,i__38183_38188);goog.dom.classes.set(node_38189,classes_38184__$1);
{
var G__38190 = seq__38180_38185;
var G__38191 = chunk__38181_38186;
var G__38192 = count__38182_38187;
var G__38193 = (i__38183_38188 + 1);
seq__38180_38185 = G__38190;
chunk__38181_38186 = G__38191;
count__38182_38187 = G__38192;
i__38183_38188 = G__38193;
continue;
}
} else
{var temp__4092__auto___38194 = cljs.core.seq.call(null,seq__38180_38185);if(temp__4092__auto___38194)
{var seq__38180_38195__$1 = temp__4092__auto___38194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38180_38195__$1))
{var c__4148__auto___38196 = cljs.core.chunk_first.call(null,seq__38180_38195__$1);{
var G__38197 = cljs.core.chunk_rest.call(null,seq__38180_38195__$1);
var G__38198 = c__4148__auto___38196;
var G__38199 = cljs.core.count.call(null,c__4148__auto___38196);
var G__38200 = 0;
seq__38180_38185 = G__38197;
chunk__38181_38186 = G__38198;
count__38182_38187 = G__38199;
i__38183_38188 = G__38200;
continue;
}
} else
{var node_38201 = cljs.core.first.call(null,seq__38180_38195__$1);goog.dom.classes.set(node_38201,classes_38184__$1);
{
var G__38202 = cljs.core.next.call(null,seq__38180_38195__$1);
var G__38203 = null;
var G__38204 = 0;
var G__38205 = 0;
seq__38180_38185 = G__38202;
chunk__38181_38186 = G__38203;
count__38182_38187 = G__38204;
i__38183_38188 = G__38205;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38210_38214 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38211_38215 = null;var count__38212_38216 = 0;var i__38213_38217 = 0;while(true){
if((i__38213_38217 < count__38212_38216))
{var node_38218 = cljs.core._nth.call(null,chunk__38211_38215,i__38213_38217);goog.dom.setTextContent(node_38218,value);
{
var G__38219 = seq__38210_38214;
var G__38220 = chunk__38211_38215;
var G__38221 = count__38212_38216;
var G__38222 = (i__38213_38217 + 1);
seq__38210_38214 = G__38219;
chunk__38211_38215 = G__38220;
count__38212_38216 = G__38221;
i__38213_38217 = G__38222;
continue;
}
} else
{var temp__4092__auto___38223 = cljs.core.seq.call(null,seq__38210_38214);if(temp__4092__auto___38223)
{var seq__38210_38224__$1 = temp__4092__auto___38223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38210_38224__$1))
{var c__4148__auto___38225 = cljs.core.chunk_first.call(null,seq__38210_38224__$1);{
var G__38226 = cljs.core.chunk_rest.call(null,seq__38210_38224__$1);
var G__38227 = c__4148__auto___38225;
var G__38228 = cljs.core.count.call(null,c__4148__auto___38225);
var G__38229 = 0;
seq__38210_38214 = G__38226;
chunk__38211_38215 = G__38227;
count__38212_38216 = G__38228;
i__38213_38217 = G__38229;
continue;
}
} else
{var node_38230 = cljs.core.first.call(null,seq__38210_38224__$1);goog.dom.setTextContent(node_38230,value);
{
var G__38231 = cljs.core.next.call(null,seq__38210_38224__$1);
var G__38232 = null;
var G__38233 = 0;
var G__38234 = 0;
seq__38210_38214 = G__38231;
chunk__38211_38215 = G__38232;
count__38212_38216 = G__38233;
i__38213_38217 = G__38234;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38239_38243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38240_38244 = null;var count__38241_38245 = 0;var i__38242_38246 = 0;while(true){
if((i__38242_38246 < count__38241_38245))
{var node_38247 = cljs.core._nth.call(null,chunk__38240_38244,i__38242_38246);goog.dom.forms.setValue(node_38247,value);
{
var G__38248 = seq__38239_38243;
var G__38249 = chunk__38240_38244;
var G__38250 = count__38241_38245;
var G__38251 = (i__38242_38246 + 1);
seq__38239_38243 = G__38248;
chunk__38240_38244 = G__38249;
count__38241_38245 = G__38250;
i__38242_38246 = G__38251;
continue;
}
} else
{var temp__4092__auto___38252 = cljs.core.seq.call(null,seq__38239_38243);if(temp__4092__auto___38252)
{var seq__38239_38253__$1 = temp__4092__auto___38252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38239_38253__$1))
{var c__4148__auto___38254 = cljs.core.chunk_first.call(null,seq__38239_38253__$1);{
var G__38255 = cljs.core.chunk_rest.call(null,seq__38239_38253__$1);
var G__38256 = c__4148__auto___38254;
var G__38257 = cljs.core.count.call(null,c__4148__auto___38254);
var G__38258 = 0;
seq__38239_38243 = G__38255;
chunk__38240_38244 = G__38256;
count__38241_38245 = G__38257;
i__38242_38246 = G__38258;
continue;
}
} else
{var node_38259 = cljs.core.first.call(null,seq__38239_38253__$1);goog.dom.forms.setValue(node_38259,value);
{
var G__38260 = cljs.core.next.call(null,seq__38239_38253__$1);
var G__38261 = null;
var G__38262 = 0;
var G__38263 = 0;
seq__38239_38243 = G__38260;
chunk__38240_38244 = G__38261;
count__38241_38245 = G__38262;
i__38242_38246 = G__38263;
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
{var value_38274 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38270_38275 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38271_38276 = null;var count__38272_38277 = 0;var i__38273_38278 = 0;while(true){
if((i__38273_38278 < count__38272_38277))
{var node_38279 = cljs.core._nth.call(null,chunk__38271_38276,i__38273_38278);node_38279.innerHTML = value_38274;
{
var G__38280 = seq__38270_38275;
var G__38281 = chunk__38271_38276;
var G__38282 = count__38272_38277;
var G__38283 = (i__38273_38278 + 1);
seq__38270_38275 = G__38280;
chunk__38271_38276 = G__38281;
count__38272_38277 = G__38282;
i__38273_38278 = G__38283;
continue;
}
} else
{var temp__4092__auto___38284 = cljs.core.seq.call(null,seq__38270_38275);if(temp__4092__auto___38284)
{var seq__38270_38285__$1 = temp__4092__auto___38284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38270_38285__$1))
{var c__4148__auto___38286 = cljs.core.chunk_first.call(null,seq__38270_38285__$1);{
var G__38287 = cljs.core.chunk_rest.call(null,seq__38270_38285__$1);
var G__38288 = c__4148__auto___38286;
var G__38289 = cljs.core.count.call(null,c__4148__auto___38286);
var G__38290 = 0;
seq__38270_38275 = G__38287;
chunk__38271_38276 = G__38288;
count__38272_38277 = G__38289;
i__38273_38278 = G__38290;
continue;
}
} else
{var node_38291 = cljs.core.first.call(null,seq__38270_38285__$1);node_38291.innerHTML = value_38274;
{
var G__38292 = cljs.core.next.call(null,seq__38270_38285__$1);
var G__38293 = null;
var G__38294 = 0;
var G__38295 = 0;
seq__38270_38275 = G__38292;
chunk__38271_38276 = G__38293;
count__38272_38277 = G__38294;
i__38273_38278 = G__38295;
continue;
}
}
} else
{}
}
break;
}
}catch (e38269){if((e38269 instanceof Error))
{var e_38296 = e38269;domina.replace_children_BANG_.call(null,content,value_38274);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38269;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38303_38307 = cljs.core.seq.call(null,children);var chunk__38304_38308 = null;var count__38305_38309 = 0;var i__38306_38310 = 0;while(true){
if((i__38306_38310 < count__38305_38309))
{var child_38311 = cljs.core._nth.call(null,chunk__38304_38308,i__38306_38310);frag.appendChild(child_38311);
{
var G__38312 = seq__38303_38307;
var G__38313 = chunk__38304_38308;
var G__38314 = count__38305_38309;
var G__38315 = (i__38306_38310 + 1);
seq__38303_38307 = G__38312;
chunk__38304_38308 = G__38313;
count__38305_38309 = G__38314;
i__38306_38310 = G__38315;
continue;
}
} else
{var temp__4092__auto___38316 = cljs.core.seq.call(null,seq__38303_38307);if(temp__4092__auto___38316)
{var seq__38303_38317__$1 = temp__4092__auto___38316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38303_38317__$1))
{var c__4148__auto___38318 = cljs.core.chunk_first.call(null,seq__38303_38317__$1);{
var G__38319 = cljs.core.chunk_rest.call(null,seq__38303_38317__$1);
var G__38320 = c__4148__auto___38318;
var G__38321 = cljs.core.count.call(null,c__4148__auto___38318);
var G__38322 = 0;
seq__38303_38307 = G__38319;
chunk__38304_38308 = G__38320;
count__38305_38309 = G__38321;
i__38306_38310 = G__38322;
continue;
}
} else
{var child_38323 = cljs.core.first.call(null,seq__38303_38317__$1);frag.appendChild(child_38323);
{
var G__38324 = cljs.core.next.call(null,seq__38303_38317__$1);
var G__38325 = null;
var G__38326 = 0;
var G__38327 = 0;
seq__38303_38307 = G__38324;
chunk__38304_38308 = G__38325;
count__38305_38309 = G__38326;
i__38306_38310 = G__38327;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38297_SHARP_,p2__38298_SHARP_){return f.call(null,p1__38297_SHARP_,p2__38298_SHARP_);
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
{if((function (){var G__38329 = list_thing;if(G__38329)
{var bit__4050__auto__ = (G__38329.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38329.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38329);
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
{if((function (){var G__38330 = content;if(G__38330)
{var bit__4050__auto__ = (G__38330.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38330.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38330);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38330);
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
{if((function (){var G__38331 = content;if(G__38331)
{var bit__4050__auto__ = (G__38331.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38331.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38331);
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
